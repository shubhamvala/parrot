import {Icon} from '@components/icon';
import {Text} from '@components/text';
import {Box, Image, Pressable} from 'native-base';
import React from 'react';

export const SpeakView = () => {
  return (
    <Box position={'absolute'} bottom={0} left={0} right={0}>
      <Box width={'100%'} height={'100%'} position={'absolute'}>
        <Image
          width={'100%'}
          height={'100%'}
          source={require('@assets/images/bg-speak.png')}
          alt={'bg-speak'}
        />
      </Box>
      <Box
        mx={4}
        mb={32}
        borderRadius={20}
        backgroundColor={'white'}
        height={40}
        px={8}
        pt={4}>
        <Pressable
          position={'absolute'}
          top={0}
          right={0}
          p={3}
          onPress={() => {}}>
          <Icon name={'icon-bookmark'} />
        </Pressable>
        <Text
          tx={'speak-now'}
          color={'black'}
          fontFamily={'body'}
          fontWeight={'400'}
          fontSize={'sm'}
          textAlign={'center'}
          opacity={0.5}
        />
        <Text
          tx={'speak-es-one'}
          color={'primary.500'}
          fontFamily={'body'}
          fontWeight={'500'}
          fontSize={'lg'}
          textAlign={'center'}
          mt={4}>
          <Text tx={'speak-es-two'} color={'gray.400'} />
        </Text>
      </Box>
      <Box
        mx={4}
        position={'absolute'}
        alignItems={'center'}
        left={0}
        right={0}
        bottom={12}>
        <Icon name={'icon-equalizer'} />
      </Box>
    </Box>
  );
};
