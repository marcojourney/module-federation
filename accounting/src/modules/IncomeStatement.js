import React from 'react';

const IncomeStatement = () => {
  const accounts = [
    { id: 19, name: 'Sales Revenue', code: '4000', type: 'revenue', amount: 50000 },
    { id: 20, name: 'Service Revenue', code: '4100', type: 'revenue', amount: 20000 },
    { id: 21, name: 'Interest Revenue', code: '4200', type: 'revenue', amount: 5000 },
    { id: 22, name: 'Cost of Goods Sold', code: '5000', type: 'expense', amount: 30000 },
    { id: 23, name: 'Salaries and Wages Expense', code: '5100', type: 'expense', amount: 10000 },
    { id: 24, name: 'Rent Expense', code: '5200', type: 'expense', amount: 4000 },
    { id: 25, name: 'Utilities Expense', code: '5300', type: 'expense', amount: 2000 },
    { id: 26, name: 'Depreciation Expense', code: '5400', type: 'expense', amount: 3000 },
    { id: 27, name: 'Insurance Expense', code: '5500', type: 'expense', amount: 1000 },
    { id: 28, name: 'Supplies Expense', code: '5600', type: 'expense', amount: 1500 },
    { id: 29, name: 'Advertising Expense', code: '5700', type: 'expense', amount: 500 },
    { id: 30, name: 'Repairs and Maintenance Expense', code: '5800', type: 'expense', amount: 600 },
    { id: 31, name: 'Bad Debt Expense', code: '5900', type: 'expense', amount: 300 },
    { id: 32, name: 'Interest Expense', code: '6000', type: 'expense', amount: 700 },
    { id: 33, name: 'Income Tax Expense', code: '6100', type: 'expense', amount: 1000 },
  ];

  const totalRevenue = accounts
    .filter(account => account.type === 'revenue')
    .reduce((acc, account) => acc + account.amount, 0);

  const totalExpenses = accounts
    .filter(account => account.type === 'expense')
    .reduce((acc, account) => acc + account.amount, 0);

  const netIncome = totalRevenue - totalExpenses;

  return (
    <div className="flex flex-col mb-4">
      <h2 className="text-xl font-bold mb-2">Income Statement</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-left">Account Code</th>
            <th className="border px-4 py-2 text-left">Account Name</th>
            <th className="border px-4 py-2 text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          {accounts
            .filter(account => account.type === 'revenue')
            .map(account => (
              <tr key={account.id}>
                <td className="border px-4 py-2">{account.code}</td>
                <td className="border px-4 py-2">{account.name}</td>
                <td className="border px-4 py-2">{account.amount.toFixed(2)}</td>
              </tr>
            ))}
          <tr>
            <td colSpan="2" className="border px-4 py-2 font-bold">Total Revenue</td>
            <td className="border px-4 py-2 font-bold">{totalRevenue.toFixed(2)}</td>
          </tr>
          {accounts
            .filter(account => account.type === 'expense')
            .map(account => (
              <tr key={account.id}>
                <td className="border px-4 py-2">{account.code}</td>
                <td className="border px-4 py-2">{account.name}</td>
                <td className="border px-4 py-2">{account.amount.toFixed(2)}</td>
              </tr>
            ))}
          <tr>
            <td colSpan="2" className="border px-4 py-2 font-bold">Total Expenses</td>
            <td className="border px-4 py-2 font-bold">{totalExpenses.toFixed(2)}</td>
          </tr>
          <tr>
            <td colSpan="2" className="border px-4 py-2 font-bold">Net Income</td>
            <td className="border px-4 py-2 font-bold">{netIncome.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IncomeStatement;
