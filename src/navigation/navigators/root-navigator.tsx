import {RootParamList} from '@navigation/params';
import Routes from '@navigation/routes';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {ComponentProps, forwardRef} from 'react';

const Stack = createNativeStackNavigator<RootParamList>();
const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* Auth Screen */}
      <Stack.Screen
        name={Routes.HomeScreen}
        component={require('@screens/home-screen').default}
      />
    </Stack.Navigator>
  );
};

export const RootNavigator = forwardRef<
  NavigationContainerRef<any>,
  Partial<ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <RootStack />
    </NavigationContainer>
  );
});
RootNavigator.displayName = 'RootNavigator';

const exitRoutes = [Routes.HomeScreen];
export const canExit = (routeName: string) =>
  exitRoutes.includes(routeName as any);
