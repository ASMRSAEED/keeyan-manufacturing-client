import React from 'react';

const Banner = () => {
    return (
        <div className='text-white'>
            <div className="hero min-h-screen pb-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='Electric tools' src="https://i.ibb.co/2gg32Rn/Banner.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='w-2/4'>
                        <h1 className="text-5xl font-bold">Top Products <span className='text-red-500'><br /> Incredible Prices.</span></h1>
                        <p className="py-6 w-3/4">We do this by giving suppliers the tools necessary to reach a global audience for their products, and by helping buyers find products and suppliers quickly and efficiently.</p>
                        <button className="btn btn-primary">Explore More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;