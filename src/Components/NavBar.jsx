import React from 'react'
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  Button,
} from 'react-bootstrap'
import img from '../imgs/310281286_427780816164379_2701727977943227750_n.png'

function NavBar() {
  return (
    <Navbar
      variant='dark'
      expand='lg'
      className='fixed-top bg-primary bg-opacity-75 p-1'
    >
      <Container fluid>
        <Navbar.Brand href='#' className='fst-italic fw-bold'>
          <img src={img} width='30' height='30' alt='' /> PointOfCorrection
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link eventkey='link-1' href='/'>
              Home
            </Nav.Link>

            <Nav.Link eventkey='link-2' href='/Shop.jsx'>
              Shop
            </Nav.Link>

            <Nav.Link eventkey='link-3' href='/About.jsx'>
              About us
            </Nav.Link>

            <Nav.Link eventkey='link-4' href='/Contact.jsx'>
              Contact us
            </Nav.Link>
            <NavDropdown
              eventkey='link-5'
              title='My account'
              id='navbarScrollingDropdown'
            >
              <NavDropdown.Item href='/sign.jsx'>sign up</NavDropdown.Item>
              <NavDropdown.Item href='/account.jsx'>
                account details
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/Cart.jsx'>Cart</Nav.Link>
          </Nav>
          <Form className='d-flex'>
            <Form.Control
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
            />
            <Button variant='outline-light'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
