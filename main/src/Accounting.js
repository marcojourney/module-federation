import React, { Suspense } from 'react';
const RemoteAccountingApp = React.lazy(() => import('accounting/App'));
const ChartAccount = React.lazy(() => import('accounting/ChartAccount'));

const Accounting = () => {
  return <Suspense fallback={<div>loading...</div>}>
    <RemoteAccountingApp />
    <ChartAccount token="token" />
  </Suspense>
}

export default Accounting