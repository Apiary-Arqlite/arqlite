import {Section} from '../components/Section';
import {useState, useRef, useEffect} from 'react';
import Modal from './Modal';
import {useFormAndValidation} from '../hooks/useFormAndValidation';

const ArrangeMeetingForm = ({isOpen, onClose, onSendRequest}) => {
  const {values, isValid, errors, handleChange, resetForm} =
    useFormAndValidation(['name', 'email']);

  const formRef = useRef();

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(formRef.current.checkValidity());
  }, [isOpen, formRef]);

  useEffect(() => {
    const initialInputValues = {
      name: '',
      email: '',
    };
    const initialErrorValues = {
      name: '',
      email: '',
    };
    resetForm({...initialInputValues}, {...initialErrorValues}, true);
  }, [isOpen, resetForm]);

  const handleFormChange = () =>
    setIsFormValid(formRef.current.checkValidity());

  const handleInputChange = (event) => {
    handleChange(event);
    };

  const setInputLabelClassName = (name, isRequired) =>
    `form__input-label ${isRequired && `form__input-label_required`} ${
      !isValid && errors[name] && `form__input-label_error`
    }`;
  const setInputClassName = (name) =>
    `form__input ${!isValid && errors[name] && `form__input_error`}`;
  const setErrorClassName = (name) =>
    `form__error ${!isValid && errors[name] && `form__error_visible`}`;

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSendRequest({name: values.name, email: values.email});
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form
        className="form"
        name="arrange-meeting"
        action="#"
        onSubmit={handleFormSubmit}
        onChange={handleFormChange}
        ref={formRef}
        noValidate
      >
        <p className="form__title">Arrange a meeting</p>
        <p className="form__text">
          Leave your contacts and we will reach out to you to schedule a meeting
          where we can discuss the details of our partnership!
        </p>

        <div className="form__input-container">
          <label htmlFor="name" className="form__input-label">
            {values.name && <span>Your name</span>}
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              className="form__input"
              value={values.name}
              onChange={handleInputChange}
              maxLength="40"
            />
          </label>
        </div>
        <div className="form__input-container">
          <label htmlFor="email" className={setInputLabelClassName('email')}>
            {values.email && isFormValid && <span>Your email</span>}
            <span id="email-error" className={setErrorClassName('email')}>
              {errors['email'] && 'Your email (incorrect email)'}
            </span>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              className={setInputClassName('email')}
              value={values.email}
              onChange={handleInputChange}
              required
              // autoFocus
            />
          </label>
        </div>
        <Section.MeetingCardButton
          orange
          className="form__button"
          type="submit"
          aria-label="form submit"
          disabled={!isFormValid}
        >
          Send Request
        </Section.MeetingCardButton>
      </form>
    </Modal>
  );
};
export default ArrangeMeetingForm;
