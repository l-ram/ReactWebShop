import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import { Button } from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.jsx'
import { useNavigate } from 'react-router-dom'

const CartDropDown = () => {

    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }
    
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
                ) : (
                    <span className='empty-message'>Your Cart is Empty</span>
                )}
            </div>
            <Button onClick={goToCheckoutHandler}>To checkout</Button>
        </div>
    )
}


export default CartDropDown