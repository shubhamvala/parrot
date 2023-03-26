import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Routes from '../routes';

export type RootParamList = {
  // Auth Screen
  [Routes.HomeScreen]: undefined;
};

export type AppNavigationProps = NativeStackNavigationProp<RootParamList>;
