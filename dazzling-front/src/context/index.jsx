import React from "react";
import BasketProvider from "./BasketContext";
import WishlistProvider from "./WishlistContext";
import SearchProvider from "./SearchContext";

function MainProvider({ children }) {
    return (
        <WishlistProvider>
            <BasketProvider>
                <SearchProvider>
                    {children}
                </SearchProvider>
            </BasketProvider>
        </WishlistProvider>
    );
}

export default MainProvider;