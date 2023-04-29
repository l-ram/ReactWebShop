import './checkout-item.styles.scss';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import CartItem from '../cart-item/cart-item.component';


// interface ICartItem {
//     name: string,
//     imageUrl: string,
//     price: number,
//     quantity: number
// }



const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { clearItemFromCart } = useContext(CartContext)
    const itemPrice = price * quantity;

    const clearItemHandler = () => clearItemFromCart(props);
    
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>€{itemPrice}</span>
            <div onClick={clearItemHandler} className='remove-button'>&#10005;</div>
        </div>
    );

};

export default CheckoutItem;