import React, { useContext, useRef } from "react";
import { Container, Form } from "react-bootstrap";
import { userContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './Login.css'

const Login = () => {
  const nav = useNavigate();

  const { user, setLogin } = useContext(userContext);
  const lrefName = useRef();
  const lrefPass = useRef();
  
  const handleClick = () => {
    const lreffName = lrefName.current.value;
    const lreffPass = lrefPass.current.value;
    const findName = user.find((usr) => usr.name === lreffName);
    const findPass = user.find((usr) => usr.pass === lreffPass);

    if (findName && findPass) {
      setLogin(true);
      toast.success("Login Success");
      nav("/");
    } else {
      toast.warning("check your details");
      nav ('/sign')
    }
  };

  return (
    <div className='loginPage'>
      <Container className="border p-4">
        <div style={{ backgroundColor: "white" }}>
          <Form className="login-form">
            <label htmlFor="name" className="label-text ">
              * User Name
            </label>
            <br />
            <input
              ref={lrefName}
              type="text"
              className="input-box mt-1"
              placeholder="user name"
            />
            <br />
            <label htmlFor="name" className="label-text ">
              * Login using password
            </label>
            <br />
            <input
              ref={lrefPass}
              type="password"
              className="input-box mt-1"
              placeholder="password"
            />
            <br />
            <button className="login-btn" onClick={handleClick}>
              Login
            </button>
            <Link to="/sign" className="link">Sign-up</Link>
          </Form>
        </div>
      </Container>
    </div>

    
  );
};

export default Login;
