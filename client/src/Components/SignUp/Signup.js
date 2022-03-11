import React, { useState } from 'react';
import { addDoc } from "firebase/firestore";
import './Signup.css';
import { useAuth } from '../../Context/AuthContext';
import { userCollection } from '../../Firebase';
import img from '../../Assets/Blob.jpeg';
import { useNavigate } from "react-router-dom";

const Signup = () => {
    let navigate = useNavigate();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const { signUp, currentUser } = useAuth();
    const [error, seterror] = useState(' ')
    async function handleSubmit(e) {
        e.preventDefault();
        if (password !== confirmPassword)
            return seterror('Password do not match');
        try {

            seterror(' ');
            console.log('SignUp Successfull');
            const signUpLoad = await signUp(email, password);
            console.log(signUpLoad.user.uid);
            try {
                await addDoc(userCollection, {
                    uid: signUpLoad.user.uid,
                    email: email,
                    certifactes: [],
                    playlist: []
                });
            }
            catch (err) {
                console.log(err);
            }
            navigate(`/dashboard`);
            console.log('Registered Now!');
        }
        catch (err) { seterror('failed to create an account'); }
    }
    return (
        <div className='signUpContainer'>
            <div className='signupWrapper'>
                <div className='HeaderTopSignUp'>
                <div id="imgBlob">
                    <div className='signUpHeader'>Register</div>
                    <div className="signUpText">Create an account it's free</div>
                </div>
                </div>
                
                <form className='formWrapper'>
                    <div className='fieldHolders'>
                        <input type="text" className='SignUpFields' placeholder='Email' value={email} onChange={(e) => { setemail(e.target.value) }} />
                    </div>
                    <div className='fieldHolders'>
                        <input type="password" className='SignUpFields' placeholder='Password' value={password} onChange={(e) => { setpassword(e.target.value) }} />
                    </div>
                    <div className='fieldHolders'>
                        <input type="password" className='SignUpFields' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }} />
                    </div>
                    <div className='buttonWrapper'>
                        <button id="signUpButton"
                            onClick={handleSubmit}
                        >Sign Up!</button>
                    </div>
                </form>
                <div className='vectorblob'><svg

                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M33.94.172c11.8 1.383 15.943 14.852 23.223 23.98 7.049 8.838 20.296 16.175 17.44 27.006-2.842 10.778-17.65 12.054-28.6 15.32-8.17 2.436-16.611 3.968-24.363.474-7.893-3.558-12.718-10.677-15.802-18.58C1.895 38.268-3.047 27.14 2.435 17.737 8.712 6.969 21.292-1.31 33.939.172z"
                        fill="#E27BF5"
                        fillOpacity={0.45}
                    />
                </svg></div>
            </div>
        </div>

    )
}

export default Signup