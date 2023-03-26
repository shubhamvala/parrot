declare module 'react-native-config' {
  interface Env {
    // app
    SIZE_MATTERS_BASE_WIDTH: string
    SIZE_MATTERS_BASE_HEIGHT: string
    APP_URL: string
    MAIN_URL: string
    API_URL: string
    AGREEMENT_URL: string
    PLACE_API_KEY: string
    MODE: string
    FEEDBACK_MAIL: string
    REFERRAL_API_PATH: string
    CODE_PUSH_DEPLOYMENT_KEY_ANDROID: string
    CODE_PUSH_DEPLOYMENT_KEY_IOS: string
  }

  const BuildConfig: Env

  export default BuildConfig
}
