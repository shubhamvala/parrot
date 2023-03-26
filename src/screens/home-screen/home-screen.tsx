import {VideoView} from '@components/index';
import {Box} from 'native-base';
import React from 'react';

const HomeScreen = () => {
  return (
    <Box safeAreaTop flex={1}>
      <VideoView />
    </Box>
  );
};

export default HomeScreen;
