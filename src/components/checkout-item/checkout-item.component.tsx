import './checkout-item.styles.scss';

interface ICartItem {
    name: string,
    imageUrl: string,
    price: number,
    quantity: number
}

const CheckoutItem = (props: ICartItem) => {
    const { name, imageUrl, price, quantity } = props;


    return (

        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className='remove-button'>&#1005;</div>
            <span className='name'>{name}</span>
        </div>
    );

};

export default CheckoutItem;