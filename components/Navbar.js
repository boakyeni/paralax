import React from 'react'
import Link from 'next/link'
import { cartState } from '../atoms/cartState'
import {useRecoilState} from "recoil"

import {FiShoppingCart} from 'react-icons/fi'

const Navbar = () => {

    const [cartItem] = useRecoilState(cartState)

  return (
    <section className="shadow-xl bg-black sticky top-0">
        <div className='container mx-auto py-2 text-[24px] flex justify-between items-center'>
            <div className='cursor-pointer text-white'>
                <Link href="/">(It looks sus because we are out of stock, so don't buy anything)</Link>
            </div>
            <div className='relative cursor-pointer text-white'>
                <Link href="/cart">
                    <div>
                        <FiShoppingCart />
                        <span className="absolute -top-2 -right-2 text-[13px] bg-red-600 h-[18px] rounded-full grid place-items-center text-white">{cartItem.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Navbar