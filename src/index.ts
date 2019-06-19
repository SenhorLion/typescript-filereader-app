import fs from 'fs';

import { CSVFileReader } from './CSVFileReader';
import { MatchResult } from './MatchResult';

const reader = new CSVFileReader('football.csv');
reader.read();
const matches = reader.data;

console.log('Matches', matches);

let spursWins = 0;

for (let match of matches) {
  console.log('match', match);
  if (match[1] === 'Tottenham' && match[5] === MatchResult.HomeWin) {
    spursWins++;
  } else if (match[2] === 'Tottenham' && match[5] === MatchResult.AwayWin) {
    spursWins++;
  }
}

console.log('spurs', spursWins);
