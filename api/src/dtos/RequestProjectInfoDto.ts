import { RequestAllProjectsDto } from './RequestAllProjectsDto';
import { Language } from '../SpineLanguage';

export class RequestProjectInfoDto extends RequestAllProjectsDto {
  ProjectID: string | number;

  constructor(
    id: string | number,
    username: string | null,
    password: string | null,
    language: Language,
  ) {
    super(username, password, language);
    this.ProjectID = id;
  }
}
