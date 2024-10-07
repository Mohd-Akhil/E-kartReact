import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';

function Footer() {
  return (
    <>
      <div className="row w-100 p-4 mt-5 text-light " style={{backgroundColor:'blueviolet'}}>
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <div>
            <h3><FontAwesomeIcon icon={faCartShopping} className='me-4' />E-Cart</h3>
            <p  >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus non repellat odio? Ipsam dignissimos dolore qui non. Voluptatem!</p>
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-1">
          <h4>Links</h4>
          <p className='mt-4'><Link to={'/'} style={{textDecoration:'none',color:'white'}} >Home</Link></p>
          <p><Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}} >Wish List</Link></p>
          <p><Link to={'/cart'} style={{textDecoration:'none',color:'white'}} >Cart</Link></p>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-1">
          <h4>Guides</h4>
          <p className='mt-4'>React</p>
          <p>ReactBootstrap</p>
          <p>Bootswatch</p>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <h4>Contact Us</h4>
          <div className='d-flex mt-4'>
            <input type="text" className='form-control bg-light rounded shadow' placeholder='E-mail ID' />
            <button className='btn btn-warning ms-2'>Subscribe</button>
          </div>
          <div className='d-flex mt-4 justify-content-between'>
            <FontAwesomeIcon icon={faInstagram} size='2xl' />
            <FontAwesomeIcon icon={faFacebook} size='2xl' />
            <FontAwesomeIcon icon={faSquareXTwitter} size='2xl' />
            <FontAwesomeIcon icon={faLinkedin} size='2xl' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer