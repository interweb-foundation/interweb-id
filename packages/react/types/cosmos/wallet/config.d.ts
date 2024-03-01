import { PlacementWithLogical } from '@chakra-ui/react';
import { LogoStatus, WalletMode } from '../../types';
export declare const ConnectWalletButtonConfig: {
    NotExist: {
        leftIcon: import("react-icons/lib").IconType;
        text: string;
    };
    Connected: {
        leftIcon: import("react-icons/lib").IconType;
        text: string;
    };
    Connecting: {
        leftIcon: any;
        text: string;
    };
    Rejected: {
        leftIcon: import("react-icons/lib").IconType;
        text: string;
    };
    Error: {
        leftIcon: import("react-icons/lib").IconType;
        text: string;
    };
};
export declare const WalletIcons: {
    keplr: string;
    metamask: string;
};
export declare const WalletData: {
    name: string;
    prettyName: string;
    logo: string;
    mode: WalletMode;
    mobileDisabled: boolean;
    rejectMessage: string;
    downloads: {
        desktop: {
            browser: string;
            icon: import("react-icons/lib").IconType;
            link: string;
        }[];
        tablet: {
            os: string;
            icon: import("react-icons/lib").IconType;
            link: string;
        }[];
        mobile: {
            os: string;
            icon: import("react-icons/lib").IconType;
            link: string;
        }[];
        default: string;
    };
}[];
export declare const DisplayModalHead: {
    withInfo: {
        leftIcon: import("react-icons/lib").IconType;
        rightIcon: import("react-icons/lib").IconType;
        header: string;
        content: string;
        placement: PlacementWithLogical;
    };
    default: {
        leftIcon: import("react-icons/lib").IconType;
        rightIcon: import("react-icons/lib").IconType;
    };
    connected: {
        leftIcon: any;
        rightIcon: import("react-icons/lib").IconType;
    };
};
export declare const DisplayModalContent: {
    NotExist: {
        logoStatus: LogoStatus;
        header: string;
        desc: string;
    };
    Connecting: {
        logoStatus: LogoStatus;
        header: string;
        desc: string;
    };
    Rejected: {
        logoStatus: LogoStatus;
        header: string;
        desc: string;
    };
    Error: {
        logoStatus: LogoStatus;
        header: string;
        desc: string;
    };
};
