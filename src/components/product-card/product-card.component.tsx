import { Button } from '../button/button.component';
import './product-card.styles.scss';

interface IProductCardProps {
    id: number,
    name: string,
    price: number,
    imageUrl: string
}

const ProductCard = (props: IProductCardProps) => {
    return (
        <div className='product-card-container'>
            <img src={props.imageUrl} alt='' />
            <div className='footer'>
                <span className='name'>{props.name}</span>
                <span className='price'>{props.price}</span>
            </div>
            <Button buttonStyle='inverted'>Add to cart</Button>
        </div>)
}

export default ProductCard;