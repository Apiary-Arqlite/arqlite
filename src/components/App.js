/* --------------------------------- imports -------------------------------- */
import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import MeetingCard from "./MeetingCard";

/* -------------------------------------------------------------------------- */
/*                                function App                                */
/* -------------------------------------------------------------------------- */
function App() { 

  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main/>
        <MeetingCard></MeetingCard>
        <Footer />
      </div>
    </div>
  );
}

export default App;
