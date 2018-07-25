import { Injectable } from '@angular/core';

import { PasteText } from '../models/paste-text.model';
import { Language} from '../models/language.model';

const contentMarkdown = 'Colons can be used to align columns.\n' +
  '\n' +
  '| Tables        | Are           | Cool  |\n' +
  '| ------------- |:-------------:| -----:|\n' +
  '| col 3 is      | right-aligned | $1600 |\n' +
  '| col 2 is      | centered      |   $12 |\n' +
  '| zebra stripes | are neat      |    $1 |\n' +
  '\n' +
  'There must be at least 3 dashes separating each header cell.\n' +
  'The outer pipes (|) are optional, and you don\'t need to make the \n' +
  'raw Markdown line up prettily. You can also use inline Markdown.\n' +
  '\n' +
  'Markdown | Less | Pretty\n' +
  '--- | --- | ---\n' +
  '*Still* | `renders` | **nicely**\n' +
  '1 | 2 | 3';

@Injectable({
  providedIn: 'root'
})

export class PasteTextService {

  constructor() { }

  getPasteText(): PasteText {
    const pasteText: PasteText = {
      id: 1,
      hash: 'ylxYos4',
      content: contentMarkdown,
      language: 1,
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
