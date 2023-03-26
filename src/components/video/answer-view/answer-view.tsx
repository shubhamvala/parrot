import {Icon} from '@components/icon';
import {Text} from '@components/text';
import {Box, HStack, Pressable} from 'native-base';
import React from 'react';

export const AnswerView = () => {
  return (
    <Box position={'absolute'} bottom={0} left={0} right={0}>
      <Box
        mx={4}
        mb={32}
        borderRadius={20}
        backgroundColor={'white'}
        height={40}
        px={8}
        pt={8}>
        <Pressable
          position={'absolute'}
          top={0}
          right={0}
          p={3}
          onPress={() => {}}>
          <Icon name={'icon-bookmark'} />
        </Pressable>
        <HStack alignItems={'center'} justifyContent={'center'}>
          <Icon name={'icon-speaker'} />
          <Text
            tx={'answer-es'}
            color={'black'}
            fontFamily={'body'}
            fontWeight={'500'}
            fontSize={'lg'}
            textAlign={'center'}
            ml={4}
          />
        </HStack>
        <Text
          tx={'answer-en'}
          color={'black'}
          fontFamily={'body'}
          fontWeight={'400'}
          fontSize={'sm'}
          textAlign={'center'}
          opacity={0.5}
        />
        <Pressable
          position={'absolute'}
          bottom={-32}
          alignSelf={'center'}
          width={16}
          height={16}
          borderRadius={20}
          backgroundColor={'primary.400'}
          alignItems={'center'}
          justifyContent={'center'}
          onPress={() => {}}>
          <Icon name={'icon-mic'} />
        </Pressable>
      </Box>
    </Box>
  );
};
