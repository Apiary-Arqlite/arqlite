/* --------------------------------- imports -------------------------------- */
import React, { useState } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ArrangeMeetingForm from "./ArrangeMeetingForm";

/* -------------------------------------------------------------------------- */
/*                                function App                                */
/* -------------------------------------------------------------------------- */
function App() {
  
  return (
    <div >
      {/* <div className="page"> */}
      <div>
        <Header />
        <Main />

        <Footer />
        
      </div>
    </div>
  );
}

export default App;
