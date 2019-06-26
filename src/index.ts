import fs from 'fs';
import { request } from './fetch-request-example';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CSVFileReader } from './CSVFileReader';

const csvFileReader = new CSVFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
const matches = matchReader.matches;

// console.log('Matches', matches);

let totalWins = 0;
let homeWins = 0;
let awayWins = 0;

for (let match of matches) {
  if (match[1] === 'Tottenham' && match[5] === MatchResult.HomeWin) {
    homeWins++;
  } else if (match[2] === 'Tottenham' && match[5] === MatchResult.AwayWin) {
    awayWins++;
  }
}
totalWins = homeWins + awayWins;

console.log(`Team Tottenham won: Home Wins: ${homeWins}, Away Wins: ${awayWins}, Total Wins: ${totalWins} this season`);

/**
 * Fetch Demo with Typescript
 */
// Test Fetch stuff here:

// 1. Handle a rejected Promise from Fetch => Network error
// 2. Handle !Response.ok
// 3. ...

// const wesBosAPI = 'https://wesbos.com/wp-json/wp/v2/posts';
// const dogsAPI = 'https://dog.ceo/api/breeds/image/random';
// request(dogsAPI)
//   .then(response => {
//     // const { status, message } = response;
//     // console.log({ status, message });
//     console.log({ response });
//   })
//   .catch(error => console.log('ERROR', error));
