import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import ChartAccount from './ChartAccount';
import NewChartAccount from './NewChartAccount';

const App = () => {
  return (<h1>Hello World</h1>
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<ChartAccount />} />
    //     <Route path="chart-account/create" element={<NewChartAccount />} />
    //     <Route path="*" element={<h1>Not Match</h1>} />
    //   </Route>
    // </Routes>
  );
};

export default App;
