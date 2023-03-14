import { ISignUpHandleChange } from "../../types/ISignUpHandleChange";

interface IFormInputProps {
    type: string,
    label: string,
    name: string,
    value: string,
    handleChange: (event: ISignUpHandleChange) => void;
}


export const FormInput = (props:IFormInputProps) => {
    return (
        <div>
            <label>{props.label}</label>
            <input
                type={props.type}
                required
                onChange={props.handleChange}
                name="displayName"
                value={props.value}
            />

        </div>
    );
};