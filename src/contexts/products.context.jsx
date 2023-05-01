import { createContext, useState } from 'react';
import SHOP_DATA from '../shop-data.ts';

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
    const [products, setProducts] = useState([]);
    const value = { products };
    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    );
};