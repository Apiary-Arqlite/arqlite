import {Section} from './Section';

const Modal = ({isOpen, onClose, children}) => {
  return (
    <Section.Modal>
      <div className="modal__container">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        />
        {children}
      </div>
    </Section.Modal>
  );
};
export default Modal;
