import ProductCard from '../product-card/product-card.component';
import { Link } from 'react-router-dom';
import './category-preview.styles.jsx';
import { CategoryPreviewContainer, Preview } from './category-preview.styles.jsx';

const CategoryPreview = ({ title, products }) => (
    <CategoryPreviewContainer>
        <h2>
            <Link className='title' to={title}>{title.toUpperCase()}</Link>
        </h2>
        <Preview>
            {products
                .filter((_, idx) => idx < 4)
                .map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
        </Preview>
    </CategoryPreviewContainer>
);

export default CategoryPreview;