import fs from 'fs';
import { request } from './fetch-request-example';
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

/**
 * Fetch Demo with Typescript
 */
// Test Fetch stuff here:

// 1. Handle a rejected Promise from Fetch => Network error
// 2. Handle !Response.ok
// 3. ...

const wesBosAPI = 'https://wesbos.com/wp-json/wp/v2/posts';
const dogsAPI = 'https://dog.ceo/api/breeds/image/random';
request(dogsAPI)
  .then(response => {
    // const { status, message } = response;
    // console.log({ status, message });
    console.log('Response');
    console.log({ response });
  })
  .catch(error => console.log('ERROR', error));
