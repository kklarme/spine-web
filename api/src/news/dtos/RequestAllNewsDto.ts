import { Language, SPINE_LANGUAGE_MAP, SpineLanguage } from '../../language';

export class RequestAllNewsDto {
  Language: SpineLanguage;

  constructor(language: Language | SpineLanguage) {
    this.Language = typeof language === 'string' ? SPINE_LANGUAGE_MAP[language] : language;
  }
}
