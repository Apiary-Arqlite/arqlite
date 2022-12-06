import Modal from './Modal';

const SuccessModal = ({isOpen, onClose}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <p className='modal__text'>Thanks!</p> 
      <p className='modal__text'>We will reach out to you soon!</p>
    </Modal>
  );
};
export default SuccessModal;
