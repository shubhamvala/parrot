import {Icon} from '@components/icon';
import {Box, HStack, Pressable, useToken} from 'native-base';
import React from 'react';
import * as Progress from 'react-native-progress';

type VideoViewHeaderProps = {
  progress: number;
};

export const VideoViewHeader = (props: VideoViewHeaderProps) => {
  const {progress} = props;
  const [primary300, otherGrayShade70Opacity22] = useToken('colors', [
    'primary.300',
    'other.grayShade70Opacity22',
  ]);
  return (
    <HStack safeAreaTop p={2} alignItems={'center'}>
      <Pressable p={2} onPress={() => {}}>
        <Icon name="icon-close" />
      </Pressable>
      <Box flex={1} px={2}>
        <Progress.Bar
          progress={progress}
          color={primary300}
          unfilledColor={otherGrayShade70Opacity22}
          width={null}
          borderWidth={0}
        />
      </Box>
      <Pressable p={2} onPress={() => {}}>
        <Icon name="icon-more" />
      </Pressable>
    </HStack>
  );
};
