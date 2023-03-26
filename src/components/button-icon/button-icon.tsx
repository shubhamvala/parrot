import {Icon, IconProps} from '@components/icon';
import {IPressableProps, ISpinnerProps, Pressable, Spinner} from 'native-base';
import React, {memo} from 'react';

type ButtonIconProps = IPressableProps & {
  name?: string;
  iconProps?: IconProps;
  visibleSpinner?: boolean;
  spinnerProps?: ISpinnerProps;
};
export const ButtonIcon = memo(
  ({
    name,
    iconProps,
    visibleSpinner,
    spinnerProps,
    ...props
  }: ButtonIconProps) => {
    return (
      <Pressable alignItems="center" justifyContent="center" {...props}>
        {visibleSpinner ? (
          <Spinner size={'sm'} color="white" {...spinnerProps} />
        ) : (
          <>{!!name && <Icon name={name} {...iconProps} />}</>
        )}
      </Pressable>
    );
  },
);
