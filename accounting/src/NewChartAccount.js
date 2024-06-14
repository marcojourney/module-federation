import React, { useState } from 'react';

const CreateChartAccountForm = ({ onSubmit }) => {
  const [accountCode, setAccountCode] = useState('');
  const [accountName, setAccountName] = useState('');
  const [accountType, setAccountType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ code: accountCode, name: accountName, type: accountType });
    setAccountCode(''); // Clear form after submit
    setAccountName('');
    setAccountType('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
      <h2 className="text-xl font-bold mb-2">Create New Chart Account</h2>
      <div className="flex flex-col">
        <label htmlFor="accountCode">Account Code</label>
        <input
          type="text"
          id="accountCode"
          value={accountCode}
          onChange={(e) => setAccountCode(e.target.value)}
          className="border rounded-md px-2 py-1"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="accountName">Account Name</label>
        <input
          type="text"
          id="accountName"
          value={accountName}
          onChange={(e) => setAccountName(e.target.value)}
          className="border rounded-md px-2 py-1"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="accountType">Account Type</label>
        <select
          id="accountType"
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
          className="border rounded-md px-2 py-1"
          required
        >
          <option value="">Select Type</option>
          <option value="asset">Asset</option>
          <option value="liability">Liability</option>
          <option value="equity">Equity</option>
          <option value="revenue">Revenue</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Create Chart Account
      </button>
    </form>
  );
};

export default CreateChartAccountForm;
