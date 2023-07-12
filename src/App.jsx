import React from 'react';
import Header from './pages/Header';
import NavTab from './pages/NavTab';
import Artist from './pages/Tab/Artist';
/*import Footer from './pages/Footer';*/
// import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <NavTab />
      <Artist />
      {/* <Routes>
        <Route path="/" element={<Main />} />
      </Routes> */}
    </div>
  );
}

// function Main() {
//   return (
//     <Outlet />
//   );
// }

export default App;
