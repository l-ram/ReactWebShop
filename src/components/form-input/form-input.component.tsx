import { ISignUpHandleChange } from "../../types/ISignUpHandleChange";
import { FormInputLabel, Input, Group } from './form-input.styles';

interface IFormInputProps {
    type: string,
    label: string,
    name: string,
    value: string,
    handleChange: (event: ISignUpHandleChange) => void;
}

export const FormInput = (props: IFormInputProps) => {
    return (
        <Group>
            <Input
                className="form-input"
                type={props.type}
                required
                onChange={props.handleChange}
                name={props.name}
                value={props.value}
            />

            <FormInputLabel
                className={`${props.value.length ? 'shrink' : ''
                    } form-input-label`}
            >
                {props.label}
            </FormInputLabel>



        </Group>
    );
};