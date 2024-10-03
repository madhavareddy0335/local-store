import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
 import DropdownButton from "react-bootstrap/DropdownButton";
// import user from '../assets/user-profile.png'

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Categories</Nav.Link>
            <Nav.Link href="#link">Deals</Nav.Link>
            <Nav.Link href="#link">What's New</Nav.Link>
            <Nav.Link href="#link">Delivery</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

           <DropdownButton className="me-5 ps-5"  id="dropdown-item-button">
            <Dropdown.Item  as="button">Account</Dropdown.Item>
            <Dropdown.Item  as="button">Wishlist</Dropdown.Item>
            <Dropdown.Item  as="button">Cart</Dropdown.Item>
            <Dropdown.Item  as="button">Customer Care</Dropdown.Item>
          </DropdownButton> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
