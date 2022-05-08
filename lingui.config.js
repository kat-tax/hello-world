// @ts-check
/**
 * @type {Partial<import('@lingui/conf').LinguiConfig>}
 */

const config = {
  format: 'po',
  sourceLocale: 'en',
  locales: ['en', 'es'],
  fallbackLocales: {'default': 'en'},
  compileNamespace: 'ts',
  catalogs: [{
    path: 'src/assets/locales/{locale}/messages',
    include: ['src'],
    exclude: ['**/node_modules/**', '/__tests__/', '*.test.*'],
  }],
};

module.exports = config;
