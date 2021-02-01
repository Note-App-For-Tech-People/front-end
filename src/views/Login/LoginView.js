import React from 'react'
import IntoAccountHeader from '../../components/IntoAccountHeader';
import IntoAccountSubBox from '../../components/IntoAccountSubBox';

//style
import '../../styles/IntoAccount.css';

//icons
import imgLogIn from '../../assets/log-in.svg'
import imgSignIn from '../../assets/sign-in.svg'

const LoginView = () => {
    const title = "Log In to Git_Note";
    const leftText = "New to Git_Note?"
    const rightText = "Create an account"
    return (
        <div className="IntoAccount">
            <IntoAccountHeader title={title} img={imgLogIn} />
            <form>
                <label>Email address</label>
                <input type="text" name="email" />
                <label>Password</label>
                <input type="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <IntoAccountSubBox leftText={leftText} rightText={rightText} />
        </div>
    )
}

export default LoginView;