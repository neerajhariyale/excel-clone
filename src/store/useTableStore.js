import { create } from 'zustand';

export const useTableStore = create((set) => ({
  rows: Array(20).fill({
    hsCode: '',
    description: '',
    rate: 0,
    boxes: 0,
    qty: 0,
    netWeight: 0,
  }),

  updateCell: (index, field, value) =>
    set((state) => {
      const rows = [...state.rows];
      rows[index][field] = value;

      // Auto calculate Amount, Discount, NetAmount
      const rate = parseFloat(rows[index].rate) || 0;
      const boxes = parseFloat(rows[index].boxes) || 0;
      const qty = parseFloat(rows[index].qty) || 0;
      const amount = rate * boxes * qty;
      const discount = Math.min(amount * 0.15, 50);
      const netAmount = amount - discount;

      rows[index] = {
        ...rows[index],
        amount: amount.toFixed(2),
        discount: discount.toFixed(2),
        netAmount: netAmount.toFixed(2),
      };

      return { rows };
    }),

  setRows: (newRows) => set({ rows: newRows }),
}));
