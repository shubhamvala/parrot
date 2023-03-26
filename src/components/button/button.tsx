import {Text, TextProps} from '@components/text';
import {Box, Button as NBButton, IButtonProps} from 'native-base';
import React, {memo} from 'react';

type ButtonProps = IButtonProps & {
  labelTx?: string;
  label?: string;
  labelTxOptions?: Record<string, string | number>;
  textColor?: string;
  buttonColor?: string;
  textAllCaps?: boolean;
  _text?: TextProps;
};
export const Button = memo(
  ({
    label,
    labelTx,
    labelTxOptions,
    _text,
    children,
    disabled,
    buttonColor,
    textColor,
    textAllCaps,
    ...props
  }: ButtonProps) => {
    const buttonProps = disabled ? {bg: 'gray.400'} : {};
    return (
      <NBButton
        bg={buttonColor || 'primary.300'}
        h={12}
        alignItems="center"
        justifyContent={'center'}
        borderRadius={16}
        disabled={disabled}
        {...buttonProps}
        _spinner={{
          color: textColor || 'white',
        }}
        spinnerPlacement="end"
        shadow={0}
        colorScheme={'primary'}
        {...props}>
        <Box>
          {(!!labelTx || !!label) && (
            <Text
              fontFamily={'body'}
              fontSize={'md'}
              fontWeightIOS={'700'}
              color={textColor || 'white'}
              text={label}
              tx={labelTx}
              txOptions={labelTxOptions}
              textAllCaps={textAllCaps}
              mt={-1}
              mx={2}
              {..._text}
            />
          )}
          {children}
        </Box>
      </NBButton>
    );
  },
);
