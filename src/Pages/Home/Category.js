import React from 'react';

const Category = () => {
    return (
        <div>
            <div className='border rounded-lg -mt-20 bg-red-900  w-3/4 mx-auto'>
                <div>
                    <div className='text-center '>
                        <h1 className='text-5xl font-bold co'>Super Deals</h1>
                        <br />
                    </div>
                    <div className='grid lg:grid-cols-4'>
                        <div className=' m-5'>
                            <img className='w-full relative rounded-lg' src="https://i.ibb.co/2hm0nD3/super-deal-3-1.png" alt="" />
                            <br /><br />
                            <p className='text-center absolute ml-8 text-white  -mt-12 font-bold'>172pcs Auto Repair Socket Set</p>
                        </div>
                        <div className=' m-5'>
                            <img className='w-full relative rounded-lg' src="https://i.ibb.co/CmJ29MT/super-deal-2.png" alt="" />
                            <br /><br />
                            <p className='text-center absolute ml-8 text-white  -mt-12 font-bold'>121PCS Professional Tools Kit</p>
                        </div>
                        <div className=' m-5'>
                            <img className='w-full relative rounded-lg' src="https://i.ibb.co/2hm0nD3/super-deal-3-1.png" alt="" />
                            <br /><br />
                            <p className='text-center absolute ml-14 text-white  -mt-12 font-bold'>Motor repair socket set</p>
                        </div>
                        <div className=' m-5'>
                            <img className='w-full relative rounded-lg' src="https://i.ibb.co/8sC14P5/super-deal-4.png" alt="" />
                            <br /><br />
                            <p className='text-center absolute ml-8 text-white  -mt-12 font-bold'>52PCS FORCE TOOLS SET</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Category;