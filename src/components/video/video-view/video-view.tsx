import {Box} from 'native-base';
import React, {useCallback, useState} from 'react';
import {StyleSheet} from 'react-native';
import Video from 'react-native-video';
import {
  AnswerView,
  QuestionView,
  RightView,
  SpeakView,
  VideoViewHeader,
} from '..';

export const VideoView = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const renderViews = useCallback(() => {
    const percentage =
      (currentTime > 0 && duration > 0 ? currentTime / duration : 0) * 100;
    console.log('perse', percentage);
    if (percentage > 80) {
      return <RightView />;
    } else if (percentage > 60) {
      return <SpeakView />;
    } else if (percentage > 40) {
      return <AnswerView />;
    } else if (percentage > 20) {
      return <QuestionView />;
    } else {
      return null;
    }
  }, [currentTime, duration]);

  return (
    <Box flex={1} position={'absolute'} top={0} left={0} right={0} bottom={0}>
      <Video
        source={require('@assets/video/main-video.mp4')}
        resizeMode={'cover'}
        controls={false}
        fullscreen={false}
        onProgress={e => setCurrentTime(e.currentTime)}
        onLoad={e => setDuration(e.duration)}
        style={[StyleSheet.absoluteFill, {backgroundColor: 'white'}]}
      />
      <VideoViewHeader
        progress={currentTime > 0 && duration > 0 ? currentTime / duration : 0}
      />
      {renderViews()}
    </Box>
  );
};
