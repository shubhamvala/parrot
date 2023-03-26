import {Text} from '@components/text';
import {Box} from 'native-base';
import React from 'react';

export const QuestionView = () => {
  return (
    <Box
      mx={4}
      mt={4}
      borderRadius={12}
      backgroundColor={'black'}
      px={8}
      py={4}>
      <Text
        tx={'question-es'}
        color={'white'}
        fontFamily={'body'}
        fontWeight={'500'}
        fontSize={'lg'}
        textAlign={'center'}
      />
      <Text
        tx={'question-en'}
        color={'white'}
        fontFamily={'body'}
        fontWeight={'400'}
        fontSize={'sm'}
        textAlign={'center'}
        opacity={0.5}
      />
    </Box>
  );
};
