import './checkout-item.styles.jsx';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import { BaseSpan, CheckoutItemContainer, ImageContainer, Quantity, Arrow, Value, RemoveButton } from './checkout-item.styles.jsx';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { clearItemFromCart, removeItemFromCart, addItemToCart } = useContext(CartContext)
    const itemPrice = price * quantity;

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;