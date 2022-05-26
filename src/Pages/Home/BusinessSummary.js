import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faFileCirclePlus, faScrewdriverWrench, faUsers } from '@fortawesome/free-solid-svg-icons'

const BusinessSummary = () => {
    return (
        <div className='my-32 '>
            <div>
                <h1 className='text-5xl text-center font-bold'>SHOP WITH CONFIDENCE</h1>
                <h3 className='text-2xl mt-2 text-red-500 font-semibold text-center'>Pay with the world’s most popular and secure payment methods.</h3>
                <div className='grid md:grid-cols-2 text-center mt-12 lg:grid-cols-4'>
                    <div>
                        <FontAwesomeIcon className='text-7xl text-red-500' icon={faFileCirclePlus} />
                        <p className='text-3xl font-semibold text-green-500 my-2'>45+</p>
                        <p className='text-xl font-semibold text-[#1bb0b3]'>Countries</p>
                    </div>
                    <div>
                        <FontAwesomeIcon className='text-7xl text-red-500' icon={faScrewdriverWrench} />
                        <p className='text-3xl font-semibold text-green-500 my-2'>500+</p>
                        <p className='text-xl font-semibold text-[#1bb0b3]'>Products</p>
                    </div>
                    <div>
                        <FontAwesomeIcon className='text-7xl text-red-500' icon={faUsers} />
                        <p className='text-3xl font-semibold text-green-500 my-2'>3 Millions</p>
                        <p className='text-xl font-semibold text-[#1bb0b3]'>Happy Customers</p>
                    </div>
                    <div>
                        <FontAwesomeIcon className='text-7xl text-red-500' icon={faComments} />
                        <p className='text-3xl font-semibold text-green-500 my-2'>2 Millions</p>
                        <p className='text-xl font-semibold text-[#1bb0b3]'>Reviews</p>
                    </div>
                </div>
                <div className='w-3/4 mx-auto shadow-2xl mt-8 p-6'>
                    <div>
                        <h1 className='text-4xl text-red-600 text-center'>Worldwide Shipping</h1>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BusinessSummary;