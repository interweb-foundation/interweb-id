import React from "react";
import { storeContext } from "./stores";

export const useStore = () => {
    const store = React.useContext(storeContext);
    if (!store) {
        throw new Error("You have forgot to use StoreProvider");
    }
    return store;
};