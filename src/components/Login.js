import React from 'react'
import { Button } from '@material-ui/core'
import './Login.css'
import { auth, provider } from '../firebase'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'

function Login() {
    const dispatch = useDispatch()
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(({ user }) => {
                dispatch(
                    login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL,
                    })
                )
            })
            .catch(error => alert(error.message))
    }

    const signInDemo = () => {
        dispatch(
            login({
                displayName: "test",
                email: "test@test.test",
                photoUrl: "https://codahosted.io/docs/IZn3UNbEOU/blobs/bl-137mEqTBzf/8e04b9feef4481efc0616766fb5547e099f3b5a7ecf18c5d6e1b03bbacdb9c9d74ac9f8cc0b5457d5ea1700a7cd5f866942616013c01cff01c2641e5ce293e4f9733859c5858dc1c3f1738355e8591ffd8fca9311e1e2283bb8ea449f5307c52c0dec951"
            })
        )
        
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg" alt="gmail logo"/>

                <Button 
                    className="login__button"
                    variant="contained" 
                    color="primary"
                    onClick={signIn}
                >
                    Login
                </Button>

                <Button 
                    variant="contained" 
                    color="secondary"
                    onClick={signInDemo}
                >
                    Demo Login
                </Button>
            </div>
        </div>
    )
}

export default Login
