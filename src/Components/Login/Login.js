import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
//import { FcGoogle } from 'react-icons/fc';



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
            .then((userCredential) => {
                var user = userCredential.user;
                console.log(user);
                history.replace(from);
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });
            console.log(data.email, data.name);
        
    }

    console.log("watching..", watch().password, watch().rePassword );
    
    const handleGoogleSignIn = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        const {displayName, email} = result.user;
        const signedInUser = {name: displayName, email, isSignedIn: true,}
        setLoggedInUser(signedInUser);
        history.replace(from);
      }).catch((error) => {
        var errorMessage = error.message;
        var email = error.email;
        console.log(errorMessage, email)
      });
      }
    return (
        <div>
            {    user.isSignedIn ||
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    newUser &&  <input name="name" ref={register({ required: true })} type="text" placeholder="your name" />
                }
                {errors.name && <span>This field is required</span>}
                <br />
                <input name="email" ref={register({ required: true })} type="email" placeholder="Email" />
                {errors.email && <span>This field is required</span>}
                <br />
                <input name="password" ref={register({ required: true })} type="password" placeholder="Password" />
                {errors.password && <span>This field is required</span>}
                <br />
                {
                    newUser && <input name="rePassword" ref={register({ required: true })} type="password" placeholder="Password" />
                }
                
                { watch().password === watch().rePassword || <span>Password not matched.</span>}
                <br />
                <input type="submit" value={newUser ? 'Sign Up' : 'Sign In'}/>

                <p>Or <span onClick={() => setNewUser(!newUser) }>Log In</span> </p>
            </form>
            }
            {/* <span onClick={handleGoogleSignIn}><FcGoogle/> </span> */}
            <span onClick={handleGoogleSignIn}>Sign in with google. </span>
        </div>
    );
};

export default Login;