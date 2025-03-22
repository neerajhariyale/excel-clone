import React from 'react';

const Toolbar = ({ handleFileUpload, handleSort, handleFilter }) => {
  return (
    <div className="flex gap-4 mb-4">
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      <button onClick={handleSort} className="bg-blue-500 text-white px-4 py-2 rounded">Sort</button>
      <button onClick={handleFilter} className="bg-green-500 text-white px-4 py-2 rounded">Filter</button>
    </div>
  );
};

export default Toolbar;