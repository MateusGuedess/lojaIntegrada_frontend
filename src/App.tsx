import { GlobalStyle } from './GlobalStyle'
import { ApolloProvider } from "@apollo/client";
import Routes from './routes'

import client from  './api'


function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Routes />
      </ApolloProvider>
    </>
  );
}

export default App;
