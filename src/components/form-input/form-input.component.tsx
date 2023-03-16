import { ISignUpHandleChange } from "../../types/ISignUpHandleChange";
import './form-input.styles.scss';

interface IFormInputProps {
    type: string,
    label: string,
    name: string,
    value: string,
    handleChange: (event: ISignUpHandleChange) => void;
}

export const FormInput = (props: IFormInputProps) => {
    return (
        <div className="group">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <input
                className="form-input"
                type={props.type}
                required
                onChange={props.handleChange}
                name={props.name}
                value={props.value}
            />

            <label
                className={`${props.value.length ? 'shrink' : ''
                    } form-input-label`}
            >
                {props.label}
            </label>



        </div>
    );
};