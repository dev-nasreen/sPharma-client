import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css'
import { FcGoogle } from 'react-icons/fc';



if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [newUser, setNewUser] = useState(true);
    const [user, setUser] = useState({
        isSignedIn: false
    })
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((res) => {
                const newUserInfo = { ...user };
                newUserInfo.success = true;
                newUserInfo.error = '';
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.push('/')
            })
            .catch((error) => {
                const newUserInfo = { ...user };
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
            });
    }


    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email, isSignedIn: true, }
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {
                var email = error.email;
                console.log(email)
            });
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="login-form">
                        {user.isSignedIn ||
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {newUser &&
                                    <div className="mb-3">
                                        <input type="text" name="name" class="form-control form-field" ref={register({ required: true })} placeholder=" Name" />
                                        {errors.name && <span>This field is required</span>}
                                    </div>
                                }
                                <div className="mb-3">
                                    <input name="email" class="form-control form-field" ref={register({ required: true })} type="email" placeholder="Username or Email" />
                                    {errors.email && <span style={{ color: 'red' }}>This field is required</span>}
                                </div>
                                <div className="mb-3">
                                    <input name="password" class="form-control form-field" ref={register({ required: true })} type="password" placeholder="Password" />
                                    {errors.password && <span style={{ color: 'red' }}>This field is required</span>}
                                </div>
                                <div className="mb-3">
                                    {
                                        newUser &&
                                        <input name="rePassword" class="form-control form-field" ref={register({ required: true })} type="password" placeholder="Confirm Password" />
                                    }
                                </div>

                                {/* {(newUser && watch().password === watch().rePassword) || <span style={{color:'red'}}>Password not matched.</span> } */}


                                <div className="mb-3">
                                    <input type="submit" className="btn btn-success form-control" value={newUser ? 'Create an account' : 'Sign In'} style={{ fontSize: '22px' }} />
                                </div>
                                {newUser ?
                                    <p style={{ fontSize: '18px' }}>Already have an account? <span onClick={() => setNewUser(!newUser)} style={{ color: '#198754', borderBottom: '1px solid #198754', cursor: 'pointer' }}>Log In</span> </p>
                                    :
                                    <p style={{ fontSize: '18px' }}>Don't have an account? <span onClick={() => setNewUser(!newUser)} style={{ color: '#198754', borderBottom: '1px solid #198754', cursor: 'pointer' }}>Create An Account</span> </p>
                                }
                            </form>
                        }
                        {/* <span onClick={handleGoogleSignIn}><FcGoogle/> </span> */}
                        <div className=" form-control google" onClick={handleGoogleSignIn}><FcGoogle /> <span className="g-text">Continue with google.</span> </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;