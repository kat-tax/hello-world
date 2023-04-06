import type {LinguiConfig} from '@lingui/conf';

const config: LinguiConfig = {
  format: 'po',
  locales: ['en', 'de', 'es', 'pt', 'ja', 'ru', 'ar', 'id'],
  sourceLocale: 'en',
  fallbackLocales: {'default': 'en'},
  catalogs: [{
    path: 'src/assets/locales/{locale}/messages',
    exclude: ['**/node_modules/**', '/__tests__/', '*.spec.*'],
    include: ['src'],
  }],
}

export default config;
