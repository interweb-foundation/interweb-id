import { ReactNode } from "react";
import { IconType } from "react-icons";
import { OptionBase } from "chakra-react-select";
import { ColorMode } from "@chakra-ui/react";
export interface WalletConnectedType {
    connectedWallet: boolean;
    connectLoading: boolean;
    chainId: string | null;
    userName: string | null;
    addressBox: {
        showAddress: boolean;
        address: string;
    } | null;
}
export interface DefaultLinkItemProps {
    name: string;
    icon?: IconType;
    href: string;
}
export interface MainLayoutPropsType {
    children: ReactNode | null;
    logo: ReactNode | null;
    connectButton: ReactNode | null;
    selectChainDropdown: ReactNode | null;
    walletCard: ReactNode | null;
    linkItems: ReactNode | DefaultLinkItemProps[];
}
export interface FloatingLayoutPropsType extends MainLayoutPropsType {
    bgImg: ReactNode | null;
}
export interface MenuPropsType extends MainLayoutPropsType {
    colorMode: ColorMode;
    toggleColorMode: () => void;
}
export interface FloatingMenuPropsType extends FloatingLayoutPropsType {
    colorMode: ColorMode;
    toggleColorMode: () => void;
}
export interface ConnectedShowAddressType {
    username: string | null;
    address: string | null;
    copyButtonLoading: boolean;
}
export interface ConnectWalletType {
    buttonText?: string;
    isLoading?: boolean;
    icon?: IconType;
    onClickConnectBtn: () => void;
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
    name: string;
    imgSrc: string;
    apr: string;
    address: string;
    website: string;
    explorer: string;
    stakeLink: string;
    voteLink: string;
}
export interface TotalType {
    totalBalance: string;
    totalClaimableRewards: string;
    claimLink: string;
}
export interface AssetsHeaderType {
    assetsHeader: string[];
}
export interface AssetsDataType {
    name: string;
    imgSrc: string;
    address: string;
    availableDollarValue: string;
    availableAmount: string;
    stakedDollarValue: string;
    stakedAmount: string;
    rewardsDollarValue: string;
    rewardsAmount: string;
    apr: string;
    website: string;
    explorer: string;
    stakeLink: string;
    voteLink: string;
}
export interface ViewAllChainsType {
    viewAllChains: number;
    setViewAllChains: (value: number) => void;
}
export interface DataType extends OptionBase {
    isLoading?: boolean;
    isDisabled?: boolean;
    label: string | null;
    value: string | null;
    imgSrc: string | null;
    chainId: string | null;
}
export interface ChangeChainDropdownType {
    data: DataType[];
    selectedItem: DataType | null;
    handleSelectChainDropdown?: (value: DataType) => void;
    chainDropdownLoading: boolean;
}
export interface ChangeChainMenuType {
    data: DataType[];
    onClose: () => void;
    handleSelectChainDropdown?: (value: DataType) => void;
}
