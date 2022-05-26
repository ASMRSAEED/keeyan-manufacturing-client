import React from 'react';

const TrendingTools = () => {
    return (
        <div className='my-12'>
            <h1 className='text-center  font-bold text-green-600 text-5xl'>More To Love</h1>
            <div className='grid w-3/4 mx-auto mt-8 lg:grid-cols-4 text-center text-xl'>
                <div className='m-4'>
                    <img className='border rounded-lg' src="https://i.ibb.co/7t1fppn/love-1.png" alt="" />
                    <p>Knife Automatic Wire Cutter</p>
                </div>
                <div className='m-4'>
                    <img className='border rounded-lg ' src="https://i.ibb.co/0DgdDhG/love-2.png" alt="" />
                    <p>Network Cable Lug Crimping</p>
                </div>
                <div className='m-4'>
                    <img className='border rounded-lg' src="https://i.ibb.co/8NXL6rj/love-3.png" alt="" />
                    <p>Folding Pliers Bottle Opener</p>
                </div>
                <div className='m-4'>
                    <img className='border rounded-lg' src="https://i.ibb.co/Cnh1k8J/love-4.png" alt="" />
                    <p>Hose Clamp Removal Tool</p>
                </div>
            </div>
        </div>
    );
};

export default TrendingTools;