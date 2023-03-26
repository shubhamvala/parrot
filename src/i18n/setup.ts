import {I18n} from 'i18n-js';
import {I18nManager} from 'react-native';
import * as RNLocalize from 'react-native-localize';
import en from './translations/en.json';

const DEFAULT_RTL = false;
const DEFAULT_LOCALE = 'en';
const translationGetters = {
  en,
};

let i18nObj: any;

export const setI18nConfig = () => {
  // fallback if no available language fits
  const fallback = {languageTag: DEFAULT_LOCALE, isRTL: DEFAULT_RTL};

  const {languageTag, isRTL} =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  const i18n = new I18n({
    [languageTag]:
      translationGetters[languageTag as keyof typeof translationGetters],
  });
  i18n.locale = languageTag;
  i18nObj = i18n;
};

export const getI18nObj = () => {
  return i18nObj;
};

export const getLocale = () => {
  // fallback if no available language fits
  const fallback = {languageTag: DEFAULT_LOCALE, isRTL: DEFAULT_RTL};
  const {languageTag} =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;
  return languageTag;
};

export const geTimezone = () => {
  return RNLocalize.getTimeZone();
};
