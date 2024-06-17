import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Accounting from './Accounting';
import Inventory from './Inventory';
import HR from './HR';
import Report from './Report';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Accounting />} />
        <Route path="accounting" element={<Accounting />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="hr" element={<HR />} />
        <Route path="report" element={<Report />} />
        <Route path="*" element={<h1>Not Match</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
