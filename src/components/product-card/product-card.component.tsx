import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { Button } from '../button/button.component';
import './product-card.styles.scss';

export interface IProductCardProps {
    id: number,
    name: string,
    price: number,
    imageUrl: string
}

const ProductCard = (props: IProductCardProps) => {
    const productItem = {...props}

    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () => {
        console.log("click")
        addItemToCart(productItem)
    }
 
    return (
        <div className='product-card-container'>
            <img src={props.imageUrl} alt={`${props.name}`} />
            <div className='footer'>
                <span className='name'>{props.name}</span>
                <span className='price'>{props.price}</span>
            </div>
            <button onClick={addItemToCart}>Add to cart</button>
            {/* <Button value={'Add to Cart'} buttonStyle='inverted' onClick={addProductToCart}>Add to cart</Button> */}
        </div>)
}

export default ProductCard;