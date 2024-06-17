import React from 'react';

const ChartAccountList = () => {
  const accounts = [
    { id: 1, name: 'Cash', code: '1010', type: 'asset' },
    { id: 2, name: 'Accounts Receivable', code: '1100', type: 'asset' },
    { id: 3, name: 'Inventory', code: '1200', type: 'asset' },
    { id: 4, name: 'Prepaid Expenses', code: '1300', type: 'asset' },
    { id: 5, name: 'Land', code: '1400', type: 'asset' },
    { id: 6, name: 'Building', code: '1500', type: 'asset' },
    { id: 7, name: 'Equipment', code: '1600', type: 'asset' },
    {
      id: 8,
      name: 'Accumulated Depreciation - Equipment',
      code: '1700',
      type: 'contra-asset',
    },
    { id: 9, name: 'Vehicles', code: '1800', type: 'asset' },
    {
      id: 10,
      name: 'Accumulated Depreciation - Vehicles',
      code: '1900',
      type: 'contra-asset',
    },
    { id: 11, name: 'Accounts Payable', code: '2000', type: 'liability' },
    { id: 12, name: 'Salaries Payable', code: '2100', type: 'liability' },
    { id: 13, name: 'Unearned Revenue', code: '2200', type: 'liability' },
    { id: 14, name: 'Notes Payable', code: '2300', type: 'liability' },
    { id: 15, name: 'Interest Payable', code: '2400', type: 'liability' },
    { id: 16, name: 'Common Stock', code: '3000', type: 'equity' },
    { id: 17, name: 'Paid-in Capital', code: '3100', type: 'equity' },
    { id: 18, name: 'Retained Earnings', code: '3200', type: 'equity' },
    { id: 19, name: 'Sales Revenue', code: '4000', type: 'revenue' },
    { id: 20, name: 'Service Revenue', code: '4100', type: 'revenue' },
    { id: 21, name: 'Interest Revenue', code: '4200', type: 'revenue' },
    { id: 22, name: 'Cost of Goods Sold', code: '5000', type: 'expense' },
    {
      id: 23,
      name: 'Salaries and Wages Expense',
      code: '5100',
      type: 'expense',
    },
    { id: 24, name: 'Rent Expense', code: '5200', type: 'expense' },
    { id: 25, name: 'Utilities Expense', code: '5300', type: 'expense' },
    { id: 26, name: 'Depreciation Expense', code: '5400', type: 'expense' },
    { id: 27, name: 'Insurance Expense', code: '5500', type: 'expense' },
    { id: 28, name: 'Supplies Expense', code: '5600', type: 'expense' },
    { id: 29, name: 'Advertising Expense', code: '5700', type: 'expense' },
    {
      id: 30,
      name: 'Repairs and Maintenance Expense',
      code: '5800',
      type: 'expense',
    },
    { id: 31, name: 'Bad Debt Expense', code: '5900', type: 'expense' },
    { id: 32, name: 'Interest Expense', code: '6000', type: 'expense' },
    { id: 33, name: 'Income Tax Expense', code: '6100', type: 'expense' },
  ];
  return (
    <div className="flex flex-col mb-4">
      <div className="flex justify-between mb-2">
        <h2 className="text-xl font-bold">Chart of Accounts</h2>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
          Create New
        </button>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-left">Account Code</th>
            <th className="border px-4 py-2 text-left">Account Name</th>
            <th className="border px-4 py-2 text-left">Type</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td className="border px-4 py-2">{account.code}</td>
              <td className="border px-4 py-2">{account.name}</td>
              <td className="border px-4 py-2">{account.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChartAccountList;
