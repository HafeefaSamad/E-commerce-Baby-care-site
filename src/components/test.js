import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo1 from "./Assets/logo1.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdLogin } from "react-icons/md";
import "./Header.css";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function NavScrollExample() {
  const nav = useNavigate();
  return (
    <Navbar expand="lg" className="nav">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src={logo1}
            alt=""
            style={{ width: 100 }}
            onClick={() => nav("/")}
          />
        </Navbar.Brand>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            style={{ width: 380 }}
          />
          <Button variant="outline-success">Search</Button>
        </Form>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/cloths">Baby cloths</Nav.Link>
            <Nav.Link href="/maternity">Mom & maternity</Nav.Link>
            <Nav.Link href="/babycare">Baby care</Nav.Link>
            <Nav.Link href="/bedding">Gear & bedding</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <span className="user-icons">
          <button>
            <FaUserAlt />
          </button>
        </span>

        <span className="cart-icons">
          <button onClick={() => nav("/cart")}>
            <AiOutlineShoppingCart />
          </button>
        </span>
        <span className="login-icons">
          <button onClick={() => nav("/login")}>
            <MdLogin />
          </button>
        </span>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
