import React from 'react';
import { toast } from 'react-toastify';

const ManageOrder = ({ order, index, refetch }) => {
    const { toolName, newPrice, email, paid, img, _id, shipped } = order;
    const shippedPaid = (id) => {
        console.log(id)
        fetch(`https://young-savannah-04496.herokuapp.com/updatePaid/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`

            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
                toast.success('Successfully Shipped')
            })
    }
    // console.log(shift)
    return (
        <tr>
            <th>{index + 1}</th>
            <th><small>{email}</small></th>

            <td> <div className="avatar">
                <div className="w-14 rounded-lg">
                    <img alt='toolImage' src={img} />
                </div>
            </div></td>
            <td>{toolName}</td>
            <td>${newPrice}</td>
            <td>{paid ? <span className='text-green-600 font-bold '>{shipped ? shipped : 'Pending'}</span> : <span className='text-red-600 font-semibold'>NOT PAID</span>}</td>
            <td className=''><button disabled={!paid} onClick={() => shippedPaid(_id)} className='btn btn-outline'>Ship Now</button></td>
        </tr>
    );
};

export default ManageOrder;