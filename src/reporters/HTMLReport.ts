import fs from 'fs';
import { OutputTarget, ReportData } from '../Summary';

// TODO: HTMLReport
// 1. Pass in report name, e.g Match Report
export class HTMLReport implements OutputTarget {
  print(report: ReportData): void {
    const html = `
    <h1>Report for ${report.title}</h1>
    <div>
      ${report.body}
    </div>
    <h2>Stats Breakdown:</h2>
    <div>
    <h3>Wins</h3>
    <p>${report.wins}</p>
    <h3>Draws</h3>
    <p>${report.draws}</p>
    <h3>Losses</h3>
    <p>${report.losses}</p>
    </div>`;

    fs.writeFileSync('report.html', html);
  }
}
