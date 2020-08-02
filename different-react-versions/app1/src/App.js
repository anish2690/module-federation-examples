import React from "react";
import Adapter from "./adapter";
const RemoteButton = React.lazy(() => import("app2/Button"));
// const ModernComponent = React.lazy(() => import("app2/ModernComponent"));
// Hooks not suppoorted, uncomment to verify this is a pre-hooks react version being used.
// import HookComponent from './ComponentWithHook'
const App = () => {
  return (
    <div>
      <h1>Basic Host-Remote</h1>
      <h2>App 1, Uses react version not compatible with hooks</h2>
      <Adapter importer={() => import("app2/ModernComponent")}>
        <h3>And these are children passed into it from the legacy app</h3>
      </Adapter>

      {/*<HookComponent/>*/}
      <React.Suspense fallback="Loading Button">
        <RemoteButton />
      </React.Suspense>
      {/*<React.Suspense fallback="Loading Button">*/}
      {/*  <ModernComponent />*/}
      {/*</React.Suspense>*/}
    </div>
  );
};

export default App;
