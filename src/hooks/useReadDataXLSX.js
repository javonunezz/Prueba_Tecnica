import { useEffect, useState } from "react";
import * as XLSX from 'xlsx';


export const useReadDataXLSX = ( file = "/origen-datos-junior.xlsx" ) => {

  const [excelData, setExcelData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(file);
        const data = await response.arrayBuffer();
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetname = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetname];
        const parsedData = XLSX.utils.sheet_to_json(sheet);
        setExcelData(parsedData);
      } catch (error) {
        console.error('Error loading Excel file:', error.message);
      }
    };

    fetchData();
  }, [file]);

  return {
    excelData
  }
}