import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faArrowLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { removeFromWishList } from '../redux/slice/wishlistSlice';
import { addToCart } from '../redux/slice/cartSlice';



function Wishlist() {


  const wishlistArray = useSelector((state) => state.wishlistReducer)
  console.log(wishlistArray);

  const dispatch = useDispatch()

  const handleCart = (item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishList(item.id))
  }


  return (
    <>
      {wishlistArray?.length > 0 ?
        <Row className='p-3 w-100 my-5' >
          {wishlistArray?.map((item) => (
            <Col sm={12} md={4} lg={3} className='mt-3 d-flex justify-content-center p-3' >
              <Card style={{ width: '18rem' }} className='rounded border shadow' >
                <Card.Img variant="top" src={item.image} className='w-100' style={{ height: '250px' }} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                  <p className='text-center fs-4 text-primary fw-bolder'>PRICE : ${item.price}</p>
                  </Card.Text>
                  <div className='d-flex justify-content-between'>
                    <Button variant="danger" onClick={()=>dispatch(removeFromWishList(item.id))} ><FontAwesomeIcon icon={faTrashCan} /></Button>
                    <Button variant="success" onClick={()=>handleCart(item)} ><FontAwesomeIcon icon={faCartShopping} /></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
          }
        </Row>
        :
        <div style={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-wishlist-11941567-9741055.png" alt="no image" />
          <Link to={'/'}><button className='btn btn-primary'><FontAwesomeIcon icon={faArrowLeft} className='me-2' />Back To Home</button></Link>
        </div>}
    </>
  )
}

export default Wishlist