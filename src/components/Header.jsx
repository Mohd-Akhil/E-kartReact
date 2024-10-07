import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';


function Header() {

  const wishlistArray = useSelector((state) => state.wishlistReducer)

  const cartArray = useSelector((state) => state.cartReducer)

  return (
    <>
      <Navbar style={{ backgroundColor: 'blueviolet', top:'0', position: 'fixed', zIndex:'1'}} className="w-100">
        <Container>
          <Link to={'/'} style={{ textDecoration: 'none' }}><Navbar.Brand ><FontAwesomeIcon icon={faCartShopping} bounce size='xl' className='me-3 text-light' /><span className='text-light'>E-CART</span></Navbar.Brand></Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>

                <Link to={'/wishlist'}><Button variant="light" className='me-3 ms-5'><FontAwesomeIcon icon={faHeart} className='me-2 text-danger' />Wish List <Badge bg="secondary">{wishlistArray.length}</Badge> </Button></Link>

              </Nav.Link>

              <Nav.Link>

                <Link to={'/cart'} ><Button variant="light"><FontAwesomeIcon icon={faCartShopping} className='me-2 text-success' />Cart <Badge bg="secondary">{cartArray.length}</Badge> </Button></Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header