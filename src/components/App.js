/* --------------------------------- imports -------------------------------- */
import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import MeetingCard from "./MeetingCard";
import buildingImg from '../images/building-image.png';

/* -------------------------------------------------------------------------- */
/*                                function App                                */
/* -------------------------------------------------------------------------- */
function App() { 
const handleArrangeMeetingClick=()=>{
  console.log("schedule meeting");
}
  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main/>
        <MeetingCard
        handleArrangeMeetingClick={handleArrangeMeetingClick}
        img={buildingImg}></MeetingCard>
        <Footer />
      </div>
    </div>
  );
}

export default App;
