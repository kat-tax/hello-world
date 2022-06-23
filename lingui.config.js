// @ts-check
/**
 * @type {Partial<import('@lingui/conf').LinguiConfig>}
 */

module.exports = {
  format: 'po',
  sourceLocale: 'en',
  locales: ['en', 'es', 'de', 'ar', 'pt', 'id', 'ru'],
  fallbackLocales: {'default': 'en'},
  compileNamespace: 'ts',
  catalogs: [{
    path: 'src/assets/locales/{locale}/messages',
    include: ['src'],
    exclude: ['**/node_modules/**', '/__tests__/', '*.spec.*'],
  }],
};
