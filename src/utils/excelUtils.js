import * as XLSX from 'xlsx';

export const parseExcelFile = (file, callback) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    const data = e.target.result;
    const workbook = XLSX.read(data, { type: 'binary' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: '' });

    const rows = jsonData.map((item, index) => ({
      srNo: index + 1,
      hsCode: item['HS Code'] || '',
      description: item['Description of goods'] || '',
      rate: item['Rate'] || '',
      boxes: item['Boxes'] || '',
      qty: item['Qty'] || '',
      netWeight: item['Net weight'] || '',
      amount: 0,
      discount: 0,
      netAmount: 0,
    }));

    callback(rows);
  };

  reader.readAsBinaryString(file);
};
