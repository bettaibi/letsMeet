import React, {lazy, Suspense} from 'react';
import { Container, Box, Typography, Hidden } from './components/styles';
import { BrowserRouter, HashRouter, Route,  Routes} from 'react-router-dom';
import { ContextProvider } from './context';


// Lazy Load pages 
const Home = lazy(()=> import('./pages/Home'));
const Room = lazy(()=> import('./pages/Room'));

function App() {

  return (
    <ContextProvider>
      <Suspense fallback={<span>Loading...</span>}>
       {/* <Home /> */}
      <Room />
      </Suspense>
    </ContextProvider>
  );
}

export default App;
