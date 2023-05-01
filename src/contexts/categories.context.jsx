import { createContext, useEffect, useState } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.ts';

// import SHOP_DATA from '../shop-data.ts';

// interface IProductContextValue {
//     products: {
//         id: number;
//         name: string;
//         imageUrl: string;
//         price: number;
//     }
// }

export const CategoriesContext = createContext(
    {
        categoriesMap: {},
    }
);
export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        };
        getCategoriesMap();
    }, []);

    const value = { categoriesMap };
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    );
};

