import {Section} from '../components/Section';

const ArrangeMeetingForm = ({isOpen, onClose, onSubmit}) => {
  const handleInputChange=()=>{
    console.log("name")
  }
  return (
    <Section.ArrangeMeetingForm>
      <div className="form__container">
        <button className="form__close-button" type="button" />
        <form className="form" action="#" onSubmit={onSubmit}>
          {/* <form className='form_form' action="#" onChange={onChange}> */}
          <h2 className="form__title">Arrange a meeting</h2>
          <p>
            Leave your contacts and we will reach out to you to schedule a
            meeting where we can discuss the details of our partnership!
          </p>

          <div className="form__input-container">
            <label htmlFor="name" className="form__input-label"/>
              
              <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              className="form__input"
              //value={name}
              onChange={handleInputChange}
              maxLength="40"
            />
          </div>
          <div className="form__input-container">
            <label htmlFor="email" className="form__input-label">
            
              <span id="email-error"></span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              className="form__input"
              //value={email}
              onChange={handleInputChange}
              required
              autoFocus
            />
          </div>
          <button type="submit" className='form__submit-button'>Send Request</button>
        </form>
      </div>
      </Section.ArrangeMeetingForm>
  );
};
export default ArrangeMeetingForm;
