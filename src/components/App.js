/* --------------------------------- imports -------------------------------- */
import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

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
