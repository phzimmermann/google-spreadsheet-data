# google-spreadsheet-data

Read javascript objects or arrays from spreadsheets. Quite handy for smaller data stuff. Data that also can be managed from no it people.

## usage

```
const gsd = require('google-spreadsheet-data');

// creds: a json file, provided by google spreadsheet
// id, the id of the google spreadsheet
const gsd = new GoogleSpreadsheetData(creds, id);

// authenticate that stuff
await gsd.authenticate();

// this is an example for using the library to get an object from a spreadsheet.
// There should be two columns. The first row of these column should contain "key" and "value"
config = await gsd.getObject(sheetIndex);

// Gather a list of objects. provide the keys of the column
config = await gsd.getArray(sheetIndex, columnKeys);

```