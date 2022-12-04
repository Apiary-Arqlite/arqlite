/* --------------------------------- imports -------------------------------- */
import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ArrangeMeetingForm from "./ArrangeMeetingForm";


/* -------------------------------------------------------------------------- */
/*                                function App                                */
/* -------------------------------------------------------------------------- */
function App() { 

  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main/>
        <ArrangeMeetingForm/>
        <Footer />
        
      </div>
    </div>
  );
}

export default App;
