import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Sheared/Loading';
import Review from './Review'

const UserReviews = () => {
    const { isLoading, data: reviews } = useQuery('reviews', () =>
        fetch(`https://young-savannah-04496.herokuapp.com/reviews`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading loading={isLoading} color={'#14aac4'}></Loading>
    }
    return (
        <div className='mb-12 '>
            <h1 className='text-4xl text-center font-bold mb-5 text-green-500'><u>Customer Reviews:</u></h1>
            <div className='grid lg:grid-cols-3 lg:w-3/4 mx-auto text-red-400'>
                {
                    reviews.map(review => <Review key={review._id} review={review} />)
                }
            </div>

        </div>
    );
};

export default UserReviews;