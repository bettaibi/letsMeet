import React, {lazy, Suspense} from 'react';
import { Container, Box, Typography, Hidden } from './components/styles';
import { BrowserRouter, HashRouter, Route,  Routes} from 'react-router-dom';


// Lazy Load pages 
const Home = lazy(()=> import('./pages/Home'));
const Room = lazy(()=> import('./pages/Room'));

function App() {

  return (
    <>
      <Suspense fallback={<span>Loading...</span>}>
    <Home />

      </Suspense>
    </>
  );
}

export default App;
