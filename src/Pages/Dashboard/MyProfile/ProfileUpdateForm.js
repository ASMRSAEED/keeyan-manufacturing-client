import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const ProfileUpdateForm = ({ children, profile, refetch }) => {
    const [user] = useAuthState(auth)
    const { _id } = profile[0];
    const navigate = useNavigate()
    const updateProfile = (event) => {
        event.preventDefault();

        const name = user?.displayName;
        const email = user?.email;
        const education = event.target.education.value;
        const location = event.target.location.value;
        const number = event.target.number.value;
        const linkDin = event.target.linkDin.value;
        // const profileDetail = { education, location, number, linkDin };
        const profileDetail = { name, email, education, location, number, linkDin };
        console.log(profileDetail)
        // if (profile.length < 1) {
        console.log(_id)
        fetch(`https://young-savannah-04496.herokuapp.com/profileUpdate/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(profileDetail)
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    toast.error('You Are not a Valid User Login Again')
                    navigate('/home')
                }
                return res.json()
            })
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Profile Added Successfully!')
                } else {
                    toast.error('Fail To Update Your Profile!')
                }
                console.log(data)
                // toast.success('profile add compleat!')
                event.target.reset()
                refetch()
            })
        // }
    }
    return (
        <form onSubmit={updateProfile}>
            <div className='lg:w-full sm:w-2/4 mb-2 w-3/4 mx-auto'>
                <label className="label"><span className="label-text">Education</span></label>
                <input type="text" name='education' placeholder='Education' className="input input-bordered input-info w-full max-w-xs" required />
            </div>
            <div className='lg:w-full sm:w-2/4 mb-2 w-3/4 mx-auto'>
                <label className="label"><span className="label-text">Location</span></label>
                <input type="text" name='location' placeholder='Location' className="input  input-bordered input-info w-full max-w-xs" required />
            </div>
            <div className='lg:w-full sm:w-2/4 mb-2 w-3/4 mx-auto'>
                <label className="label"><span className="label-text">Phone Number</span></label>
                <input type="number" name='number' placeholder='Phone Number' className="input input-bordered input-info w-full max-w-xs" required />
            </div>
            <div className='lg:w-full sm:w-2/4 mb-2 w-3/4 mx-auto'>
                <label className="label"><span className="label-text">LinkedIn Profile Link</span></label>
                <input type="text" name='linkDin' placeholder='LinkedIn Profile Link' className="input input-bordered input-info w-full max-w-xs" required />
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

export default ProfileUpdateForm;