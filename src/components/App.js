/* --------------------------------- imports -------------------------------- */
import React, { useState, useEffect } from "react";
import api from "../utils/api";
import Header from "./Header";
import Main from "./Main";
import ArrangeMeetingForm from "../components/ArrangeMeetingForm";
import InfoToolModal from "./InfoToolModal";
import Footer from "./Footer";

/* -------------------------------------------------------------------------- */
/*                                function App                                */
/* -------------------------------------------------------------------------- */
function App() {
  const [isArrangeMeetingFormOpen, setIsArrangeMeetingFormOpen] =
    useState(false);
  const [isInfoToolModalOpen, setIsInfoToolOpen] = useState(false);
  const isAnyModalOpen = isArrangeMeetingFormOpen || isInfoToolModalOpen;
  const [isInfoToolStatus, setInfoToolStatus] = useState("");

  const handleArrangeMeetingClick = () => {
    setIsArrangeMeetingFormOpen(true);
  };
  const closeModal = () => {
    setIsArrangeMeetingFormOpen(false);
    setIsInfoToolOpen(false);
  };

  useEffect(() => {
    const handleClickClose = (event) => {
      if (event.target.classList.contains("modal_opened")) {
        closeModal();
      }
    };

    const handleEscClose = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isAnyModalOpen) {
      document.addEventListener("click", handleClickClose);
      document.addEventListener("keydown", handleEscClose);
    }

    return () => {
      document.removeEventListener("click", handleClickClose);
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [isAnyModalOpen]);

  const handleSendRequest = ({ name, email }) => {
    api
      .addNewContact(name, email)
      .then(() => {
        setIsArrangeMeetingFormOpen(false);
        setIsInfoToolOpen(true);
        //if request submit is successful or if not setInfoToolStatus("fail");
        setInfoToolStatus("success");
      })
      .catch((err) => {
        api.handleErrorResponse(err);
        setIsArrangeMeetingFormOpen(false);
        setIsInfoToolOpen(true);
        setInfoToolStatus("");
      });
  };

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
      <Header handleArrangeMeetingClick={handleArrangeMeetingClick} />
      <Main
        onDownloadClick={handleDownloadClick}
        handleArrangeMeetingClick={handleArrangeMeetingClick}
        closeModal={closeModal}
        handleSendRequest={handleSendRequest}
      />

      <ArrangeMeetingForm
        isOpen={isArrangeMeetingFormOpen}
        onClose={closeModal}
        onSendRequest={handleSendRequest}
      />
      <InfoToolModal
        isOpen={isInfoToolModalOpen}
        onClose={closeModal}
        status={isInfoToolStatus}
      />

      <Footer />
    </div>
  );
}

export default App;
