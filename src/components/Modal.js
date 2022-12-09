const Modal = ({isOpen, onClose, children}) => {
  return (
    <div className={`modal ${isOpen ? 'modal_opened' : ''}`}>
      <div className="modal__container">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
          aria-label="Close modal"
        />
        {children}
      </div>
    </div>
  );
};
export default Modal;
