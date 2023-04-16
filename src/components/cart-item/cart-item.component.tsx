import './cart-item.styles.scss';


export interface ICartItemProps {
    id?: number,
    name: string,
    price?: number,
    imageUrl?: string,
    quantity: number | undefined
}

const CartItem = (props:ICartItemProps) => {

    return (
        <div>
            <h2>{props.name}</h2>
            <span>{props.quantity}</span>
        </div>
    )
}

export default CartItem;