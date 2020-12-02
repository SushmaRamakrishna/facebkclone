import { Button } from '@material-ui/core';
import React from 'react';
import "./login.css";
import { auth, provider} from "../firebase/firebase"
import { useStateValue } from '../StateProvider/StateProvider';
import { actionTypes } from '../StateProvider/reducer';

function Login () {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(result => 
            {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
                console.log(result.user);
            }
        ).catch(error => alert(error.message));
    };    

        return (
            <div className="login">
               <div className="login_logo">
                   <img 
                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="" />
                   <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" />
               </div>
               <Button type="submit" onClick={signIn}>SignIn</Button>
            </div>
        );

}

export default Login;