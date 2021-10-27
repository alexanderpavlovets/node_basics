// This is just shorthand for the future
// change to require
// import * as xlsx from 'xlsx';
// import * as path from 'path';

// const workBook = xlsx.readFile(path.resolve(__dirname, './example.xlsx'));
// const wb = xlsx.utils.sheet_to_json(workBook.Sheets[workBook.SheetNames[0]], {header: ['id', 'name']});
// const sheetAsArrOfObjs = xlsx.utils.sheet_to_json(workBook.Sheets[workBook.SheetNames[0]]);
// console.log(sheetAsArrOfObjs);
// xlsx.writeFile(workBook, path.resolve(__dirname, './example123.xlsx'));

// Arr of objects
// const newBook = xlsx.utils.book_new();
// const newSheet = xlsx.utils.json_to_sheet(lineObjects);
// xlsx.utils.book_append_sheet(newBook, newSheet, 'Sheet 1');
// xlsx.writeFile(newBook, path.resolve(__dirname, './example123.xlsx'));

// AOA:
// const newBook = xlsx.utils.book_new();
// const newSheet = xlsx.utils.aoa_to_sheet(aoa);
// xlsx.utils.book_append_sheet(newBook, newSheet, 'Sheet 1');
// xlsx.writeFile(newBook, path.resolve(__dirname, './example123.xlsx'));