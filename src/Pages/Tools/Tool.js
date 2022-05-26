import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useFindAdmin from '../hooks/useFindAdmin';


const Tool = ({ tool }) => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth)
    const [admin] = useFindAdmin(user)
    const { name, description, price, img, minimumQuantity, availableQuantity, _id } = tool;

    return (
        <div className='rounded-lg border ease-in duration-700 hover:text-white hover:shadow-2xl hover:bg-lime-700 shadow-lg p-4 m-6'>
            <img className='w-full rounded-lg' src={img} alt="" />
            <div>
                <h1 className='text-xl text-center text-rose-300'>{name}</h1>
                <br />
                <h1>Price: <span className='text-pink-500 font-bold'>US ${price}</span></h1>
                <div className='flex justify-between'>
                    <h1>Minimum Order Quantity: <span className='text-pink-600 font-bold'>{minimumQuantity} PCS</span></h1>
                    <h1>Available Quantity: <span className='text-pink-600 font-bold'>{availableQuantity} PCS</span></h1>
                </div>
                <br />
                <h1><small>Description: {description}</small></h1>
                {
                    user && admin ? <button onClick={() => navigate(`/updateProduct/${_id}`)} className="btn mt-2 btn-outline w-full ease-in-out duration-500">Update</button> :
                        <button onClick={() => navigate(`/purchase/${_id}`)} className="btn mt-2 btn-outline w-full ease-in-out duration-500">Purchase</button>
                }
            </div>
        </div>
    );
};

export default Tool;