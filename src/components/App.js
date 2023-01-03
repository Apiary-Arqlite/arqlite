/* --------------------------------- imports -------------------------------- */
import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

/* -------------------------------------------------------------------------- */
/*                                function App                                */
/* -------------------------------------------------------------------------- */
function App() {

  function handleDownloadClick(pdf) {
    // using Java Script method to get PDF file
    fetch(pdf).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = pdf;
        alink.click();
      });
    });
  }

  return (
    <div>
      <Header/>
      <Main onDownloadClick={handleDownloadClick} />

      <Footer />
    </div>
  );
}

export default App;
