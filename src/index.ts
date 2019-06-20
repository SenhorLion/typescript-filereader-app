import fs from 'fs';

import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const reader = new MatchReader('football.csv');
reader.read();
const matches = reader.data;

// console.log('Matches', matches);

let spursWins = 0;

for (let match of matches) {
  if (match[1] === 'Tottenham' && match[5] === MatchResult.HomeWin) {
    spursWins++;
  } else if (match[2] === 'Tottenham' && match[5] === MatchResult.AwayWin) {
    spursWins++;
  }
}

console.log('spurs won', spursWins);
