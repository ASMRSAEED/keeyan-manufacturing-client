import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Sheared/Loading';
import ManageOrder from './ManageOrder';

const ManageOrders = () => {
    const { isLoading, data: manageOrders, refetch } = useQuery('manageOrders', () =>
        fetch(`https://young-savannah-04496.herokuapp.com/allOrders`,).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading loading={isLoading} color={'#14aac4'}></Loading>
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>

                        <tr>
                            <th>S.L</th>
                            <th>Email Address</th>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Total Price</th>
                            <th>Payments</th>
                            <th>Shipment</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            manageOrders.map((order, index) => <ManageOrder index={index} key={order._id} order={order} refetch={refetch}></ManageOrder>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;