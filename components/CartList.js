import React from 'react'
import { useRecoilState } from 'recoil'
import { cartState } from '../atoms/cartState'
import { toast } from 'react-hot-toast'

const CartList = ({data}) => {
    const {id, name, image, quantity, price} = data
    const [cartItem, setCartItem] = useRecoilState(cartState)

    const removeItemFromCart = () => {

        if(quantity <= 1){
            setCartItem((cart) => cart.filter((item) => item.name !== name))
        } else {
            setCartItem(prevState => {
                return prevState.map((item) => {
                    return item.id === id ? {...item, quantity: item.quantity - 1} : item
                })
            })
        }
        toast(`${name} removed from cart`)
    }

    return (
        <div>
            <div className='bg=[#fff] max-w-[800px] mx-auto mt-4 py-2 px-6 flex gap-6 items-center'>
                <img className='h-[100px]' src={image} alt={name} />
                <div>
                    <div className='font-bold text-2xl'>{name}</div>
                    <div>Quantity: {quantity} </div>
                </div>
                <div className='ml-auto'>
                    <div className='text-3xl font-bold ml-auto'>${price * quantity}</div>
                    <button className='ml-5' onClick={removeItemFromCart}>
                        <img className='max-h-[40px] aspect-w-16 aspect-h-9' src="/assets/remove-from-cart.png" alt="remove from cart" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartList