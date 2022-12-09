import Modal from './Modal';

const InfoToolModal = ({isOpen, onClose, status}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {status === 'success' ? (
        <div>
          <p className="modal__status-message">Thanks!</p>
          <p className="modal__status-message">
            We will reach out to you soon!
          </p>
        </div>
      ) : (
        <div>
        <p className="modal__status-message">
          Oops, something went wrong!
        </p>
        <p className="modal__status-message">
          Please try again.
        </p>
        </div>
      )}
    </Modal>
  );
};
export default InfoToolModal;
