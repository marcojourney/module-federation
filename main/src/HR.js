import React, { Suspense } from 'react';
const RemoteHRApp = React.lazy(() => import('hr/App'));

const HR = () => {
  return <Suspense fallback={<div>loading...</div>}>
    <RemoteHRApp />
  </Suspense>
}

export default HR