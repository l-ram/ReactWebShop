
import './button.styles.scss'

// interface IButtonProps extends React.ComponentPropsWithoutRef<"button"> {
//     buttonStyle?: 'google-sign-in' | 'inverted' | undefined
//     googleSignIn?(): void;
// }

export const Button = (props: IButtonProps) => {
    return (
        <button
            onClick={props.googleSignIn}
            className={`button-container ${props.buttonStyle}`}
            type={props.type}
        >
            {props.value}
        </button>
    )
}