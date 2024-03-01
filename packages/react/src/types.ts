import {
  GridItemProps,
  PlacementWithLogical,
  UseRadioProps
} from '@chakra-ui/react';
import { OptionBase } from 'chakra-react-select';
import React, {
  ChangeEventHandler,
  MouseEventHandler,
  ReactNode,
  RefObject
} from 'react';
import { IconType } from 'react-icons';

/* ================================== */
/*            default type            */
/* ================================== */
export enum WalletStatus {
  Connecting = 'Connecting',
  Connected = 'Connected',
  NotExist = 'NotExist',
  Rejected = 'Rejected',
  Error = 'Error'
}
export enum Size {
  lg = 'lg',
  md = 'md',
  sm = 'sm'
}
export type IconTypeProps = string | IconType | JSX.Element | ReactNode | any; // eslint-disable-line
export type DefaultLinkItemType = {
  text: string;
  icon?: IconTypeProps;
  size?: string;
};
export type DefaultCardType = {
  title: string;
  children: ReactNode;
};
export type DefaultIconButtonType = {
  label: string;
  showTooltip?: boolean;
  icon: IconTypeProps;
};

/* ================================== */
/*             layout type            */
/* ================================== */
export type MainLayoutPropsType = {
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
export type CategoryComponentType = {
  label: string;
  href: string;
};
export type CategoryLinkType = {
  category: string;
  components?: CategoryComponentType[];
};
export type DisplayAccordionType = {
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
export type SimpleLayoutType = {
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
/* ================================== */
/*             wallet type            */
/* ================================== */
export type CopyAddressType = {
  address?: string;
  walletIcon?: string;
  isLoading?: boolean;
  maxDisplayLength?: number;
  isRound?: boolean;
  size?: string;
};
export type ConnectedShowAddressType = {
  username?: string;
  showLink?: boolean;
  isLoading?: boolean;
  address?: string;
};
export type ConnectedUserCardType = {
  walletIcon?: string;
  username?: string;
  icon?: ReactNode;
};
export type ConnectWalletType = {
  size?: string;
  buttonText?: string;
  variant?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  leftIcon?: IconTypeProps;
  rightIcon?: IconTypeProps;
  onClickConnectBtn?: MouseEventHandler<HTMLButtonElement>;
};
export type ShowBalanceAssetsDetailsType = {
  name: string;
  imgSrc: string;
  ibc?: object;
  tag?: string;
  amount: string;
  value: string;
  depositLink: string;
  withdrawLink: string;
};
export type ShowBalanceAssetsTotalType = {
  total: string;
  availableAsset: string;
  bondedAssets: string;
  stakedAssets: string;
};
export enum LogoStatus {
  Loading = 'loading',
  Warning = 'warning',
  Error = 'error'
}
export type UserDeviceInfoType = {
  browser?: string;
  device: string;
  os?: string;
};
export type DownloadInfo = {
  browser?: string;
  os?: string;
  icon?: IconType;
  link: string;
};
export type Downloads = {
  desktop: DownloadInfo[];
  tablet: DownloadInfo[];
  mobile: DownloadInfo[];
  default: string;
};
export enum WalletMode {
  Extension = 'extension',
  WalletConnect = 'wallet-connect'
}
export type Wallet = {
  name: string;
  prettyName?: string;
  logo?: string | IconType;
  mode: WalletMode;
  mobileDisabled: boolean;
  rejectMessage?: string;
  downloads?: Downloads;
};
export type DisplayWalletListType = {
  initialFocus: RefObject<any>; // eslint-disable-line
  size?: string;
  walletsData: Wallet[];
  handleClick: (select: Wallet) => void;
};
export type DisplayModalControlButtonType = {
  size?: string;
  icon: IconTypeProps;
  handleClick?: () => void;
};
export type ButtonWithTipType = {
  size?: string;
  icon: IconType;
  header?: string;
  content?: string;
  placement?: PlacementWithLogical;
};
export type ConnectModalContentHeader = {
  size?: string;
  title: string;
  leftButton?: ReactNode;
  rightButton?: ReactNode;
};
export type ConnectModalContentType = {
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
export type DownloadWalletButtonType = {
  icon?: IconType;
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
};
export type SimpleModalHeadType = {
  title: string;
  backButton: boolean;
  handleBack: () => void;
  handleClose: () => void;
};
export type ConnectModalType = {
  initialRef: RefObject<any>; // eslint-disable-line
  modalHead: ReactNode;
  modalContent: ReactNode;
  modalIsOpen: boolean;
  modalOnClose: () => void;
};

/* ================================== */
/*            staking type            */
/* ================================== */
export type DisplayChainsType = {
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
export type TotalDataType = {
  title: string;
  content: string;
  claimLink?: ReactNode;
};
export type AssetsHeaderType = {
  title: string;
  chakraGridItemStyle?: GridItemProps;
};
export type Currency = {
  header?: string;
  fiatValue: string;
  appValue: string;
};
export type AssetsDataType = {
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

/* ================================== */
/*             chains type            */
/* ================================== */
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

export type handleSelectChainDropdown = (value: DataType | null) => void;

export type ChangeChainDropdownType = {
  data: DataType[];
  selectedItem?: DataType;
  onChange: handleSelectChainDropdown;
  chainDropdownLoading?: boolean;
  size?: string;
};

export type ChangeChainMenuType = {
  size?: string;
  data: DataType[];
  value: DataType;
  onClose?: () => void;
  onChange: handleSelectChainDropdown;
  innerRef?: RefObject<HTMLInputElement>;
};

/* ================================== */
/*             market type            */
/* ================================== */
export type Avatar = {
  author: string;
  uploadTime?: string;
};
export type LearnCarsType = {
  title: string;
  subTitle?: string;
  description?: string;
  videoURL?: string;
  tags?: string[];
  displayAvatar?: boolean;
  avatar?: Avatar;
};
export type LogoCloudType = {
  headline: string;
  description?: string;
  brands?: string[] | ReactNode[];
};

/* ================================== */
/*               iframe               */
/* ================================== */
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
  [x: string]: any; // eslint-disable-line
}
export interface SnippetBlockType {
  codeTheme: any; // eslint-disable-line
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
export type CodeBlockType = {
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
