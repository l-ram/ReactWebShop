
import { ChangeEvent, FormEvent, useState } from "react"
import { ISignUpHandleChange } from "../../types/ISignUpHandleChange";
import { ISignUpForm } from "../../types/ISignUpForm"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import { FormInput } from "../form-input/form-input.component";

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

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    };

    const handleChange = (event: ISignUpHandleChange) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

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
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit} action="">

                <FormInput
                    label="User Name"
                    type="text"
                    name="userName"
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

                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}