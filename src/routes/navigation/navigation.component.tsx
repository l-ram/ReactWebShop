import { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './navigation.styles.scss';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    console.log(currentUser);

    const signOutHandler = async () => {
        const res = await signOutUser();
        console.log(res);
        setCurrentUser(res);
    }
    

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <Logo className='logo'></Logo>
                </Link>
                <div className="nav-links-container">
                    <Link className='nav-link' to='/shop'>
                        Shop
                    </Link>
                    {
                        currentUser ? (<span className='nav-link' onClick={signOutHandler}>Sign Out</span>
                        ) : (
                            <Link className='nav-link' to='/auth'>
                                Sign In
                            </Link>
                        )
                    }
                    <CartIcon/>
                </div>
                {isCartOpen && <CartDropDown/>}
                
            </div>
            <Outlet />
        </Fragment>
    )

}

export default Navigation;