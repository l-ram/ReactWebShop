import { createContext, useEffect, useState } from 'react';
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
        products: PRODUCTS
    }
);

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = { products };
    useEffect(() => { }
        , []);
    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}