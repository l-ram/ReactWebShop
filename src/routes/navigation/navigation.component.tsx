import { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './navigation.styles.scss';
import { UserContext } from '../../contexts/user.context';

const Navigation = () => {
const { currentUser } = useContext(UserContext);
console.log(currentUser);

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
                    <Link className='nav-link' to='/auth'>
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )

}

export default Navigation;