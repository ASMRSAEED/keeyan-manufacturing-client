import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../../firebase.init';


const ProfileForm = ({ children, profile, refetch }) => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const addProfile = (event) => {
        event.preventDefault();
        const name = user?.displayName;
        const email = user?.email;
        const education = event.target.education.value;
        const location = event.target.location.value;
        const number = event.target.number.value;
        const linkDin = event.target.linkDin.value;
        const profileDetail = { name, email, education, location, number, linkDin };
        if (profile.length < 1) {
            fetch(`https://young-savannah-04496.herokuapp.com/addProfile`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(profileDetail)
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth)
                        toast.error('Unauthorized! Please Login Again')
                        navigate('/home')
                    }
                    return res.json()
                })
                .then(data => {
                    if (data.acknowledged) {
                        toast.success('Your Profile Added SuccessFully!')
                    } else {
                        toast.error('Please Fill All The Field')
                    }
                    event.target.reset()
                    refetch()
                })
        }
    }

    return (
        <form onSubmit={addProfile}>
            <div className='lg:w-full sm:w-2/4 mb-2 w-3/4 mx-auto'>
                <label className="label"><span className="label-text">Education</span></label>
                <input type="text" name='education' placeholder='Your Education' className="input input-bordered input-info w-full max-w-xs" required />
            </div>
            <div className='lg:w-full sm:w-2/4 mb-2 w-3/4 mx-auto'>
                <label className="label"><span className="label-text">Location</span></label>
                <input type="text" name='location' placeholder='Your Location' className="input  input-bordered input-info w-full max-w-xs" required />
            </div>
            <div className='lg:w-full sm:w-2/4 mb-2 w-3/4 mx-auto'>
                <label className="label"><span className="label-text">Phone Number</span></label>
                <input type="number" name='number' placeholder='Your Phone Number' className="input input-bordered input-info w-full max-w-xs" required />
            </div>
            <div className='lg:w-full sm:w-2/4 mb-2 w-3/4 mx-auto'>
                <label className="label"><span className="label-text">LinkDin</span></label>
                <input type="text" name='linkDin' placeholder='Your LinkDin Profile Link' className="input input-bordered input-info w-full max-w-xs" required />
            </div>
            <div className='sm:w-2/4 md:w-2/4 lg:w-full w-2/4 mx-auto'>
                {/* <input className='btn btn-outline  lg:w-2/4' type="submit" value={children} /> */}
                <button className='btn btn-outline'>
                    {children}
                </button>
            </div>
        </form>
    );
};

export default ProfileForm;