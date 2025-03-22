import { useTableStore } from '../store/useTableStore';
import TableRow from './TableRow';

const Spreadsheet = () => {
  const rows = useTableStore((state) => state.rows);

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            {['SrNo', 'HSCode', 'Description', 'Rate', 'Boxes', 'Qty', 'NetWeight', 'Amount', 'Discount', 'NetAmount'].map((heading, idx) => (
              <th key={idx} className="border border-gray-300 px-2 py-1">{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <TableRow key={index} row={row} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Spreadsheet;
