import React, { createContext, useState, ReactNode } from 'react';

export interface BikeDetailsContextType {
    bikeDetails: initial;
    setBikeDetails: React.Dispatch<React.SetStateAction<initial>>;
}



export const BikeDetailsContext = createContext<BikeDetailsContextType>({
    bikeDetails: {
        title: '',
        activeurl: '',
        price: '',
        activecolor: '',
        colors: [],
        urls: []
    },
    setBikeDetails: () => {}
});

interface initial {
    title: string;
    activeurl: string;
    price: string;
    activecolor: string;
    colors: string[];
    urls: string[];
}

interface Props {
    children: ReactNode;
}

export function Context({ children }: Props): JSX.Element {
    const [bikeDetails, setBikeDetails] = useState<initial>({
        title: '',
        activeurl: '',
        price: '',
        activecolor: '',
        colors: [],
        urls: []
    });

    return (
        <BikeDetailsContext.Provider value={{ bikeDetails, setBikeDetails }}>
            {children}
        </BikeDetailsContext.Provider>
    );
}
