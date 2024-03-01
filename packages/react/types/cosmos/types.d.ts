import { ReactNode, MouseEventHandler, RefObject } from "react";
import { IconType } from "react-icons";
import { OptionBase } from "chakra-react-select";
import { ColorMode, GridItemProps } from "@chakra-ui/react";
export declare type IconTypeProps = string | IconType | JSX.Element | ReactNode | any;
export interface DefaultLinkItemType {
    text: string;
    icon?: IconTypeProps;
}
export interface DefaultCardType {
    title: string;
    children: ReactNode;
}
export interface DefaultIconButtonType {
    label: string;
    showTooltip?: boolean;
    icon: IconTypeProps;
}
export interface MainLayoutPropsType {
    children: ReactNode | null;
    logo?: ReactNode;
    connectButton: ReactNode;
    selectChainDropdown: ReactNode | null;
    copyAddressButton?: ReactNode;
    connectedUserCard?: ReactNode;
    linkList: ReactNode;
}
export interface FloatingLayoutPropsType extends MainLayoutPropsType {
    bgImg: ReactNode | null;
}
export interface MenuPropsType extends MainLayoutPropsType {
    toggleColorMode: () => void;
}
export interface FloatingMenuPropsType extends FloatingLayoutPropsType {
    colorMode: ColorMode;
    toggleColorMode: () => void;
}
export interface ConnectedShowAddressType {
    address?: string;
}
export interface ConnectedUserCardType {
    userName: string;
    icon?: ReactNode;
}
export interface ConnectWalletType {
    buttonText?: string;
    isLoading?: boolean;
    isDisabled?: boolean;
    icon?: IconType;
    onClickConnectBtn?: MouseEventHandler<HTMLButtonElement>;
}
export interface ShowBalanceAssetsDetailsType {
    name: string;
    imgSrc: string;
    ibc?: object;
    tag?: string;
    amount: string;
    value: string;
    depositLink: string;
    withdrawLink: string;
}
export interface ShowBalanceAssetsTotalType {
    total: string;
    availableAsset: string;
    bondedAssets: string;
    stakedAssets: string;
}
export interface WalletType {
    wallet: {
        id: string;
        logo: string;
        title: string;
        describe: string;
        website: string;
    }[];
    openModel: boolean | undefined;
    setOpenModel: (value: boolean) => void;
}
export interface DisplayChainsType {
    chainName: string;
    imgSrc?: string;
    apr: string;
    address?: string;
    website: ReactNode;
    explorer: ReactNode;
    stakeLink: ReactNode;
    voteLink: ReactNode;
    dashboardLink: ReactNode;
}
export interface DefaultLinkType extends DefaultLinkItemType {
    href?: string;
}
export interface TotalDataType {
    title: string;
    content: string;
    claimLink?: ReactNode;
}
export interface AssetsHeaderType {
    title: string;
    chakraGridItemStyle?: GridItemProps;
}
export interface Currency {
    header?: string;
    fiatValue: string;
    appValue: string;
}
export interface AssetsDataType {
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
}
export interface DataType extends OptionBase {
    isDisabled?: boolean;
    label: string;
    value: string;
    icon?: string;
    chainId: string;
    chainRoute?: string;
}
export declare type handleSelectChainDropdown = (value: DataType | null) => void;
export interface ChangeChainDropdownType {
    data: DataType[];
    selectedItem?: DataType;
    onChange: handleSelectChainDropdown;
    chainDropdownLoading?: boolean;
}
export interface ChangeChainMenuType {
    data: DataType[];
    value: DataType;
    onClose?: () => void;
    onChange: handleSelectChainDropdown;
    innerRef?: RefObject<HTMLInputElement>;
}
