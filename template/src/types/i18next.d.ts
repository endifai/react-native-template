import 'i18next'

import resources from '../i18n/locales/en.json'

declare module 'i18next' {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    resources: typeof resources
  }
}
