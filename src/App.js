import { MetabaseProvider } from "@metabase/embedding-sdk-react";

import { Page } from "./Page";
import {TestLoader} from "./TestLoader";
import {TestError} from "./TestError";

const config = {
  metabaseInstanceUrl:
    process.env.REACT_APP_METABASE_INSTANCE_URL || "http://localhost:3000",
  font: "Inter",
  authType: "jwt",
  jwtProviderUri: "http://localhost:8081/sso/metabase",
  loaderComponent: () => <TestLoader />,
  errorComponent: ({message}) => <TestError message={message} />
};

const App = () => (
  <MetabaseProvider config={config}>
    <Page />
  </MetabaseProvider>
);

export default App;
