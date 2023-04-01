import { createContext, useEffect, useState } from 'react';
import PRODUCTS from '../shop-data.json';

interface IProductContext {

}

export const ProductsContext:IProductContext = createContext(
    {
        products: PRODUCTS
    }
);

export const ProductProvider = () => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = { products };
    useEffect(() => { }
        , []);
    return (
        <ProductsContext.Provider value={value}></ProductsContext.Provider>
    )
}