import fs from 'fs';
import { OutputTarget, ReportData } from '../Summary';

// TODO: HTMLReport
// 1. Pass in report name, e.g Match Report
export class HTMLReport implements OutputTarget {
  print(report: ReportData): void {
    const html = `
    <h1>Report for ${report.title}</h1>
    <p>Report data:</p>
    <div>
      ${report.body}
    </div>`;

    fs.writeFileSync('report.html', html);
  }
}
