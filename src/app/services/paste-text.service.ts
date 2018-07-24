import { Injectable } from '@angular/core';

import { PasteText } from '../models/paste-text.model';
import { Language} from '../models/language.model';

@Injectable({
  providedIn: 'root'
})
export class PasteTextService {

  constructor() { }

  getPasteText(): PasteText {
    const pasteText: PasteText = {
      id: 1,
      hash: 'ylxYos4',
      content: 'Hello world!',
      language: 0,
      child: null,
      parent: null,
      createByGuest: 'Tran Dong',
      createByUser: null,
      createByTime: '2018-07-24 07:30:00'

    };

    return pasteText;
  }

  getLanguages() {
    const languages: Language[] = [ {id: 0, name: 'Javascript'}, {id: 1, name: 'C++'} ];
    return languages;
  }
}
