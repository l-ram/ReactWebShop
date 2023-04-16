import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import { Button } from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss'

const CartDropDown = () => {

const { cartItems } = useContext(CartContext)

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' />
            {cartItems.map( (item:any) =>(
            <CartItem key={item.id} name={item.name} quantity={item.quantity}/>
            ))}
            <Button value={'To checkout'}></Button>
        </div>
    )
}


export default CartDropDown