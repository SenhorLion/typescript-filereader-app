import fs from 'fs';
import { MatchData } from './MatchData';
import { MatchResult } from './MatchResult';
import { dateStringToDate } from './utils';
export class CSVFileReader {
  data: MatchData[] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map(
        (row: string): string[] => {
          return row.split(',');
        },
      )
      .map(
        (row: string[]): MatchData => {
          //Date, string, string, number, number, MatchResult, string];
          return [dateStringToDate(row[0]), row[1], row[2], parseInt(row[3]), parseInt(row[4]), row[5] as MatchResult, row[6]];
        },
      );
  }
}
