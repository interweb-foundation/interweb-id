import { PlacementWithLogical } from '@chakra-ui/react';
import { FaAndroid } from 'react-icons/fa';
import { FiArrowLeft, FiX } from 'react-icons/fi';
import { GrFirefox } from 'react-icons/gr';
import {
  RiAppStoreFill,
  RiChromeFill,
  RiDoorOpenFill,
  RiDownload2Line,
  RiErrorWarningLine
} from 'react-icons/ri';
import { TbRefreshAlert } from 'react-icons/tb';

import { LogoStatus, WalletMode } from '../../types';

export const ConnectWalletButtonConfig = {
  NotExist: {
    leftIcon: RiDownload2Line,
    text: 'Install'
  },
  Connected: {
    leftIcon: RiDoorOpenFill,
    text: 'Disconnect'
  },
  Connecting: {
    leftIcon: undefined,
    text: 'Connecting...'
  },
  Rejected: {
    leftIcon: TbRefreshAlert,
    text: 'Reconnect'
  },
  Error: {
    leftIcon: RiErrorWarningLine,
    text: 'Change Wallet'
  }
};

export const WalletIcons = {
  keplr:
    'https://user-images.githubusercontent.com/545047/202085372-579be3f3-36e0-4e0b-b02f-48182af6e577.svg',
  metamask:
    'https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg'
};

export const WalletData = [
  {
    name: 'Keplr',
    prettyName: 'Keplr',
    logo: 'https://user-images.githubusercontent.com/545047/202085372-579be3f3-36e0-4e0b-b02f-48182af6e577.svg',
    mode: WalletMode.Extension,
    mobileDisabled: false,
    rejectMessage: 'Request Rejected!',
    downloads: {
      desktop: [
        {
          browser: 'chrome',
          icon: RiChromeFill,
          link: 'https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap?hl=en'
        },
        {
          browser: 'firefox',
          icon: GrFirefox,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      tablet: [
        {
          os: 'android',
          icon: FaAndroid,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        },
        {
          os: 'ios',
          icon: RiAppStoreFill,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      mobile: [
        {
          os: 'android',
          icon: FaAndroid,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        },
        {
          os: 'ios',
          icon: RiAppStoreFill,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      default: 'https://www.keplr.app/download'
    }
  },
  {
    name: 'cosmostation',
    prettyName: 'Cosmostation',
    logo: 'https://user-images.githubusercontent.com/74940804/202999324-fa2faf40-5ead-4896-b865-e97f052fc6f9.png',
    mode: WalletMode.WalletConnect,
    mobileDisabled: false,
    rejectMessage: 'Request Rejected!',
    downloads: {
      desktop: [
        {
          browser: 'chrome',
          icon: RiChromeFill,
          link: 'https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap?hl=en'
        },
        {
          browser: 'firefox',
          icon: GrFirefox,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      tablet: [
        {
          os: 'android',
          icon: FaAndroid,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        },
        {
          os: 'ios',
          icon: RiAppStoreFill,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      mobile: [
        {
          os: 'android',
          icon: FaAndroid,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        },
        {
          os: 'ios',
          icon: RiAppStoreFill,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      default: 'https://www.keplr.app/download'
    }
  },
  {
    name: 'WalletConnectKeplr',
    prettyName: 'Keplr Mobile',
    logo: 'https://user-images.githubusercontent.com/545047/191616515-eee176d0-9e50-4325-9529-6c0019d5c71a.png',
    mode: WalletMode.WalletConnect,
    mobileDisabled: false,
    rejectMessage: 'Request Rejected!',
    downloads: {
      desktop: [
        {
          browser: 'chrome',
          icon: RiChromeFill,
          link: 'https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap?hl=en'
        },
        {
          browser: 'firefox',
          icon: GrFirefox,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      tablet: [
        {
          os: 'android',
          icon: FaAndroid,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        },
        {
          os: 'ios',
          icon: RiAppStoreFill,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      mobile: [
        {
          os: 'android',
          icon: FaAndroid,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        },
        {
          os: 'ios',
          icon: RiAppStoreFill,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      default: 'https://www.keplr.app/download'
    }
  },
  {
    name: 'meme',
    prettyName: 'meme',
    logo: 'https://i.imgflip.com/jl9b3.jpg',
    mode: WalletMode.WalletConnect,
    mobileDisabled: false,
    downloads: {
      desktop: [
        {
          browser: 'chrome',
          icon: RiChromeFill,
          link: 'https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap?hl=en'
        },
        {
          browser: 'firefox',
          icon: GrFirefox,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      tablet: [
        {
          os: 'android',
          icon: FaAndroid,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        },
        {
          os: 'ios',
          icon: RiAppStoreFill,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      mobile: [
        {
          os: 'android',
          icon: FaAndroid,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        },
        {
          os: 'ios',
          icon: RiAppStoreFill,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      default: 'https://www.keplr.app/download'
    }
  },
  {
    name: 'luctus',
    prettyName: 'lesson meow',
    logo: 'https://i.imgflip.com/7n3b1.jpg',
    mode: WalletMode.WalletConnect,
    mobileDisabled: false,
    downloads: {
      desktop: [
        {
          browser: 'chrome',
          icon: RiChromeFill,
          link: 'https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap?hl=en'
        },
        {
          browser: 'firefox',
          icon: GrFirefox,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      tablet: [
        {
          os: 'android',
          icon: FaAndroid,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        },
        {
          os: 'ios',
          icon: RiAppStoreFill,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      mobile: [
        {
          os: 'android',
          icon: FaAndroid,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        },
        {
          os: 'ios',
          icon: RiAppStoreFill,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      default: 'https://www.keplr.app/download'
    }
  },
  {
    name: 'sed',
    prettyName: 'hacker doge',
    logo: 'https://i.imgflip.com/imqvc.jpg',
    mode: WalletMode.WalletConnect,
    mobileDisabled: false,
    downloads: {
      desktop: [
        {
          browser: 'chrome',
          icon: RiChromeFill,
          link: 'https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap?hl=en'
        },
        {
          browser: 'firefox',
          icon: GrFirefox,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      tablet: [
        {
          os: 'android',
          icon: FaAndroid,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        },
        {
          os: 'ios',
          icon: RiAppStoreFill,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      mobile: [
        {
          os: 'android',
          icon: FaAndroid,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        },
        {
          os: 'ios',
          icon: RiAppStoreFill,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      default: 'https://www.keplr.app/download'
    }
  },
  {
    name: 'ante',
    prettyName: 'shocked',
    logo: 'https://i.imgflip.com/d5wxs.jpg',
    mode: WalletMode.WalletConnect,
    mobileDisabled: false,
    downloads: {
      desktop: [
        {
          browser: 'chrome',
          icon: RiChromeFill,
          link: 'https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap?hl=en'
        },
        {
          browser: 'firefox',
          icon: GrFirefox,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      tablet: [
        {
          os: 'android',
          icon: FaAndroid,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        },
        {
          os: 'ios',
          icon: RiAppStoreFill,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      mobile: [
        {
          os: 'android',
          icon: FaAndroid,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        },
        {
          os: 'ios',
          icon: RiAppStoreFill,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      default: 'https://www.keplr.app/download'
    }
  },
  {
    name: 'maurisk',
    prettyName: 'doge',
    logo: 'https://i.imgflip.com/chr5k.jpg',
    mode: WalletMode.WalletConnect,
    mobileDisabled: false,
    downloads: {
      desktop: [
        {
          browser: 'chrome',
          icon: RiChromeFill,
          link: 'https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap?hl=en'
        },
        {
          browser: 'firefox',
          icon: GrFirefox,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      tablet: [
        {
          os: 'android',
          icon: FaAndroid,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        },
        {
          os: 'ios',
          icon: RiAppStoreFill,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      mobile: [
        {
          os: 'android',
          icon: FaAndroid,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        },
        {
          os: 'ios',
          icon: RiAppStoreFill,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      default: 'https://www.keplr.app/download'
    }
  },
  {
    name: 'aenean',
    prettyName: 'selfie',
    logo: 'https://i.imgflip.com/heoii.jpg',
    mode: WalletMode.WalletConnect,
    mobileDisabled: false,
    downloads: {
      desktop: [
        {
          browser: 'chrome',
          icon: RiChromeFill,
          link: 'https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap?hl=en'
        },
        {
          browser: 'firefox',
          icon: GrFirefox,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      tablet: [
        {
          os: 'android',
          icon: FaAndroid,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        },
        {
          os: 'ios',
          icon: RiAppStoreFill,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      mobile: [
        {
          os: 'android',
          icon: FaAndroid,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        },
        {
          os: 'ios',
          icon: RiAppStoreFill,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      default: 'https://www.keplr.app/download'
    }
  },
  {
    name: 'at',
    prettyName: 'smirking',
    logo: 'https://i.imgflip.com/n1zui.jpg',
    mode: WalletMode.WalletConnect,
    mobileDisabled: false,
    downloads: {
      desktop: [
        {
          browser: 'chrome',
          icon: RiChromeFill,
          link: 'https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap?hl=en'
        },
        {
          browser: 'firefox',
          icon: GrFirefox,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      tablet: [
        {
          os: 'android',
          icon: FaAndroid,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        },
        {
          os: 'ios',
          icon: RiAppStoreFill,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      mobile: [
        {
          os: 'android',
          icon: FaAndroid,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        },
        {
          os: 'ios',
          icon: RiAppStoreFill,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      default: 'https://www.keplr.app/download'
    }
  },
  {
    name: 'proin',
    prettyName: 'O RLY',
    logo: 'https://i.imgflip.com/1s0t4e.jpg',
    mode: WalletMode.WalletConnect,
    mobileDisabled: false,
    downloads: {
      desktop: [
        {
          browser: 'chrome',
          icon: RiChromeFill,
          link: 'https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap?hl=en'
        },
        {
          browser: 'firefox',
          icon: GrFirefox,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      tablet: [
        {
          os: 'android',
          icon: FaAndroid,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        },
        {
          os: 'ios',
          icon: RiAppStoreFill,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      mobile: [
        {
          os: 'android',
          icon: FaAndroid,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        },
        {
          os: 'ios',
          icon: RiAppStoreFill,
          link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/'
        }
      ],
      default: 'https://www.keplr.app/download'
    }
  }
];

export const DisplayModalHead = {
  // ↓ for connect modal
  withInfo: {
    leftIcon: RiErrorWarningLine,
    rightIcon: FiX,
    header: 'What is wallet?',
    content:
      'Wallet is a gateway to the Cosmos interchain world. By connecting your wallet to Cosmos, you have more accessibility to smart invest.',
    placement: 'bottom' as PlacementWithLogical
  },
  default: {
    leftIcon: FiArrowLeft,
    rightIcon: FiX
  },
  connected: {
    leftIcon: undefined,
    rightIcon: FiX
  }
};

export const DisplayModalContent = {
  NotExist: {
    logoStatus: LogoStatus.Warning,
    header: 'Does Not Exist',
    desc: 'Please install'
  },
  Connecting: {
    logoStatus: LogoStatus.Loading,
    header: 'Requesting Connection',
    desc: 'Open the browser extension or app to connect your wallet.'
  },
  Rejected: {
    logoStatus: LogoStatus.Error,
    header: 'Wallet Rejected',
    desc: 'Connection authorization is denied.'
  },
  Error: {
    logoStatus: LogoStatus.Error,
    header: 'Oops! something wrong...',
    desc: 'Sed tincidunt metus et placerat volutpat. Sed porttitor lacinia orci, sed ultricies libero pharetra a. Quisque volutpat, mauris vitae eleifend scelerisque, odio est bibendum diam, et iaculis lectus ante non ex. Sed scelerisque iaculis laoreet. Aliquam vitae augue non neque tincidunt feugiat nec ut diam. Vestibulum pulvinar eros ac suscipit facilisis. Cras sit amet enim placerat, efficitur odio a, ullamcorper sem. Nam tempor consequat sapien. Suspendisse dapibus mattis nisl, quis faucibus lectus fermentum ac. Vestibulum nec vehicula ex. Integer feugiat aliquam diam vel aliquam. Curabitur nec turpis velit. Phasellus purus erat, accumsan et feugiat sed, lobortis ac magna.'
  }
};
