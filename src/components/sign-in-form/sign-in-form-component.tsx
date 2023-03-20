
import { FormEvent, useState } from "react"
import { ISignUpHandleChange } from "../../types/ISignUpHandleChange";
import { ISignInForm } from "../../types/ISignInForm"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils"
import { FormInput } from "../form-input/form-input.component";
import { Button } from "../button/button.component";
import './sign-in-form.styles.scss'

interface ISignInFormProps {

}

const defaultFormFields: ISignInForm = {
    email: '',
    password: '',
}

export const SignInForm = (props: ISignInFormProps) => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    };

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user)
        await createUserDocumentFromAuth(user);
    };

    const handleChange = (event: ISignUpHandleChange) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
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
                    <Button
                        value="Sign-in"
                        type="submit"
                    ></Button>

                    <Button
                        value="Google Sign-in"
                        googleSignIn={signInWithGoogle}
                        type="button"
                        buttonStyle="google-sign-in"
                    >
                    </Button>
                </div>
            </form>
        </div>
    )
}