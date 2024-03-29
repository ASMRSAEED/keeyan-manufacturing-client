import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Sheared/Loading';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const { id } = useParams();
    const { isLoading, data: order } = useQuery('tools', () =>
        fetch(`https://young-savannah-04496.herokuapp.com/orders/${id}`,).then(res =>
            res.json()
        )
    )
    if (!order) {
        return <Loading loading={!order} color={'#b51b7d'}></Loading>
    }
    const { img, newPrice, quantity, toolName } = order[0];

    const stripePromise = loadStripe('pk_test_51L3FZwKevRnz22sezOhGzf3bKtNEAaWKCk7GuNnANXioDIcR2lx0hwFVqISwJXVOpmdiVqeYYbjTCypCU0fGnGmh00aRG0GfXd');
    if (isLoading) {
        return <Loading loading={isLoading} color={'#b51b7d'}></Loading>
    }
    return (
        <div className=''>
            <div className='lg:flex items-center shadow-xl lg:w-3/4 rounded-lg'>
                <div>
                    <img className='rounded-l-lg rounded-bl-lg' src={img} alt="" />
                </div>
                <div className='ml-12'>
                    <h1 className='text-2xl'>Name: {toolName}</h1>
                    <br />
                    <h1>Total Price: <span className='text-pink-700 font-bold'>${newPrice}</span></h1>
                    <h1>Quantity: {quantity} Piece</h1>
                </div>
            </div>
            <div className='card-body rounded-lg shadow-2xl lg:w-2/4 mt-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;