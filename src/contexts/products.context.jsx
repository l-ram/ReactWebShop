import { createContext, useState } from 'react';
import PRODUCTS from '../shop-data.json';

// interface IProductContextValue {
//     products: {
//         id: number;
//         name: string;
//         imageUrl: string;
//         price: number;
//     }
// }

export const ProductsContext = createContext(
    {
        products: [],
    }
);

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = { products };
    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    );
};