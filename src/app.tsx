import {setI18nConfig} from '@i18n/index';
import {RootNavigator} from '@navigation/index';
import {theme} from '@styles/index';
import {NativeBaseProvider} from 'native-base';
import React from 'react';

setI18nConfig();

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <RootNavigator />
    </NativeBaseProvider>
  );
};

export default App;
