import { createContext } from "react";

export const HomePageContext = createContext();

export const HomePageProvider = ({children, value}) => {
    <HomePageContext.Provider value={value}>
        {children}
    </HomePageContext.Provider>
};