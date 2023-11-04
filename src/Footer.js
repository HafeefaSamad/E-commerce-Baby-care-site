import React from "react";
import "./Footer.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import Google from '../src/Assets/Google.png';
import appstore from '../src/Assets/app.png'

const Footer = () => {
  return (
    <>
      <footer className="footer p-5 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4 d-flex flex-column ">
              <h5 className="mb-5">Contact us</h5>
              <div className="footer-details">
                <p className="mb-3">
                  <b>Address:</b>Kinfra Industrial Techno-park, Kakkanchery
                </p>
                <p className="mb-3">
                  <b>Phone:</b>Call Us +9846706002
                </p>
                <p className="mb-3">
                  <b>Follow Us:</b>
                </p>
                <div className="col-5 mb-3 d-flex social-icons justify-content-around">
                  <Link>
                    <AiFillTwitterCircle />
                  </Link>
                  <Link>
                    <BsFacebook />
                  </Link>
                  <Link>
                    <BsInstagram />
                  </Link>
                  <Link>
                    <BsLinkedin />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-2">
              <h5 className="mb-5">About</h5>
              <div className="footer-details d-flex flex-column ">
                <Link className="mb-3 text-decoration-none">
                  About Us
                </Link>
                <Link className="mb-3 text-decoration-none">
                 Delivery
                </Link>
                <Link className="mb-3 text-decoration-none">
                Tax Policy
                </Link>
                <Link className="mb-3 text-decoration-none">
                  Term & Condition
                </Link>
              </div>
            </div>
            <div className="col-2 text-decoration-none">
              <h5 className="mb-5 ">Account</h5>
              <div className="footer-details d-flex flex-column ">
                <Link className="mb-3 text-decoration-none ">
                  Profile
                </Link>
                <Link to={'/cart'} className="mb-3 text-decoration-none">
                 View cart
                </Link>
                <Link className="mb-3 text-decoration-none">
                My Orders
                </Link>
                <Link className="mb-3 text-decoration-none">
                  Help
                </Link>
              </div>
            </div>

            <div className="col-4">
              <div className="mb-3">
                <h5 className="mb-3">install App</h5>
                <div className="footer-details">
                  <p>Available on Google Play Service & App Store</p>
                  <div className="download d-flex flex-column">
                    <Link to={'https://play.google.com/intl/en_us/badges/'}>
                      <img src={Google} alt="" className="img-fluid" style={{width:150}} />
                    </Link>
                    <Link to={'https://www.apple.com/app-store/'}>
                      <img src={appstore} alt="" className="img-fluid" style={{width:150}} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="row d-flex justify-content-between">
            <div className="col-3">
              <p>&copy; Developed by Hafeefa 2023</p>
            </div>
            <div className="col-5 d-flex justify-content-around  ">
              <Link className="text-decoration-none">Privacy Policy</Link>
              <Link className="text-decoration-none">Terms of Use</Link>
              <Link className="text-decoration-none">Contact Me</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

