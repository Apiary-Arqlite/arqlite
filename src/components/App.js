/* --------------------------------- imports -------------------------------- */
import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Box1 from '../Animation/Box1.jsx';
import '../Animation/Box1.css';

/* -------------------------------------------------------------------------- */
/*                                function App                                */
/* -------------------------------------------------------------------------- */
function App() {
  return (
    <div className="root">
      <div className="page">
        <Header />
        <Box1 />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
