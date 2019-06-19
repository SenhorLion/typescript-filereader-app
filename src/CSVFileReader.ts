import fs from 'fs';

export class CSVFileReader {
  data: string[][];

  constructor(public filename: string) {
    this.data = fs
      .readFileSync(filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map(
        (row: string): string[] => {
          return row.split(',');
        },
      );
  }
}
