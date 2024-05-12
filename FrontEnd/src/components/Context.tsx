import React, { createContext, useState } from 'react';

// Create context with initial value of null
export const BikeDetailsContext = createContext<initial[]>();

interface initial {
    title: string;
    activeurl: string;
    price: string;
    activecolor: string;
    colors: string[];
    urls: string[];
}

export function Context({ children }) {
    // Initialize state variable
    const [bikeDetails, setBikeDetails] = useState<initial>();

    // Pass the state variable and any functions to update it as the value prop of the context provider
    return (
        <BikeDetailsContext.Provider value={{ bikeDetails, setBikeDetails }}>
            {children}
        </BikeDetailsContext.Provider>
    );
}


