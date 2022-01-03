import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './context';
import { NotificationProvider } from './context/NotificationContext';
import { SocketProvider } from './context/SocketContext';


// Lazy Load pages 
const Home = lazy(() => import('./pages/Home'));
const Room = lazy(() => import('./pages/Room'));

function App() {

  return (
    <BrowserRouter>
         <ContextProvider>
        <SocketProvider>
          <NotificationProvider>
            <Suspense fallback={<span>Loading...</span>}>
              {/* <Home /> */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="room/:roomId" element={<Room />} />
              </Routes>
            </Suspense>
          </NotificationProvider>
        </SocketProvider>
         </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
