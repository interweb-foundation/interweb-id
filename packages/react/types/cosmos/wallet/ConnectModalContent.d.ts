import { ConnectModalContentType, DisplayWalletListType, DownloadWalletButtonType } from '../../types';
export declare const DisplayContent: ({ size, status, logo, contentHeader, contentDesc, addressButton, bottomButton }: ConnectModalContentType) => JSX.Element;
export declare const InstallWalletButton: ({ size, icon, text }: DownloadWalletButtonType) => JSX.Element;
export declare const QRCode: ({ link, text }: {
    link: string;
    text?: string;
}) => JSX.Element;
export declare const DisplayWalletList: ({ walletsData, size, handleClick }: DisplayWalletListType) => JSX.Element;
