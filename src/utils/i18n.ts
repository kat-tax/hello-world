import {i18n} from '@lingui/core';
import {en, de, es, pt, ja, ru, ar, id} from 'make-plural/plurals';

let nativeMessages = {};
nativeMessages['en'] = require('assets/locales/en/messages');
nativeMessages['de'] = require('assets/locales/de/messages');
nativeMessages['es'] = require('assets/locales/es/messages');
nativeMessages['pt'] = require('assets/locales/pt/messages');
nativeMessages['ja'] = require('assets/locales/ja/messages');
nativeMessages['ru'] = require('assets/locales/ru/messages');
nativeMessages['ar'] = require('assets/locales/ar/messages');
nativeMessages['id'] = require('assets/locales/id/messages');

export type Language = 'en' | 'de' | 'es' | 'pt' | 'ja' | 'ru' | 'ar' | 'id';

export async function loadLocale(locale: string = 'en') {
  const {messages} = nativeMessages[locale];
  i18n.load(locale, messages);
  i18n.activate(locale);
}

i18n.loadLocaleData({
  en: {plurals: en},
  de: {plurals: de},
  es: {plurals: es},
  pt: {plurals: pt},
  ja: {plurals: ja},
  ru: {plurals: ru},
  id: {plurals: id},
  ar: {plurals: ar},
});
