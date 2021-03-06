import { MatchReader } from './MatchReader';
import { CSVFileReader } from './CSVFileReader';
import { ConsoleReport } from './reporters/ConsoleReport';
import { HTMLReport } from './reporters/HTMLReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

const csvFileReader = new CSVFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// Classsic way to instantiate and use the Summary instance
// => for Console.log output
const summaryLog = new Summary(new WinsAnalysis('Bournemouth'), new ConsoleReport());
// => for HTML output
const summaryHTML = new Summary(new WinsAnalysis('Tottenham'), new HTMLReport());

summaryLog.buildAndPrintReport(matchReader.matches);
summaryHTML.buildAndPrintReport(matchReader.matches);

const matchReaderFromCSV = MatchReader.fromCSV('football.csv');
matchReaderFromCSV.load();

// Using static methods on class instances to access data report
const summaryWithHTML = Summary.analysisWithHtmlReport('Tottenham');
const summaryWithLog = Summary.analysisWithLogReport('Southampton');

summaryWithLog.buildAndPrintReport(matchReaderFromCSV.matches);

summaryWithHTML.buildAndPrintReport(matchReaderFromCSV.matches);

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
