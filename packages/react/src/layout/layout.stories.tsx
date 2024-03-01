import {
  Box,
  Button,
  Center,
  Divider,
  extendTheme,
  Flex,
  Grid,
  Icon,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { assets, chains } from 'chain-registry';
import NextLink from 'next/link';
import React, { ChangeEvent, ReactNode, useEffect, useState } from 'react';
import { shadesOfPurple } from 'react-code-blocks';
import { FiThumbsUp } from 'react-icons/fi';
import {
  MdOutlineSentimentNeutral,
  MdOutlineSentimentSatisfied,
  MdOutlineSentimentVerySatisfied
} from 'react-icons/md';
import { RiDoorOpenFill, RiStarSmileLine } from 'react-icons/ri';

import { ChangeChainDropdown } from '../cosmos/chains/ChangeChainDropdown';
import { ChangeChainDropdownWithButton } from '../cosmos/chains/ChangeChainDropdownWithButton';
import { ConnectedUserCard } from '../cosmos/wallet/ConnectedUserCard';
import { ConnectWalletButton } from '../cosmos/wallet/ConnectWalletButton';
import { CopyAddressButton } from '../cosmos/wallet/CopyAddressButton';
import { DefaultIcon, DefaultLink, MenuLinkButton } from '../default-component';
import exampleCode from '../snippets/example-code';
import { SnippetBlock } from '../snippets/snippets';
import { Astronaut, Logo, LogoBrandName } from '../svg-icons';
import { LogoCloud, SimpleBrand } from '../template/market/LogoCloud';
import { defaultThemeObject } from '../theme';
import { DataType } from '../types';
import { FloatingLayout } from './FloatingLayout';
import { MainLayout } from './MainLayout';
import { SimpleLayout } from './SimpleLayout';

const chainInfo = chains
  .filter(({ status }) => status === 'live')
  .map(({ pretty_name, chain_name, chain_id, apis }) => ({
    label: pretty_name,
    value: chain_id,
    chainName: chain_name,
    address: (
      chain_name + Buffer.from(apis.rest[0].address, 'utf-8').toString('base64')
    ).slice(0, 32)
  }));
const chainList = chainInfo.map((chains) => ({
  label: chains.label,
  value: chains.value,
  chainName: chains.chainName,
  icon: assets
    .filter(({ chain_name }) => chains.chainName === chain_name)[0]
    ?.assets.filter(({ name }) => name === chains.label)[0]?.logo_URIs,
  address: chains.address
}));
const FakeContent = () => {
  const flexBox = useBreakpointValue({ base: false, lg: true });
  return (
    <Stack spacing={8} p={{ base: 4, lg: 6 }}>
      <Stack isInline={flexBox} spacing={8}>
        <Box
          flex={1}
          border="1px solid"
          borderColor="gray.500"
          borderRadius="md"
        >
          <Text fontSize="lg" fontWeight="bold" p={4}>
            Title
          </Text>
          <Divider />
          <Text p={4}>
            Content <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            et impedit sapiente, eos error in quidem at pariatur rem, debitis
            sint dolores dolor ut? Tempore repudiandae dolorum hic labore dolore
            vitae perferendis ut quis, non expedita, recusandae iste, fuga
            praesentium repellendus repellat adipisci nobis necessitatibus quod
            veritatis nemo modi possimus!
          </Text>
        </Box>
        <Box
          flex={1}
          border="1px solid"
          borderColor="gray.500"
          borderRadius="md"
        >
          <Text fontSize="lg" fontWeight="bold" p={4}>
            Title
          </Text>
          <Divider />
          <Text p={4}>
            Content <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            et impedit sapiente, eos error in quidem at pariatur rem, debitis
            sint dolores dolor ut? Tempore repudiandae dolorum hic labore dolore
            vitae perferendis ut quis, non expedita, recusandae iste, fuga
            praesentium repellendus repellat adipisci nobis necessitatibus quod
            veritatis nemo modi possimus!
          </Text>
        </Box>
      </Stack>
      <Stack isInline={flexBox} spacing={8}>
        <Box
          flex={1}
          border="1px solid"
          borderColor="gray.500"
          borderRadius="md"
        >
          <Text fontSize="lg" fontWeight="bold" p={4}>
            Title
          </Text>
          <Divider />
          <Text p={4}>
            Content <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            et impedit sapiente, eos error in quidem at pariatur rem, debitis
            sint dolores dolor ut? Tempore repudiandae dolorum hic labore dolore
            vitae perferendis ut quis, non expedita, recusandae iste, fuga
            praesentium repellendus repellat adipisci nobis necessitatibus quod
            veritatis nemo modi possimus!
          </Text>
        </Box>
        <Box
          flex={1}
          border="1px solid"
          borderColor="gray.500"
          borderRadius="md"
        >
          <Text fontSize="lg" fontWeight="bold" p={4}>
            Title
          </Text>
          <Divider />
          <Text p={4}>
            Content <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            et impedit sapiente, eos error in quidem at pariatur rem, debitis
            sint dolores dolor ut? Tempore repudiandae dolorum hic labore dolore
            vitae perferendis ut quis, non expedita, recusandae iste, fuga
            praesentium repellendus repellat adipisci nobis necessitatibus quod
            veritatis nemo modi possimus!
          </Text>
        </Box>
      </Stack>
      <Box flex={1} border="1px solid" borderColor="gray.500" borderRadius="md">
        <Text fontSize="lg" fontWeight="bold" p={4}>
          Title
        </Text>
        <Divider />
        <Text p={4}>
          Content <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          et impedit sapiente, eos error in quidem at pariatur rem, debitis sint
          dolores dolor ut? Tempore repudiandae dolorum hic labore dolore vitae
          perferendis ut quis, non expedita, recusandae iste, fuga praesentium
          repellendus repellat adipisci nobis necessitatibus quod veritatis nemo
          modi possimus!
        </Text>
      </Box>
      <Box flex={1} border="1px solid" borderColor="gray.500" borderRadius="md">
        <Text fontSize="lg" fontWeight="bold" p={4}>
          Title
        </Text>
        <Divider />
        <Text p={4}>
          Content <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          et impedit sapiente, eos error in quidem at pariatur rem, debitis sint
          dolores dolor ut? Tempore repudiandae dolorum hic labore dolore vitae
          perferendis ut quis, non expedita, recusandae iste, fuga praesentium
          repellendus repellat adipisci nobis necessitatibus quod veritatis nemo
          modi possimus!
        </Text>
      </Box>
    </Stack>
  );
};
function onClickConnectBtn() {
  console.log("do something"); // eslint-disable-line
}

storiesOf('Examples/Layouts', module).add('SimpleLayout', () => {
  function handleSelectChainDropdown(value: DataType | null) {
    console.log("do something here"); // eslint-disable-line
    setSelectedItem(value);
  }

  const controlSizes = {
    large: 'lg',
    medium: 'md',
    small: 'sm'
  };
  const walletIcons = {
    keplr:
      'https://pbs.twimg.com/profile_images/1498228570862219266/uctq7aeh_400x400.png',
    metamask:
      'https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg'
  };
  const selectWalletOption = {
    Keplr: 'keplr',
    MetaMask: 'metamask'
  };
  const walletIcon = select(
    'wallet image',
    selectWalletOption,
    selectWalletOption.Keplr
  );
  const size = select('controls size', controlSizes, controlSizes.medium);
  const connectWallet = boolean('connect wallet', false);
  const mobileMenuIsFullWidth = boolean('mobile menu full width', false);

  const logo = (
    <Icon as={Logo} w={{ base: 10, lg: 20 }} h={{ base: 10, lg: 20 }} />
  );
  const [data, setData] = useState<DataType[]>([]);
  const [selectedItem, setSelectedItem] = useState<DataType | null>(null);
  const dropdown = (
    <ChangeChainDropdown
      size={size}
      data={data}
      onChange={handleSelectChainDropdown}
    />
  );
  // 👇 can add custom link(button)
  // const customLink = (label: string, link: string) => (
  //   <NextLink href={link} passHref={true}>
  //     <Button as="a" w="full" colorScheme="white" display="flex" minH={16}>
  //       {label}
  //     </Button>
  //   </NextLink>
  // );
  const linkItems = [
    {
      label: 'Dashboard',
      href: '#',
      icon: <Icon as={RiStarSmileLine} />
    },
    {
      label: 'Create Cosmos App',
      href: 'https://github.com/cosmology-tech/create-cosmos-app',
      icon: <Icon as={RiStarSmileLine} />
    },
    {
      label: 'Cosmos Kit',
      href: 'https://github.com/cosmology-tech/cosmos-kit',
      icon: <Icon as={RiStarSmileLine} />
    },
    {
      label: 'OsmoJS',
      href: 'https://github.com/osmosis-labs/osmojs',
      icon: <Icon as={RiStarSmileLine} />
    },
    {
      label: 'Telescope',
      href: 'https://github.com/osmosis-labs/telescope',
      icon: <Icon as={RiStarSmileLine} />
    },
    {
      label: 'TS Codegen',
      href: 'https://github.com/CosmWasm/ts-codegen',
      icon: <Icon as={RiStarSmileLine} />
    },
    {
      label: 'Cosmology',
      href: 'https://github.com/cosmology-tech/cosmology',
      icon: <Icon as={RiStarSmileLine} />
    },
    {
      label: 'Chain Registry',
      href: 'https://github.com/cosmology-tech/chain-registry',
      icon: <Icon as={RiStarSmileLine} />
    }
    // {
    //   label: "link a",
    //   href: "#",
    // },
    // {
    //   label: "link b",
    //   href: "#",
    // },
    // {
    //   label: "link c",
    //   href: "#",
    // },
    // {
    //   label: "link d",
    //   href: "#",
    // },
    // {
    //   label: "link e",
    //   href: "#",
    // },
    // {
    //   label: "link f",
    //   href: "#",
    // },
    // {
    //   label: "link g",
    //   href: "#",
    // },
    // {
    //   label: "link h",
    //   href: "#",
    // },
    // {
    //   label: "link i",
    //   href: "#",
    // },
    // {
    //   label: "link j",
    //   href: "#",
    // },
    // {
    //   label: "link k",
    //   href: "#",
    // },
    // {
    //   label: "link l",
    //   href: "#",
    // },
    // {
    //   label: "link m",
    //   href: "#",
    // },
  ];
  const [connectButton, setConnectButton] = useState<ReactNode | undefined>();
  const [copyAddressButton, setCopyAddressButton] = useState<
    ReactNode | undefined
  >();

  useEffect(() => {
    setData([
      {
        label: 'disabled option',
        value: '',
        icon: undefined,
        chainName: '',
        isDisabled: true
      },
      ...chainList
    ]);
  }, []);
  useEffect(() => {
    if (!connectWallet) {
      setConnectButton(
        <ConnectWalletButton
          size={size}
          variant="primary"
          onClickConnectBtn={onClickConnectBtn}
        />
      );
    }
    if (connectWallet) {
      setConnectButton(
        <ConnectWalletButton
          size={size}
          buttonText="Disconnect"
          leftIcon={<RiDoorOpenFill />}
          onClickConnectBtn={onClickConnectBtn}
        />
      );
    }
  }, [connectWallet, size]);
  useEffect(() => {
    if (!connectWallet) {
      setSelectedItem(undefined);
      setCopyAddressButton(undefined);
    }
    if (connectWallet) {
      if (!selectedItem) setCopyAddressButton(undefined);
      if (selectedItem)
        setCopyAddressButton(
          <CopyAddressButton
            size={size}
            address={selectedItem.address}
            walletIcon={walletIcons[walletIcon]}
            maxDisplayLength={10}
          />
        );
    }
  }, [selectedItem, connectWallet, walletIcon, walletIcons, size]);

  return (
    <SimpleLayout
      size={size}
      logo={logo}
      connectButton={connectButton}
      links={linkItems}
      // customLink={customLink}
      chainDropdown={dropdown}
      copyAddressButton={copyAddressButton}
      isFullWidth={mobileMenuIsFullWidth}
    >
      <FakeContent />
    </SimpleLayout>
  );
});

storiesOf('Examples/Layouts', module).add('MainLayout', () => {
  const connectWallet = boolean('connect wallet', false);
  const dropdownDefault = ['dropdown', 'dropdownWithButton'];
  const dropdown = select('background', dropdownDefault, dropdownDefault[0]);

  function handleSelectChainDropdown(value: DataType | null) {
    console.log("do something here"); // eslint-disable-line
    setSelectedItem(value);
  }

  const [connectButton, setConnectButton] = useState(
    <ConnectWalletButton onClickConnectBtn={onClickConnectBtn} />
  );
  const [connectedUserCard, setConnectedUserCard] = useState(
    <ConnectedUserCard username="" />
  );
  const [data, setData] = useState<DataType[]>([]);
  const [selectedItem, setSelectedItem] = useState<DataType | null>(null);
  const linkItems = [
    {
      name: 'Dashboard',
      href: 'https://storybook.cosmology.finance/',
      icon: <DefaultIcon icon={''} />
    },
    {
      name: 'All Staking',
      href: 'http://localhost:11001/?path=/story/cosmology-staking--assetlist',
      icon: <DefaultIcon icon="https://imgflip.com/s/meme/Smiling-Cat.jpg" />
    },
    {
      name: 'All Governance',
      href: 'https://storybook.cosmology.finance/',
      icon: <DefaultIcon icon={<Icon as={FiThumbsUp} />} />
    },
    {
      name: 'link a',
      href: '#'
    },
    {
      name: 'link b',
      href: '#'
    },
    {
      name: 'link c',
      href: '#'
    },
    {
      name: 'link d',
      href: '#'
    }
  ];
  const [linkList, setLinkList] = useState<ReactNode | null>(null);
  const [selectChainDropdown, setSelectChainDropdown] =
    useState<ReactNode | null>(null);
  const [copyAddressButton, setCopyAddressButton] = useState(null);
  const logo = useBreakpointValue({
    base: (
      <Stack justify="center" alignItems="center" maxW={10} maxH={10}>
        <Icon as={Logo} w="full" h="full" />
      </Stack>
    ),
    lg: (
      <Stack isInline={true} px={6}>
        <Box maxW={10} maxH={10}>
          <Icon as={Logo} w="full" h="full" />
        </Box>
        <Flex justify="center" alignItems="center" maxW={36}>
          <Icon as={LogoBrandName} w="full" h="full" />
        </Flex>
      </Stack>
    )
  });

  useEffect(() => {
    setData([
      {
        label: 'disabled option',
        value: '',
        icon: undefined,
        chainName: '',
        isDisabled: true
      },
      ...chainList
    ]);
    setLinkList(
      <Stack spacing={2}>
        {linkItems.map(({ name, icon, href }) => {
          return (
            <NextLink href={href} passHref={true} key={name}>
              <DefaultLink>
                <MenuLinkButton text={name} icon={icon} />
              </DefaultLink>
            </NextLink>
          );
        })}
        <DefaultLink href="#chakra">
          <Button
            size="lg"
            w="full"
            variant="ghost"
            justifyContent="start"
            px={3}
            _focus={{ outline: 'none' }}
          >
            <Stack isInline={true} spacing={2} alignItems="center">
              <DefaultIcon icon={'https://imgflip.com/s/meme/Doge.jpg'} />
              <Text>chakra link</Text>
            </Stack>
          </Button>
        </DefaultLink>
        <a href="#a">
          <Button
            size="lg"
            w="full"
            variant="ghost"
            justifyContent="start"
            px={3}
            _focus={{ outline: 'none' }}
          >
            <Stack isInline={true} spacing={2} alignItems="center">
              <DefaultIcon icon={'https://i.imgflip.com/c11ks.jpg'} />
              <Text>a link</Text>
            </Stack>
          </Button>
        </a>
      </Stack>
    );
  }, [linkItems]);

  useEffect(() => {
    setConnectButton(
      <ConnectWalletButton
        isLoading={true}
        onClickConnectBtn={onClickConnectBtn}
      />
    );
    if (connectWallet) {
      setConnectedUserCard(
        <ConnectedUserCard username="Lonnie Python" icon={<Astronaut />} />
      );
      setTimeout(
        () =>
          setConnectButton(
            <ConnectWalletButton
              buttonText="Disconnect"
              isLoading={false}
              onClickConnectBtn={onClickConnectBtn}
            />
          ),
        500
      );
    }
    if (!connectWallet) {
      setConnectedUserCard(undefined);
      setConnectButton(
        <ConnectWalletButton
          isLoading={false}
          onClickConnectBtn={onClickConnectBtn}
        />
      );
    }
  }, [connectWallet]);

  useEffect(() => {
    if (dropdown === 'dropdown')
      setSelectChainDropdown(
        <Box w={72}>
          <ChangeChainDropdown
            data={data}
            onChange={handleSelectChainDropdown}
          />
        </Box>
      );
    if (dropdown === 'dropdownWithButton')
      setSelectChainDropdown(
        <Box w={72}>
          <ChangeChainDropdownWithButton
            data={data}
            selectedItem={selectedItem}
            chainDropdownLoading={false}
            onChange={handleSelectChainDropdown}
          />
        </Box>
      );
  }, [data, selectedItem, dropdown]);

  useEffect(() => {
    if (!connectWallet) {
      setCopyAddressButton(undefined);
      setSelectedItem(undefined);
    }
    if (connectWallet) {
      if (selectedItem)
        setCopyAddressButton(
          <Box w="full" maxW={{ lg: 56 }}>
            <CopyAddressButton address={selectedItem.address} />
          </Box>
        );
      if (!selectedItem) setCopyAddressButton(undefined);
    }
  }, [selectedItem, connectWallet]);

  return (
    <MainLayout
      logo={logo}
      linkList={linkList}
      connectButton={connectButton}
      selectChainDropdown={selectChainDropdown}
      copyAddressButton={copyAddressButton}
      connectedUserCard={connectedUserCard}
    >
      <FakeContent />
    </MainLayout>
  );
});

storiesOf('Examples/Layouts', module).add('FloatingLayout', () => {
  const displayNavbar = boolean('display navbar', true);
  const brands = [
    'https://cdn.pixabay.com/photo/2015/04/13/17/45/icon-720944_960_720.png',
    'https://cdn.pixabay.com/photo/2013/01/29/22/06/facebook-76658_960_720.png',
    'https://cdn.pixabay.com/photo/2016/05/08/14/53/camera-1379223_960_720.jpg',
    <SimpleBrand name="create-cosmos-app" icon={MdOutlineSentimentSatisfied} />,
    <SimpleBrand name="cosmos-kit" icon={MdOutlineSentimentVerySatisfied} />,
    <SimpleBrand name="osmojs" icon={MdOutlineSentimentNeutral} />
  ];
  const links = [
    {
      category: 'wallet',
      components: [
        {
          label: 'simple copy address button',
          href: 'http://localhost:11001/iframe.html?id=cosmology-wallet--simplecopyaddressbutton&viewMode=story'
        },
        {
          label: 'connect wallet show address',
          href: 'http://localhost:11001/iframe.html?id=cosmology-wallet--connectedshowaddress&viewMode=story'
        },
        {
          label: 'connect wallet button',
          href: 'http://localhost:11001/iframe.html?id=cosmology-wallet--connectwalletbutton&viewMode=story'
        },
        {
          label: 'show balance',
          href: 'http://localhost:11001/iframe.html?id=cosmology-wallet--showbalance&viewMode=story'
        },
        {
          label: 'connect modal',
          href: 'http://localhost:11001/iframe.html?id=cosmology-wallet--connectmodal&viewMode=story'
        },
        {
          label: 'connect wallet card',
          href: 'http://localhost:11001/iframe.html?id=cosmology-wallet--connectwalletcard&viewMode=story'
        },
        {
          label: 'connected user card',
          href: 'http://localhost:11001/iframe.html?id=cosmology-wallet--connectedusercard&viewMode=story'
        },
        {
          label: 'warn card',
          href: 'http://localhost:11001/iframe.html?id=cosmology-wallet--warncard&viewMode=story'
        }
      ]
    },
    {
      category: 'chains',
      components: [
        {
          label: 'change chain dropdown',
          href: 'http://localhost:11001/iframe.html?id=cosmology-chains--changechaindropdown&viewMode=story'
        },
        {
          label: 'change chain dropdown with button',
          href: 'http://localhost:11001/iframe.html?id=cosmology-chains--changechaindropdownwithbutton&viewMode=story'
        }
      ]
    }
  ];
  const config = {
    ...defaultThemeObject,
    initialColorMode: 'light',
    useSystemColorMode: false
  };
  const theme = extendTheme({ ...config });
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("filter menu", e.target.value); // eslint-disable-line
  };

  // 👇 can add custom link(button)
  // const customLink = (label: string, link: string) => (
  //   <NextLink href={link} passHref={true}>
  //     <a>{label}</a>
  //   </NextLink>
  // );

  return (
    <Grid
      templateRows={displayNavbar ? 'auto 1fr' : '1fr'}
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
    >
      {displayNavbar && (
        <Stack bg={useColorModeValue('white', 'gray.800')} px={4} pt={2}>
          <Center w={10} h={10} ml={4}>
            <Logo />
          </Center>
          <Divider />
        </Stack>
      )}
      <FloatingLayout
        handleInputChange={handleInputChange}
        links={links}
        // customLink={customLink}
      >
        <Stack spacing={4}>
          <SnippetBlock
            theme={theme}
            codeTheme={shadesOfPurple}
            code={exampleCode}
            componentName="Logo Cloud"
            language="ts"
          >
            <Box p={8}>
              <LogoCloud
                headline="These and other companies trust us"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore"
                brands={brands}
              />
            </Box>
          </SnippetBlock>
          <SnippetBlock
            theme={theme}
            codeTheme={shadesOfPurple}
            code={exampleCode}
            componentName="Logo Cloud"
            language="ts"
          >
            <Box p={8}>
              <LogoCloud
                headline="These and other companies trust us"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore"
                brands={brands}
              />
            </Box>
          </SnippetBlock>
        </Stack>
      </FloatingLayout>
    </Grid>
  );
});
