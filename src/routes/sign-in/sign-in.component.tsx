
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { SignUpForm } from '../../components/sign-up-form/sign-up-form-component';
import { getAdditionalUserInfo } from 'firebase/auth';

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user, getAdditionalUserInfo);
    };

    return (
        <div className='sign-up-container'>

            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>

            <SignUpForm/>

        </div>
    )
}

export default SignIn;