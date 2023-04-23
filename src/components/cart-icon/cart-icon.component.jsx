import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context.jsx'

import './cart-icon.styles.scss';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);



    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />

            {cartItems.length ?

                <span className='item-count'>
                    {`${cartItems.length}`}
                </span>

                : <span></span>
            
            }


        </div>
    )
}

export default CartIcon;