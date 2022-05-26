import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='w-3/4 mx-auto'>
            <div className='text-3xl mb-6'>
                <h1>Name: A.S.M Rafiqullah</h1>
                <p>Email Address: asmrsaeed@gmail.com</p>
            </div>
            <div>
                <p className='text-xl mb-4'>Education: Degree(PASS Course)</p>
            </div>
            <div ><span className='text-xl font-bold'>Skill:</span>
                <div className='grid lg:grid-cols-2'>
                    <div>
                        1.HTML <br />
                        2.CSS  <br />
                        3.Bootstrap
                        4.Tailwind <br />
                        5.Javascript <br />
                        6.React.js <br />
                        7.DaisyUI <br />
                        8.React Router <br />
                        9.React Query <br />
                    </div>
                    <div>
                        10.firebase <br />
                        11.React firebase hook <br />
                        12.React form hook <br />
                        13.Node.js <br />
                        14.Express.js <br />
                        15.MongoDB <br />
                        16.NodeMailer <br />
                        17.Github <br />
                        18.Font Awesome <br />
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-xl'>Live Projects:</h1>
                    1. <a className='underline text-blue-600' target='_blank' rel='noreferrer' href="https://grocery-manager-a2e7a.web.app/">Grocery Manager </a> <br />
                    2. <a className='underline text-blue-600' target='_blank' rel='noreferrer' href="https://mr-doctor-4e732.web.app/">Mr. Doctor </a> <br />
                    2. <a className='underline text-blue-600' target='_blank' rel='noreferrer' href="https://five-star-stride.netlify.app/">Five Star Stride</a>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;