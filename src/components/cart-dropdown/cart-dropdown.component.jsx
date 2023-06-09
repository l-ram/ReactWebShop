import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import {CartDropdownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles.jsx'
import { useNavigate } from 'react-router-dom'

const CartDropDown = () => {

    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }
    
    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
                ) : (
                    <EmptyMessage>Your Cart is Empty</EmptyMessage>
                )}
            </CartItems>
            <Button onClick={goToCheckoutHandler}>To checkout</Button>
        </CartDropdownContainer>
    )
}


export default CartDropDown