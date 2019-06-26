import { Analyzer, ReportData } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

export class WinsAnalysis implements Analyzer {
  constructor(public teamName: string) {}

  run(matches: MatchData[]): ReportData {
    const TOTAL_GAMES = 38;
    let totalWins = 0;
    let totalDraws = 0;
    let totalLosses = 0;
    let homeWins = 0;
    let homeLosses = 0;
    let homeDraws = 0;
    let awayWins = 0;
    let awayLosses = 0;
    let awayDraws = 0;

    for (let match of matches) {
      if (match[1] === this.teamName) {
        if (match[5] === MatchResult.HomeWin) {
          homeWins++;
        }
        if (match[5] === MatchResult.Draw) {
          homeDraws++;
        }
      } else if (match[2] === this.teamName) {
        if (match[5] === MatchResult.AwayWin) {
          awayWins++;
        }
        if (match[5] === MatchResult.Draw) {
          awayDraws++;
        }
      }
    }
    totalWins = homeWins + awayWins;
    totalDraws = homeDraws + awayDraws;
    totalLosses = TOTAL_GAMES - (totalWins + totalDraws);
    homeLosses = TOTAL_GAMES / 2 - (homeWins + homeDraws);
    awayLosses = TOTAL_GAMES / 2 - (awayWins + awayDraws);

    // return `Team ${this.teamName} won: Home Wins: ${homeWins}, Away Wins: ${awayWins}, Total Wins: ${totalWins} this season`;
    return {
      title: this.teamName,
      body: `${this.teamName} have won ${totalWins} games, drawn ${totalDraws} games and lost ${totalLosses} games this season.`,
      wins: `Total Wins: ${totalWins} (Home Wins: ${homeWins}, Away Wins: ${awayWins})`,
      draws: `Total Draws: ${totalDraws} (Home Draws: ${homeDraws}, Away Draws: ${awayDraws})`,
      losses: `Total Losses: ${totalLosses} (Home Losses: ${homeLosses}, Away Losses: ${awayLosses})`,
    };
  }
}
