import React, {useState} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import './index.css'
import { useForm } from "react-hook-form";
import { contactUs, userRequestLogOrReg } from '../../API/api'


function ContactUs() {

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(formData);
    try{const sendToServer = await contactUs(formData) 
      console.log(sendToServer);
      // alert('Successfully register!');
    } 
    catch (error) {
      console.log(error);
      // alert('This email already signed-up.');
    };
  }
  // textInput.ref = register({ required: true });
  const [formData,setFormData] =useState();

  function handleInput(e){
    const data = {[e.target.name]:e.target.value}; // =  {email/password:'current value'}
    setFormData({...formData,...data})
  }

  return (
    <MDBContainer className="container">
      <MDBRow>
        <MDBCol md="3" className="col-md-3"></MDBCol>
        <MDBCol md="6" className="formdesign">
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="h5 text-center mb-4">Contact us</p>
            <div className="grey-text">
              <MDBInput onInput={handleInput} ref={register} name="name" label="Your name" icon="user" group type="text" validate error="wrong"
                success="right" value={register.blabla}/>
              <MDBInput onInput={handleInput} name="email" label="Your email" icon="envelope" group type="email" validate error="wrong"
                success="right" />
              <MDBInput onInput={handleInput} name="phone" label="Your phone number" icon="lock" group type="phone" validate />
              <MDBInput onInput={handleInput} type="textarea" label="Material textarea" rows="5" name="message" label="Your message" icon="lock" group validate />
            </div>
            <div className="text-center">
              <MDBBtn type="submit" >Send</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactUs;