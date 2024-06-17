import React, { Suspense } from 'react';
const RemoteInventoryApp = React.lazy(() => import('inventory/App'));

const Accounting = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <RemoteInventoryApp />
    </Suspense>
  );
};

export default Accounting;
