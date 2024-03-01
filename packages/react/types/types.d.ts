import { GridItemProps, PlacementWithLogical, UseRadioProps } from "@chakra-ui/react";
import { OptionBase } from "chakra-react-select";
import React, { ChangeEventHandler, MouseEventHandler, ReactNode, RefObject } from "react";
import { IconType } from "react-icons";
export declare enum WalletStatus {
    Connecting = "Connecting",
    Connected = "Connected",
    NotExist = "NotExist",
    Rejected = "Rejected",
    Error = "Error"
}
export declare enum Size {
    lg = "lg",
    md = "md",
    sm = "sm"
}
export declare type IconTypeProps = string | IconType | JSX.Element | ReactNode | any;
export declare type DefaultLinkItemType = {
    text: string;
    icon?: IconTypeProps;
    size?: string;
};
export declare type DefaultCardType = {
    title: string;
    children: ReactNode;
};
export declare type DefaultIconButtonType = {
    label: string;
    showTooltip?: boolean;
    icon: IconTypeProps;
};
export declare type MainLayoutPropsType = {
    children: ReactNode | null;
    logo?: ReactNode;
    connectButton: ReactNode;
    selectChainDropdown: ReactNode | null;
    copyAddressButton?: ReactNode;
    connectedUserCard?: ReactNode;
    linkList: ReactNode;
};
export interface MenuPropsType extends MainLayoutPropsType {
    toggleColorMode: () => void;
}
export declare type CategoryComponentType = {
    label: string;
    href: string;
};
export declare type CategoryLinkType = {
    category: string;
    components?: CategoryComponentType[];
};
export declare type DisplayAccordionType = {
    links: CategoryLinkType[];
    customLink?: ReactNode;
    windowScroll?: boolean;
    handleInputChange: ChangeEventHandler<HTMLInputElement>;
};
export interface FloatingMenuPropsType extends DisplayAccordionType {
    children: ReactNode;
}
export interface LinkListType extends CategoryComponentType {
    icon?: ReactNode;
}
export declare type SimpleLayoutType = {
    size?: string;
    logo?: React.ReactNode;
    connectButton?: React.ReactNode;
    links?: LinkListType[];
    customLink?: ReactNode;
    chainDropdown?: ReactNode;
    copyAddressButton?: ReactNode;
    isFullWidth?: boolean;
    children: React.ReactNode;
};
export interface SimpleLayoutMenuType extends SimpleLayoutType {
    toggleColorMode: () => void;
}
export declare type CopyAddressType = {
    address?: string;
    walletIcon?: string;
    isLoading?: boolean;
    maxDisplayLength?: number;
    isRound?: boolean;
    size?: string;
};
export declare type ConnectedShowAddressType = {
    username?: string;
    showLink?: boolean;
    isLoading?: boolean;
    address?: string;
};
export declare type ConnectedUserCardType = {
    walletIcon?: string;
    username?: string;
    icon?: ReactNode;
};
export declare type ConnectWalletType = {
    size?: string;
    buttonText?: string;
    variant?: string;
    isLoading?: boolean;
    isDisabled?: boolean;
    leftIcon?: IconTypeProps;
    rightIcon?: IconTypeProps;
    onClickConnectBtn?: MouseEventHandler<HTMLButtonElement>;
};
export declare type ShowBalanceAssetsDetailsType = {
    name: string;
    imgSrc: string;
    ibc?: object;
    tag?: string;
    amount: string;
    value: string;
    depositLink: string;
    withdrawLink: string;
};
export declare type ShowBalanceAssetsTotalType = {
    total: string;
    availableAsset: string;
    bondedAssets: string;
    stakedAssets: string;
};
export declare enum LogoStatus {
    Loading = "loading",
    Warning = "warning",
    Error = "error"
}
export declare type UserDeviceInfoType = {
    browser?: string;
    device: string;
    os?: string;
};
export declare type DownloadInfo = {
    browser?: string;
    os?: string;
    icon?: IconType;
    link: string;
};
export declare type Downloads = {
    desktop: DownloadInfo[];
    tablet: DownloadInfo[];
    mobile: DownloadInfo[];
    default: string;
};
export declare enum WalletMode {
    Extension = "extension",
    WalletConnect = "wallet-connect"
}
export declare type Wallet = {
    name: string;
    prettyName?: string;
    logo?: string | IconType;
    mode: WalletMode;
    mobileDisabled: boolean;
    rejectMessage?: string;
    downloads?: Downloads;
};
export declare type DisplayWalletListType = {
    initialFocus: RefObject<any>;
    size?: string;
    walletsData: Wallet[];
    handleClick: (select: Wallet) => void;
};
export declare type DisplayModalControlButtonType = {
    size?: string;
    icon: IconTypeProps;
    handleClick?: () => void;
};
export declare type ButtonWithTipType = {
    size?: string;
    icon: IconType;
    header?: string;
    content?: string;
    placement?: PlacementWithLogical;
};
export declare type ConnectModalContentHeader = {
    size?: string;
    title: string;
    leftButton?: ReactNode;
    rightButton?: ReactNode;
};
export declare type ConnectModalContentType = {
    size?: string;
    logo?: string | IconType;
    status?: LogoStatus;
    username?: string;
    walletIcon?: string;
    contentHeader?: string;
    contentDesc?: string;
    addressButton?: ReactNode;
    bottomButton?: ReactNode;
};
export declare type DownloadWalletButtonType = {
    size?: string;
    icon?: IconType;
    text?: string;
};
export declare type SimpleModalHeadType = {
    title: string;
    backButton: boolean;
    handleBack: () => void;
    handleClose: () => void;
};
export declare type ConnectModalType = {
    initialRef: RefObject<any>;
    modalHead: ReactNode;
    modalContent: ReactNode;
    modalIsOpen: boolean;
    modalOnClose: () => void;
};
export declare type DisplayChainsType = {
    chainName: string;
    imgSrc?: string;
    apr: string;
    address?: string;
    website: ReactNode;
    explorer: ReactNode;
    stakeLink: ReactNode;
    voteLink: ReactNode;
    dashboardLink: ReactNode;
};
export interface DefaultLinkType extends DefaultLinkItemType {
    href?: string;
}
export declare type TotalDataType = {
    title: string;
    content: string;
    claimLink?: ReactNode;
};
export declare type AssetsHeaderType = {
    title: string;
    chakraGridItemStyle?: GridItemProps;
};
export declare type Currency = {
    header?: string;
    fiatValue: string;
    appValue: string;
};
export declare type AssetsDataType = {
    chainName: string;
    imgSrc?: string;
    address: string;
    availableBalance?: Currency;
    stakedBalance?: Currency;
    claimableRewards?: Currency;
    apr: {
        header?: string;
        value: string;
    };
    website: ReactNode;
    explorer: ReactNode;
    stakeLink: ReactNode;
    voteLink: ReactNode;
    dashboardLink: ReactNode;
};
export interface DataType extends OptionBase {
    isDisabled?: boolean;
    label: string;
    value: string;
    icon?: {
        png?: string;
        jpeg?: string;
        svg?: string;
    };
    chainName: string;
    address?: string;
}
export declare type handleSelectChainDropdown = (value: DataType | null) => void;
export declare type ChangeChainDropdownType = {
    data: DataType[];
    selectedItem?: DataType;
    onChange: handleSelectChainDropdown;
    chainDropdownLoading?: boolean;
    size?: string;
};
export declare type ChangeChainMenuType = {
    size?: string;
    data: DataType[];
    value: DataType;
    onClose?: () => void;
    onChange: handleSelectChainDropdown;
    innerRef?: RefObject<HTMLInputElement>;
};
export declare type Avatar = {
    author: string;
    uploadTime?: string;
};
export declare type LearnCarsType = {
    title: string;
    subTitle?: string;
    description?: string;
    videoURL?: string;
    tags?: string[];
    displayAvatar?: boolean;
    avatar?: Avatar;
};
export declare type LogoCloudType = {
    headline: string;
    description?: string;
    brands?: string[] | ReactNode[];
};
export interface CopyBlockProps {
    /** A custom theme to be applied, implements the `CodeBlockTheme` interface. You can also pass pass a precomposed theme into here. For available themes. [See THEMES.md](https://github.com/rajinwonderland/react-code-blocks/blob/master/THEMES.md) */
    theme: object;
    /** The code to be formatted */
    code: string;
    /** If true, the component render a `CodeBlock` instead of a `Code` component */
    codeBlock: boolean;
    /** This is a prop used internally by the `CopyBlock`'s button component to toggle the icon to a success icon */
    copied: boolean;
    /** If true, wrap long lines */
    wrapLongLines: boolean;
    /** The onCopy function is called if the copy icon is clicked. This enables you to add a custom message that the code block is copied. */
    onCopy: () => void;
    /** The language in which the code is written. [See LANGUAGES.md](https://github.com/rajinwonderland/react-code-blocks/blob/master/LANGUAGES.md) */
    language: string;
    customStyle?: object;
    /** I know it's lazy, but I'll extend the interfaces later */
    [x: string]: any;
}
export interface SnippetBlockType {
    codeTheme: any;
    /** A custom theme to be applied, implements the `CodeBlockTheme` interface. You can also pass pass a precomposed theme into here. For available themes. [See THEMES.md](https://github.com/rajinwonderland/react-code-blocks/blob/master/THEMES.md) */
    theme: object;
    /** The code to be formatted */
    code: string;
    /** Default is true, use to wrap long lines */
    wrapLongLines?: boolean;
    /** The language in which the code is written. [See LANGUAGES.md](https://github.com/rajinwonderland/react-code-blocks/blob/master/LANGUAGES.md) */
    language: string;
    children: ReactNode;
    componentName: string;
}
export interface RadioType extends UseRadioProps {
    children: ReactNode;
}
export declare type CodeBlockType = {
    code: string;
    codeTheme?: object;
    language: string;
    wrapLongLines?: boolean;
};
export interface IframeComponentProps {
    width: string;
    theme?: object;
    children?: React.ReactNode;
    animate?: boolean;
    animationSeconds?: number;
}
export interface PreviewProps {
    viewport: string;
    theme: object;
    children: ReactNode;
}
export interface MobileControlButtonProps {
    codeBlock: string;
    setCodeBlock: React.Dispatch<React.SetStateAction<string>>;
    colorModeUpdate: string;
    setColorModeUpdate: React.Dispatch<React.SetStateAction<string>>;
    onFullscreenOpen: () => void;
}
export interface DesktopControlButtonProps {
    codeBlock: string;
    isOpen: boolean;
    colorModeUpdate: string;
    setColorModeUpdate: React.Dispatch<React.SetStateAction<string>>;
    setViewport: React.Dispatch<React.SetStateAction<string>>;
    setCodeBlock: React.Dispatch<React.SetStateAction<string>>;
    onFullscreenOpen: () => void;
}
