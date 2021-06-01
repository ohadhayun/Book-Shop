import React, {useState, useRef} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { useForm } from "react-hook-form";
import { userRequestLogOrReg } from '../../API/api'
import './index.css'

const LogIn = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async (data) => {
    console.log(formData);
    try{const sendToServer = await userRequestLogOrReg('users', 'login', formData) 
      console.log(sendToServer);
      alert('Successfully logged-in!');
    } 
    catch (error) {
      console.log(error);
      alert('Wrong email or password.');
    };
  }
  let textInput = useRef(null);
  // textInput.ref = register({ required: true });
  const [formData,setFormData] =useState();

  function handleInput(e){
    const data = {[e.target.name]:e.target.value}; // =  {email/password:'current value'}
    setFormData({...formData,...data})
  }
  return (
    <MDBContainer >
      <MDBRow>
        <MDBCol md="3" className="col-md-3"></MDBCol>
        <MDBCol md="6" className="formdesign">
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="h5 text-center mb-4">Sign in</p>
            <div className="grey-text">
            

              <MDBInput inputRef={ref => textInput = ref } name="email"  onInput={handleInput} label="Type your email" icon="envelope" group type="email" validate error="wrong"
                success="right" />
              <MDBInput name={"password"}  onInput={handleInput} ref={register({ required: true })} label="Type your password" icon="lock" group type="password" validate />
            </div>
            <div className="text-center">
              <MDBBtn type="submit">Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LogIn;