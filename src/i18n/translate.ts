import memoize from 'lodash.memoize'; // Use for caching/memoize for better performance
import {getI18nObj} from './setup';

export const translate = memoize(
  (key, config) => {
    const i18n = getI18nObj();
    const translated = i18n.t(key, {
      ...config,
      defaults: [{message: 'No translation'}],
    });
    return translated;
  },
  (key, config) => (config ? key + JSON.stringify(config) : key),
);
