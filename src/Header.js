// Header.js
import React, {  useContext } from 'react';
import {  Container, Navbar, Nav } from 'react-bootstrap';
import logo from './Assets/logo1.png';
import {  AiFillHome } from 'react-icons/ai';
import { CgShoppingCart } from 'react-icons/cg';
import { RiAdminFill } from 'react-icons/ri';
import { MdLogin, MdLogout } from 'react-icons/md';
import './Header.css';
import { userContext } from './App';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const nav = useNavigate()
  const {login, setLogin} = useContext(userContext)
const Logout = ()=>{
   if(login){
    setLogin(false)
   }
   else{
    nav('/login')
   }
}

  return (
    <header className="">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="" className="img-fluid logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <AiFillHome className="fs-4" onClick={()=>nav('/')}/>
              </Nav.Link>
              <Nav.Link onClick={()=>nav('/cloths')}>Baby Cloths</Nav.Link>
              <Nav.Link onClick={()=>nav('/babycare')}>Baby care</Nav.Link>
              <Nav.Link onClick={()=>nav('/bedding')}>Gear & Bedding</Nav.Link>
            </Nav>

           
            <div className="nav-icons">
              {login ? (
              <MdLogout className='logout'  onClick={Logout}/>) : (<MdLogin onClick={()=>nav('/login')}/>
              )}
              <CgShoppingCart className='cart' onClick={()=>nav('/cart')}/>
              <RiAdminFill className='admin' onClick={()=>nav('/adminlogin')}/>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
