import {Section} from '../components/Section';
import{useState}from 'react';


const ArrangeMeetingForm = ({isOpen, onClose, onSubmit}) => {

  const [formValues,setFormValues]=useState({
    name:"",
    email:""
  });
  
  const{name,email}=formValues;

  const handleInputChange=(event)=>{
    console.log("handle change")
    console.log(event.target.name, "#", event.target.value)
    setFormValues((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
    
  }
  const handleSendRequest=(event)=>{
    event.preventDefault();
    console.log("send request");
    console.log("clear form");
    // fetch("http://localhost:3001/", {
		// 	method: "POST",
		// 	headers: {
		// 		Accept: "application/json, text/plain, */*",
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify(values),
		// })
		// 	.then((res) => {
		// 		resetForm();//?
		// 		handleSuccess();//?
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});
  }
  return (
    <Section.ArrangeMeetingForm>
      <div className="form__container">
        <button className="form__close-button" type="button" />
        <form className="form" action="#" onSubmit={handleSendRequest}>
          
          <p className="form__title">Arrange a meeting</p>
          <p className="form__text">
            Leave your contacts and we will reach out to you to schedule a
            meeting where we can discuss the details of our partnership!
          </p>

          <div className="form__input-container">
            <label htmlFor="name" className="form__input-label">Your name
              
              <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              className="form__input"
              value={name}
              onChange={handleInputChange}
              maxLength="40"
            /></label>
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
            /></label>
          </div>
          <Section.MeetingCardButton orange className="form__button"
            type="submit"
              >
            Send Request
          </Section.MeetingCardButton>
         
        </form>
      </div>
      </Section.ArrangeMeetingForm>
  );
};
export default ArrangeMeetingForm;
