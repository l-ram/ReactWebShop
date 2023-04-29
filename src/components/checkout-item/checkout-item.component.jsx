import './checkout-item.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';


// interface ICartItem {
//     name: string,
//     imageUrl: string,
//     price: number,
//     quantity: number
// }



const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { clearItemFromCart, removeItemFromCart, addItemToCart } = useContext(CartContext)
    const itemPrice = price * quantity;

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>

            <div className='arrow' onClick={removeItemHandler}>
                &#10094;
            </div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={addItemHandler}>
                &#10095;
            </div>
            <div className='arrow'></div>
            <div className='add-button'></div>
            <span className='price'>€{itemPrice}</span>
            <div onClick={clearItemHandler} className='remove-button'>&#10005;</div>
        </div>
    );

};

export default CheckoutItem;