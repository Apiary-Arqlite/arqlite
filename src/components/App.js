/* --------------------------------- imports -------------------------------- */
import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Calculator from './Calculator';

/* -------------------------------------------------------------------------- */
/*                                function App                                */
/* -------------------------------------------------------------------------- */
function App() {
  return (
    <div className='root'>
      <div className='page'>
        <Header />
        <Main />
        <Calculator />
        <Footer />
      </div>
    </div>
  );
}

export default App;
