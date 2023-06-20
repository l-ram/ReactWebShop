
import { useContext, useState } from "react"
import { createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils"
import { FormInput } from "../form-input/form-input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import './sign-in-form.styles.jsx'

import { UserContext } from "../../contexts/user.context";
import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles.jsx";

const defaultFormFields = {
    email: '',
    password: '',
}

export const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields)        
    };

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            if (error) {
                switch (error.code) {
                    case 'auth/wrong-password': alert('Incorrect password');
                        break
                    case 'auth/user-not-found': alert('Incorrect email');
                        break;
                    default: console.log(error);
                }
                console.log(error);
            };
        };
    };

    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit} action="">
                <FormInput
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                    handleChange={handleChange}
                />

                <FormInput
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    handleChange={handleChange}
                />

                <ButtonsContainer>
                    <Button isLoading={false} buttonType={BUTTON_TYPE_CLASSES.base} type='submit'>Sign In</Button>
                    <Button isLoading={false} buttonType={BUTTON_TYPE_CLASSES.google} type='button' onClick={signInWithGoogle}>
                        Sign In With Google
                    </Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}