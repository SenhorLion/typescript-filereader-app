import { MatchData } from './MatchData';

export interface Analyzer {
  run(matches: MatchData[]): ReportData;
}

export interface ReportData {
  title: string;
  body: string;
}

export interface OutputTarget {
  print(report: object): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);

    this.outputTarget.print(report);
  }
}
