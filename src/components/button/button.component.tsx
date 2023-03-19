
import './button.styles.scss'

interface IButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    functionType: 'Sign-in' | 'Sign-up' | 'Sign-in with Google'
    buttonStyle?: 'google-sign-in' | 'inverted' | undefined
}

export const Button = (props: IButtonProps) => {
    return (
        <button
            type={props.type}
            className={`button-container ${props.buttonStyle}`}
        >
        {props.functionType}
        </button>
    )
}