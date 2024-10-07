import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, removeFromCart } from '../redux/slice/cartSlice';


function Cart() {

  const [total,setTotal] = useState(0)

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const cartArray = useSelector((state) => state.cartReducer)
  console.log(cartArray);


  const getTotal = ()=> {
    if(cartArray?.length>0){
      setTotal (cartArray.map((item)=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  }

  const handleCart = ()=>{
    alert('Your Orders are placed successfully')
    dispatch(emptyCart())
    navigate('/')
  }

  useEffect(()=>{
    getTotal()
  },[cartArray])

  return (
    <>
      {cartArray?.length > 0 ?
        <div className='d-flex w-100'>
          <div className='w-50 p-5 border shadow my-5 ms-5'>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartArray.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td><img src={item.image} alt="no image" style={{ height: '150px', width: '150px' }} /></td>
                    <td>${item.price}</td>
                    <td><Button variant="outline-danger" onClick={() => dispatch(removeFromCart(item.id))} ><FontAwesomeIcon icon={faTrashCan} /></Button></td>
                  </tr>
                ))
                }
              </tbody>
            </Table>
          </div>
          <div className='p-5 border shadow my-5 ' style={{ marginLeft: '150px', width: '30%', height: '300px' }}>
            <h3 className='text-center text-info'>Cart Summary</h3>
            <h4 className='mt-3'>Total Number of Products : {cartArray?.length}</h4>
            <h4>Total Price : {total}</h4>
            <Button variant="success" className='text-center w-100 mt-3' onClick={handleCart} >Checkout</Button>
          </div>
        </div>
        :
        <div style={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <img src="https://cdn-icons-png.freepik.com/512/11329/11329060.png" alt="no image" />
          <Link to={'/'}><button className='btn btn-primary'><FontAwesomeIcon icon={faArrowLeft} className='me-2' />Back To Home</button></Link>
        </div>
      }
    </>

  )
}

export default Cart