import { useTableStore } from '../store/useTableStore';

const TableRow = ({ row, index }) => {
  const updateCell = useTableStore((state) => state.updateCell);

  const handleChange = (field, value) => {
    updateCell(index, field, value);
  };

  return (
    <tr>
      <td className="border px-2 py-1">{index + 1}</td>
      {['hsCode', 'description', 'rate', 'boxes', 'qty', 'netWeight'].map((field) => (
        <td key={field} className="border px-2 py-1">
          <input
            className="w-full border p-1"
            type={['rate', 'boxes', 'qty', 'netWeight'].includes(field) ? 'number' : 'text'}
            value={row[field]}
            onChange={(e) => handleChange(field, e.target.value)}
          />
        </td>
      ))}
      <td className="border px-2 py-1">{row.amount || '0.00'}</td>
      <td className="border px-2 py-1">{row.discount || '0.00'}</td>
      <td className="border px-2 py-1">{row.netAmount || '0.00'}</td>
    </tr>
  );
};

export default TableRow;
