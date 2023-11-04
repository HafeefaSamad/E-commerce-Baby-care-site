import React, { useContext, useRef } from "react";
import './SignUp.css'
import { Container, Form } from "react-bootstrap";
import { userContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
 const nav = useNavigate()

  const {user,setUser} = useContext(userContext)
  const refName = useRef()
  const emailRef = useRef()
  const refPass = useRef()
  const handleChange = ()=>{
    const reffName = refName.current.value
    const reffPass = refPass.current.value
    const emailReff = emailRef.current.value
    const value = {name:reffName, pass:reffPass, email:emailReff}
    setUser([...user,value])
    if(!reffName || !reffPass )
    {
      toast.warning('Not fill')
     nav('/sign')
    }
    else{
      nav('/login')
    }

  }
  return (
    <div>
      <Container className="border p-4" style={{ backgroundColor: "white" }}>
        <div>
          <Form className="signUp-form">

            <label htmlFor="name" className="label-text ">
              * User Name
            </label>
            <br />
            <input ref={refName}
              type="text"
              className="input-box mt-1"
              placeholder="user name"
            />
            <br />

            <label htmlFor="name" className="label-text ">
              * Email id
            </label>
            <br />
            <input
            ref={emailRef}
              type="text"
              className="input-box mt-1"
              placeholder=" eg:name@"
            />
            <br />

            <label htmlFor="name" className="label-text ">
              * Password
            </label>
            <br />
            <input ref={refPass}
              type="text"
              className="input-box mt-1"
              placeholder="enter your password"
            />
            <br />

           
            <button className="login-btn" onClick={handleChange}>Sign-up</button>

          </Form>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
