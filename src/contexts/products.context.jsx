import { createContext, useEffect, useState } from 'react';

import { addCollectionAndDocuments, getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.ts';

// import SHOP_DATA from '../shop-data.ts';

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

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            
        })();



    }, []);

    const value = { products };
    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    );
};

