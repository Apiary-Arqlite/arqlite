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
  const handleArrangeMeetingClick = () => {
    console.log('implement schedule meeting logic');
    
  };
  const [arrangeMeetingFormOpen,setArrangeMeetingFormOpen]=useState(false);
  return (
    <div >
      {/* <div className="page"> */}
      <div>
        <Header />
        <Main />
<ArrangeMeetingForm isOpen={setArrangeMeetingFormOpen}/>
        <Footer />
        
      </div>
    </div>
  );
}

export default App;
