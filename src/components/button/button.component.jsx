
import './button.styles.scss'

// interface IButtonProps extends React.ComponentPropsWithoutRef<"button"> {
//     buttonStyle?: 'google-sign-in' | 'inverted' | undefined
//     googleSignIn?(): void;
// }

export const BUTTON_TYPE_CLASSES = {
    google: "google-sign-in",
    inverted: "inverted",
};

export const Button = ({children, buttonType, ...otherProps}) => {
    return (
        <button
            className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button