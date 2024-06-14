import React, { Suspense } from 'react';
const RemoteApp1 = React.lazy(() => import('app1/App'));

const Accounting = () => {
  return <Suspense fallback={<div>loading...</div>}>
    <RemoteApp1 />
  </Suspense>
}

export default Accounting