import { OutputTarget, ReportData } from '../Summary';

export class ConsoleReport implements OutputTarget {
  print(report: ReportData): void {
    console.log({ report });
  }
}
