import { createContext, ReactNode, useState } from "react";
import { RootStore, createRootStore } from './Root';

export const storeContext = createContext<RootStore | null>(null);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
    const [stores] = useState(() => createRootStore());
    return (
        <storeContext.Provider value={stores}>
            {children}
        </storeContext.Provider>
    );
}

export * from './Root';
export * from './Video';