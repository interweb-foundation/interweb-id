import React from 'react';
import { ConnectedUserCardType } from '../../types';
export declare const SimpleAvatarWithName: ({ walletIcon, username, icon }: ConnectedUserCardType) => JSX.Element;
export declare const ConnectWalletCard: ({ userInfo, addressBtn, connectWalletButton }: {
    userInfo?: React.ReactNode;
    addressBtn?: React.ReactNode;
    connectWalletButton?: React.ReactNode;
}) => JSX.Element;
