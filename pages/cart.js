import React from 'react'
import Navbar from '../components/Navbar'
import { useRecoilState } from 'recoil'
import { cartState } from '../atoms/cartState'
import CartList from '../components/CartList'
import axios from "axios"
import { useEffect, useState } from 'react'
import { useSsrComplectedState } from '../atoms/persistAtomEffect'



const Cart = () => {
  //add remove from cart and change quantity
  const [cartItem, setCartItem] = useRecoilState(cartState)
  
  const [isLoading, setLoading] = useState(false)

  const setSsrCompleted = useSsrComplectedState()
  useEffect(setSsrCompleted, [setSsrCompleted])

  const totalPrice = () => {
    let total = 0
    cartItem.forEach(item => total += (item.price * item.quantity))
    return total
  }
  const config = {
    headers: { Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}` }
  };

  
  const createCheckoutSession = () => {
    axios.post('api/checkout_sessions/', {cartItem}, config)
    .then(res => {
      console.log(res)
      window.location = res.data.sessionURL
    })
    .catch(err => console.log(err))
  }

  

  return (
    <div>
      <Navbar />
      <div className='container bg-white mx-auto'>
        {cartItem.length <= 0
          ? <h1 className='text-center text-4xl mt-32'>Your Cart Is Empty</h1>
          : cartItem.map(item => <CartList key={item.id} data={item} />)
        }
        {cartItem.length > 0 && (<div className='max-w-[800px] mx-auto mt-4'>
          <h2 className='text-right text-3xl font-bold'>Total: ${totalPrice()}</h2>
          <button
            className='text-right bg-red-600 text-white py-4 px-12 mt-4 block mx-auto hover:bg-red-800' onClick={() => 
              {
                setLoading(true)
                setTimeout(function(){ 
                  createCheckoutSession();
               }, 1000);
              }}>
            {isLoading ? "Loading..." : "Checkout" }</button>
        </div>)}
      </div>
    </div>
  )
}

export default Cart