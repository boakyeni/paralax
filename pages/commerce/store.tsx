import {useContext, useEffect} from "react";
import type { GetServerSideProps, NextPage } from 'next'
import Stripe from "stripe";
import Navbar from "../../components/Navbar";
import Product from "../../components/Product";
import data from "../../data.json"




export const getServerSideProps: GetServerSideProps = async (context) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        // https://github.com/stripe/stripe-node#configuration
        apiVersion: '2022-08-01',
      });
       
    const res = await stripe.prices.list({
        limit: 10,
        expand: ['data.product']
    });

    const prices = res.data.filter(price => {
        return price.active;
    })

    return {
        props: {
            prices
        },
    }
}

type Props = {
    prices: Stripe.Price[]
}

const Store: NextPage<Props> = ({prices}) => {
    return (
        <main className="bg-gray-100 min-h-screen">
            <Navbar />
            <div className="max-w-5xl mx-auto py-8">
                <div className="flex items-center justify-between border-b pb-3">
                    <h1 className="font-semibold tracking-wide leading-10 text-xl lg:text-3xl">
                        Shop Now
                    </h1>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                    {data.map(product => <Product product={product} />)}
                </div>
            </div>
        </main>
    )
}

export default Store