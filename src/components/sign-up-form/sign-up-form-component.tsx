
import { ChangeEvent, FormEvent, useState } from "react"
import { ISignUpForm } from "../../types/ISignUpForm"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

interface ISignUpFormProps {

}

interface IHandleChange {
    target: HTMLInputElement
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

    const handleChange = (event: IHandleChange) => {
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
                <label htmlFor="Display Name">User Name</label>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName} />

                <label htmlFor="Email">Email</label>
                <input type="email" required onChange={handleChange} name="email" value={email} />

                <label htmlFor="Password">Password</label>
                <input type="password" required onChange={handleChange} name="password" value={password} />

                <label htmlFor="Confirm password">Confirm Password</label>
                <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}