import React, { Suspense } from 'react';
const RemoteReportApp = React.lazy(() => import('report/App'));

const Accounting = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <RemoteReportApp />
    </Suspense>
  );
};

export default Accounting;
