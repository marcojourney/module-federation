import React, { Suspense } from 'react';
const RemoteAccountingApp = React.lazy(() => import('accounting/App'));

const Accounting = () => {
  return <Suspense fallback={<div>loading...</div>}>
    <RemoteAccountingApp />
  </Suspense>
}

export default Accounting