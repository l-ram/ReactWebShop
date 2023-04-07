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
            <img src={props.imageUrl} alt={`${props.name}`} />
            <div className='footer'>
                <span className='name'>{props.name}</span>
                <span className='price'>{props.price}</span>
            </div>
            <Button value={'Add to Cart'} buttonStyle='inverted'></Button>
        </div>)
}

export default ProductCard;