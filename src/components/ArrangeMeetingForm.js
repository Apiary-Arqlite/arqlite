import {Section} from '../components/Section';
import {useState} from 'react';
import Modal from './Modal';


const ArrangeMeetingForm = ({isOpen, onClose, onSubmit}) => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
  });

  const {name, email} = formValues;

  const handleInputChange = (event) => {
    console.log('handle change');
    console.log(event.target.name, '#', event.target.value);
    setFormValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form
        className="form"
        name="arrange-meeting"
        action="#"
        onSubmit={onSubmit}
      >
        <p className="form__title">Arrange a meeting</p>
        <p className="form__text">
          Leave your contacts and we will reach out to you to schedule a meeting
          where we can discuss the details of our partnership!
        </p>

        <div className="form__input-container">
          <label htmlFor="name" className="form__input-label">
            Your name
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              className="form__input"
              value={name}
              onChange={handleInputChange}
              maxLength="40"
            />
          </label>
        </div>
        <div className="form__input-container">
          <label htmlFor="email" className="form__input-label">
            Your email
            <span id="email-error"></span>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              className="form__input"
              value={email}
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
        >
          Send Request
        </Section.MeetingCardButton>
      </form>
    </Modal>
  );
};
export default ArrangeMeetingForm;
