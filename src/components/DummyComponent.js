import React, { Suspense, lazy } from "react";

const DummyComponent = ({ path }) => {
  const CurrentComponent = lazy(() => import(`../${path}`));

  return (
    <Suspense fallback={null}>
      <CurrentComponent />
    </Suspense>
  );
};

export default DummyComponent;
