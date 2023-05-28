
import { ChangeEvent, FormEvent, useState, useContext } from "react"
import { ISignUpHandleChange } from "../../types/ISignUpHandleChange";
import { ISignUpForm } from "../../types/ISignUpForm"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import { FormInput } from "../form-input/form-input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import './sign-up-form.styles.scss'
import { UserContext } from "../../contexts/user.context";

interface ISignUpFormProps {

}


const defaultFormFields: ISignUpForm = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export const SignUpForm = (props: ISignUpFormProps) => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const { setCurrentUser } = useContext(UserContext)

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    };

    const handleChange = (event: ISignUpHandleChange) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
        console.log(formFields)
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            setCurrentUser(user);

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        }
        catch (error) {
            if (error instanceof Error) {
                if (error.message === 'auth/email-already-in-use') {
                    alert('Cannot create user, email already in use')
                } else {
                    console.log("error creating the user", error.message);
                }
            } else {
                console.log("unexpected error", error)
            }
        }
    };

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit} action="">

                <FormInput
                    label="User Name"
                    type="text"
                    name="displayName"
                    value={displayName}
                    handleChange={handleChange}
                />

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

                <FormInput
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    handleChange={handleChange}
                />

                <Button
                    buttonType={BUTTON_TYPE_CLASSES.inverted}
                    type="submit"
                >

                </Button>
            </form>
        </div>
    )
}