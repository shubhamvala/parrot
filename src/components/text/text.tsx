import {translate} from '@i18n/translate';
import {ITextProps, Text as NBText} from 'native-base';
import {ResponsiveValue} from 'native-base/lib/typescript/components/types';
import {IFontWeight} from 'native-base/lib/typescript/theme/base/typography';
import React, {memo} from 'react';

export type TextProps = ITextProps & {
  tx?: string;
  text?: string | number;
  txOptions?: Record<string, string | number>;
  fontWeightIOS?: ResponsiveValue<IFontWeight | number | string> | undefined;
  component?: any;
  variant?: any;
  textAllCaps?: boolean;
};
export const Text = memo(
  ({
    text,
    tx,
    children,
    txOptions,
    component,
    textAllCaps,
    ...props
  }: TextProps) => {
    const content = tx ? translate(tx, txOptions) : text;
    const contentMain =
      typeof content === 'string' && textAllCaps
        ? content.toUpperCase()
        : content;

    const Component = component || NBText;
    return (
      <Component {...props}>
        {contentMain}
        {children && children}
      </Component>
    );
  },
);
