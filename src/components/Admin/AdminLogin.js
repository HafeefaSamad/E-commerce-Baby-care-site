import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BiSolidUser, BiSolidLockAlt } from "react-icons/bi";
import "./Admin.css";

const AdminLogin = () => {
  const [adName, setAdname] = useState("");
  const [pswrd, setPswrd] = useState("");
  const [ setLogin] = useState(false);

  const nav = useNavigate();

  const handleLogin = () => {
    if (adName === "admin" && pswrd === "admin") {
      setLogin(true);
      nav("/main");
    }
  };

  return (
    <div className="body">
      <Form>
        <div>
          <label className="icon-label">
            <BiSolidUser className="icon" />
            Admin Name:
          </label>
          <input
            type="text"
            placeholder="Enter admin name"
            value={adName}
            onChange={(e) => setAdname(e.target.value)}
          />
        </div>

        <div>
          <label className="icon-label">
            <BiSolidLockAlt className="icon" />
            Password:
          </label>
          <input
            type="password"
            placeholder="Enter password"
            value={pswrd}
            onChange={(e) => setPswrd(e.target.value)}
          />
        </div>

        <Button className="btn" onClick={handleLogin}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default AdminLogin;
