

import * as XLSX from 'xlsx';



export const extractData = () => {

    const file = "c:/Users/javie/OneDrive/Escritorio/Resimple_Technical_Test/PT_resimple/src/origen-datos-junior.xlsx"

    const workbook = XLSX.read(file, { type: 'file' });

    const sheetname = workbook.SheetNames[0];

    const sheet = workbook.Sheets[sheetname];

    const parsedData = XLSX.utils.sheet_to_json(sheet);

    return parsedData;
}

console.log(extractData());
// console.log( extractData( "c:/Users/javie/OneDrive/Escritorio/Resimple_Technical_Test/PT_resimple/src/origen-datos-junior.xlsx" ))

