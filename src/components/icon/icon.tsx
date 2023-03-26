import {identity, pickBy} from 'lodash';
import {Icon as NBIcon} from 'native-base';
import React from 'react';
import {IconProps} from './icon.props';
import {IconName, icons} from './icons';

const omitNil = (obj: any) => pickBy(obj, identity);

export function Icon(props: IconProps) {
  const {name, size, height, width, ...rest} = props;

  const IconSVG = name ? icons[name as IconName] : NBIcon;
  const objectProps = omitNil({
    name,
    size,
    height: height || size,
    width: width || size,
    ...rest,
  });
  return <IconSVG {...objectProps} />;
}
