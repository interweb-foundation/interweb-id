import { ReactNode } from "react";
import { ConnectedUserCardType } from "../../types";
export declare const SimpleAvatarWithName: ({ walletIcon, username, icon, }: ConnectedUserCardType) => JSX.Element;
export declare const ConnectWalletCard: ({ userInfo, addressBtn, connectWalletButton, }: {
    userInfo: ReactNode;
    addressBtn: ReactNode;
    connectWalletButton: ReactNode;
}) => JSX.Element;
