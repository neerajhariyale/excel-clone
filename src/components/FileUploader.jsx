import * as XLSX from 'xlsx';
import { useTableStore } from '../store/useTableStore';

const FileUploader = () => {
  const setRows = useTableStore((state) => state.setRows);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });

      const wsName = wb.SheetNames[0];
      const ws = wb.Sheets[wsName];

      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      const rows = data.slice(1).map((row, index) => ({
        hsCode: row[1] || '',
        description: row[2] || '',
        rate: row[3] || 0,
        boxes: row[4] || 0,
        qty: row[5] || 0,
        netWeight: row[6] || 0,
      }));

      setRows(rows);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} className="p-2 border" />
  );
};

export default FileUploader;
