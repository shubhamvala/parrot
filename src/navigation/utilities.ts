import {
  NavigationContainerRef,
  NavigationState,
  PartialState,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {RefObject, useCallback, useEffect, useRef, useState} from 'react';
import {BackHandler} from 'react-native';
import {AppNavigationProps} from './params';

export const RootNavigation = {
  navigate(name: string, params?: any) {
    name;
    params;
  },
  goBack() {}, // eslint-disable-line @typescript-eslint/no-empty-function
  resetRoot(state?: PartialState<NavigationState> | NavigationState) {}, // eslint-disable-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  getRootState(): NavigationState {
    return {} as any;
  },
};

export const useAppNavigation = () => useNavigation<AppNavigationProps>();

/**
 * Gets the current screen from any navigation state.
 */
export function getActiveRouteName(
  state: NavigationState | PartialState<NavigationState>,
): any {
  const route = state.routes[state.index || 0];

  // Found the active route -- return the name
  if (!route.state) {
    return route.name;
  }

  // Recursive call to deal with nested routers
  return getActiveRouteName(route.state);
}

export function navigateToScreen(screenName: string, params?: any) {
  RootNavigation.navigate(screenName, params);
}

export function useAppRoutes() {
  const routes = useRoute();

  const checkCurrentRoute = useCallback(
    (name: any) => {
      return routes?.name === name;
    },
    [routes],
  );

  return {checkCurrentRoute};
}

/**
 * Hook that handles Android back button presses and forwards those on to
 * the navigation or allows exiting the app.
 */
export function useBackButtonHandler(
  ref: RefObject<NavigationContainerRef<any>>,
  canExit: (routeName: string) => boolean,
) {
  useEffect(() => {
    canExitRef.current = canExit;
  }, [canExit]);

  const canExitRef = useRef(canExit);

  useEffect(() => {
    // We'll fire this when the back button is pressed on Android.
    const onBackPress = () => {
      const navigation = ref.current;

      if (navigation == null) {
        return false;
      }

      // grab the current route
      const routeName = getActiveRouteName(navigation.getRootState());

      // are we allowed to exit?
      if (canExitRef.current(routeName)) {
        // let the system know we've not handled this event
        return false;
      }

      // we can't exit, so let's turn this into a back action
      if (navigation.canGoBack()) {
        navigation.goBack();

        return true;
      }

      return false;
    };

    // Subscribe when we come to life
    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    // Unsubscribe when we're done
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, [ref]);
}

/**
 * Custom hook for persisting navigation state.
 */
export function useNavigationPersistence(storage: any, persistenceKey: string) {
  const [initialNavigationState, setInitialNavigationState] = useState();
  const [isRestoringNavigationState, setIsRestoringNavigationState] =
    useState(true);

  const routeNameRef = useRef();
  const onNavigationStateChange = (state: any) => {
    const currentRouteName = getActiveRouteName(state);

    // Save the current route name for later comparison
    routeNameRef.current = currentRouteName;

    // Persist state to storage
    storage.save(persistenceKey, state);
  };

  const restoreState = useCallback(async () => {
    try {
      const state = await storage.load(persistenceKey);
      if (state) {
        setInitialNavigationState(state);
      }
    } finally {
      setIsRestoringNavigationState(false);
    }
  }, [persistenceKey, storage]);

  useEffect(() => {
    if (isRestoringNavigationState) {
      restoreState();
    }
  }, [isRestoringNavigationState, restoreState]);

  return {onNavigationStateChange, restoreState, initialNavigationState};
}
