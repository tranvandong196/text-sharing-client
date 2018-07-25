import { InMemoryDbService } from 'angular-in-memory-web-api';

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

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pasteText = {
      id: 1,
      hash: 'ylxYos4',
      content: contentMarkdown,
      language: 2,
      child: null,
      parent: null,
      createByGuest: 'Tran Dong',
      createByUser: null,
      createByTime: '2018-07-24 07:30:00'
    };

    const languages = [
      {id: 0, name: 'Javascript'},
      {id: 1, name: 'C++'},
      {id: 2, name: 'Markdown'},
      {id: 3, name: 'Plain text'}
    ];
    return {pasteText, languages};
  }
}
