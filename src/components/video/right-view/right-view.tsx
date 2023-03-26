import {Button} from '@components/button';
import {Icon} from '@components/icon';
import {Text} from '@components/text';
import {Box, Pressable, useToken} from 'native-base';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export const RightView = () => {
  const [green700, otherGreenShade1COpacity60, otherGreenShade6COpacity00] =
    useToken('colors', [
      'green.700',
      'other.greenShade1COpacity60',
      'other.greenShade6COpacity00',
    ]);
  return (
    <Box position={'absolute'} bottom={0} left={0} right={0}>
      <Box width={'100%'} height={'100%'} position={'absolute'}>
        <LinearGradient
          style={{width: '100%', height: '100%'}}
          colors={[
            green700,
            otherGreenShade1COpacity60,
            otherGreenShade6COpacity00,
          ]}
          start={{x: 0.5, y: 1}}
          end={{x: 0.5, y: 0}}
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
        <Box position={'absolute'} alignSelf={'center'} top={-48}>
          <Icon name="icon-right" />
        </Box>
        <Pressable
          position={'absolute'}
          top={0}
          right={0}
          p={3}
          onPress={() => {}}>
          <Icon name={'icon-bookmark'} />
        </Pressable>
        <Text
          tx={'well-done'}
          color={'green.600'}
          fontFamily={'body'}
          fontWeight={'700'}
          fontSize={'lg'}
          textAlign={'center'}
          textAllCaps
          mt={4}
        />
        <Box
          alignSelf={'center'}
          bg={'other.greenShade05Opacity14'}
          px={4}
          py={2}
          mt={4}
          borderRadius={8}>
          <Text
            tx={'right-answer-en'}
            color={'green.600'}
            fontFamily={'body'}
            fontWeight={'500'}
            fontSize={'lg'}
          />
        </Box>
      </Box>
      <Box
        mx={4}
        position={'absolute'}
        alignItems={'center'}
        left={0}
        right={0}
        bottom={12}>
        <Button
          width={'100%'}
          labelTx={'continue'}
          textAllCaps
          buttonColor={'green.500'}
          colorScheme={'green'}
        />
      </Box>
    </Box>
  );
};
