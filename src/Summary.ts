import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HTMLReport } from './reporters/HTMLReport';
import { ConsoleReport } from './reporters/ConsoleReport';

export interface Analyzer {
  run(matches: MatchData[]): ReportData;
}

export interface ReportData {
  title: string;
  body: string;
  wins: string;
  draws: string;
  losses: string;
}

export interface OutputTarget {
  print(report: object): void;
}

export class Summary {
  static analysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HTMLReport());
  }
  static analysisWithLogReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new ConsoleReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);

    this.outputTarget.print(report);
  }
}
