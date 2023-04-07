
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../../components/product-card/product-card.component';
import '../shop/shop.styles.scss';

const Shop = () => {
    const { products } = useContext(ProductsContext);
    return (
        <div className='products-container'>
            {products.map(({ id, name, price, imageUrl }) => (
                <div key={id}>
                    <h1>{name}</h1>

                    <ProductCard
                        id={id}
                        name={name}
                        price={price}
                        imageUrl={imageUrl}
                    ></ProductCard>

                </div>
            ))}
        </div>
    );
};

export default Shop