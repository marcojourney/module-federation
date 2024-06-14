import React, { Suspense } from 'react';
const RemoteApp2 = React.lazy(() => import('app2/App'));

const Accounting = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <RemoteApp2 />
    </Suspense>
  );
};

export default Accounting;
