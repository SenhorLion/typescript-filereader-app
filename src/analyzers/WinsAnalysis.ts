import { Analyzer, ReportData } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

export class WinsAnalysis implements Analyzer {
  constructor(public teamName: string) {}

  run(matches: MatchData[]): ReportData {
    let totalWins = 0;
    let homeWins = 0;
    let awayWins = 0;

    for (let match of matches) {
      if (match[1] === this.teamName && match[5] === MatchResult.HomeWin) {
        homeWins++;
      } else if (match[2] === this.teamName && match[5] === MatchResult.AwayWin) {
        awayWins++;
      }
    }
    totalWins = homeWins + awayWins;

    // return `Team ${this.teamName} won: Home Wins: ${homeWins}, Away Wins: ${awayWins}, Total Wins: ${totalWins} this season`;
    return {
      title: this.teamName,
      body: `Team ${this.teamName} won: Home Wins: ${homeWins}, Away Wins: ${awayWins}, Total Wins: ${totalWins} this season`,
    };
  }
}
