
import { FormEvent, useContext, useState } from "react"
import { ISignUpHandleChange } from "../../types/ISignUpHandleChange";
import { ISignInForm } from "../../types/ISignInForm"
import { createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils"
import { FormInput } from "../form-input/form-input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import './sign-in-form.styles.scss'

import { UserContext } from "../../contexts/user.context";

interface ISignInFormProps {

}

const defaultFormFields: ISignInForm = {
    email: '',
    password: '',
}

export const SignInForm = (props: ISignInFormProps) => {

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

    const handleChange = (event: ISignUpHandleChange) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error: any) {
            if (error as NodeJS.ErrnoException) {
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
        <div className="sign-in-container">
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

                <div className="buttons-container">
                    <Button buttonType={BUTTON_TYPE_CLASSES.base} type='submit'>Sign In</Button>
                    <Button buttonType={BUTTON_TYPE_CLASSES.google} type='button' onClick={signInWithGoogle}>
                        Sign In With Google
                    </Button>
                </div>
            </form>
        </div>
    )
}