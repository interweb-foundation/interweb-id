import React, { useCallback, useState } from 'react';
import { Box, Flex, Text, Radio, RadioGroup, Stack, Divider, useDisclosure, useToast, Switch, Button } from '@chakra-ui/react';
import { randomBytes } from 'crypto';
import { crypt, decrypt } from '@cosmology/core';
import { Secp256k1HdWallet } from '@cosmjs/amino';

import PlainButton from '../../component/PlainButton';
import TextSection from '../../component/TextSection';
import PhrasePreview from './PhrasePreview';
import SaltModal from './SaltModal';
import InternetWarningModal from '../warning';
import { WarningTwoIcon } from '@chakra-ui/icons';
import { H2, P } from '../basics';

type SaltMode = 'encrypt' | 'decrypt';

type PhraseLength = 12 | 24;

export const MnemonicComponent = () => {
  const { isOpen: saltIsOpen, onOpen: saltOnOpen, onClose: saltOnClose } = useDisclosure();
  const { isOpen: warningIsOpen, onOpen: warningOnOpen, onClose: warningOnClose } = useDisclosure();

  const toast = useToast();

  const [isPrivateMode, setPrivateMode] = useState(true);
  const [phraseLength, setPhraseLength] = useState('12');

  const [phraseInput, setPhraseInput] = useState('');
  const [saltMode, setSaltMode] = useState<SaltMode>('encrypt');

  const [encryptedSalt, setEncryptedSalt] = useState('');
  const [encryptedWallet, setEncryptedWallet] = useState('');

  const handleGenerateWallet = useCallback(async () => {
    try {
      const length: PhraseLength = parseInt(phraseLength, 10) as PhraseLength;
      const wallet = await Secp256k1HdWallet.generate(length);
      setPhraseInput(wallet.mnemonic);
    } catch ({ message }) {
      toast({
        position: 'top',
        status: 'error',
        title: `${message}`,
      })
    }
  }, [toast, phraseLength]);

  const handleOpenSaltModal = useCallback((mode: SaltMode) => {
    toast.closeAll();
    setSaltMode(mode);
    saltOnOpen();
  }, [toast, saltOnOpen]);

  const handleOpenSaltModalForEncrypt = useCallback(() => {
    if (phraseInput) {
      handleOpenSaltModal('encrypt');
    }
  }, [phraseInput, handleOpenSaltModal]);

  const handleOpenSaltModalForDecrypt = useCallback(() => {
    if (encryptedSalt && encryptedWallet) {
      handleOpenSaltModal('decrypt');
    }
  }, [encryptedSalt, encryptedWallet, handleOpenSaltModal]);

  const handleEncrypt = useCallback((length: number, salt: string) => {
    if (phraseInput) {
      const realSalt = randomBytes(length).toString('base64')
      const encryptedSalt = crypt(salt, realSalt);
      setEncryptedSalt(encryptedSalt);
      const encryptedWallet = crypt(realSalt, phraseInput);
      setEncryptedWallet(encryptedWallet);
    }
  }, [phraseInput]);

  const handleDecrypt = useCallback((salt: string) => {
    if (encryptedSalt && encryptedWallet) {
      try {
        const phrase = decrypt(decrypt(salt, encryptedSalt), encryptedWallet);
        if (!phrase) {
          throw new Error('u probably have the wrong salt')
        }
        setPhraseInput(phrase);
      } catch ({ message }) {
        toast({
          position: 'top',
          status: 'error',
          title: `${message}`,
        })
      }
    }
  }, [toast, encryptedSalt, encryptedWallet]);

  const handleOk = useCallback((length: number, salt: string) => {
    if (saltMode === 'encrypt') {
      handleEncrypt(length, salt);
    } else if (saltMode === 'decrypt') {
      handleDecrypt(salt);
    }
    saltOnClose();
  }, [saltMode, handleEncrypt, handleDecrypt, saltOnClose]);

  return (
    <Flex direction='column'>
      <Box p={5} fontSize='24px' fontWeight='bold'>
        Mnemonic Phrase Generation and Encrypt
        <Box p={5} fontSize='14px'>
          <p>1. disconnect internet</p>
          <p>2. click "generate". Optionally toggle "Private Mode" to change visibility</p>
          <p>3. click "encrypt"</p>
          <p>4. we recommend 64 for "salt length"</p>
          <p>5. use a strong, "manual salt" password that you'll remember, this is for the encryption/decryption</p>
          <p>6. safely store your "Encrypted Salt" and "Encrypted Wallet", ideally in different places</p>
        </Box>
      </Box>
      <Box p={5} fontSize='24px' fontWeight='bold'>
        Mnemonic Phrase Decrypt
        <Box p={5} fontSize='14px'>
          <p>1. disconnect internet</p>
          <p>2. enter your "Encrypted Salt" and "Encrypted Wallet"</p>
          <p>3. type in your "manual salt"</p>
          <p>4. voila! You have your mnemonic</p>
        </Box>
      </Box>
      <br />
      <Button
        leftIcon={<WarningTwoIcon color='red.500' boxSize='1.25em' />}
        onClick={warningOnOpen}
      >
        Strongly Recommended to Disconnect the Internet
      </Button>

      <br />
      <Flex flex={1} p={5} pt={0} gap={5}>
        <Flex direction='column' gap={5} w='40%' border='1px solid #eee' borderRadius='md' p={5}>
          <Flex direction='column'>
            <Flex align='center' justify='flex-end' gap={2}>
              <Text>Private Mode</Text>
              <Switch size='sm' isChecked={isPrivateMode} onChange={(e) => setPrivateMode(e.target.checked)} />
            </Flex>
            <Text>Generate Mnemonic Wallet:</Text>
            <Flex justify='space-between' align='center'>
              <RadioGroup onChange={setPhraseLength} value={phraseLength}>
                <Stack direction='row'>
                  <Radio value='12'>12 words</Radio>
                  <Radio value='24'>24 words</Radio>
                </Stack>
              </RadioGroup>
              <Box w={20}>
                <PlainButton size='sm' label='Generate' onClick={handleGenerateWallet} />
              </Box>
            </Flex>
          </Flex>
          <Divider />
          <TextSection
            label='Mnemonic Phrase'
            mode={isPrivateMode ? 'private' : 'public'}
            value={phraseInput}
            icons={['clear', 'copy', 'paste']}
            onChange={setPhraseInput}
          />
          <PhrasePreview
            mode={isPrivateMode ? 'private' : 'public'}
            phraseStr={phraseInput}
          />
        </Flex>
        <Flex w='10%' direction='column' gap={10} alignItems="center" justifyContent='center'>
          <PlainButton label='Encrypt >>' onClick={handleOpenSaltModalForEncrypt} />
          <PlainButton label='<< Decrypt' onClick={handleOpenSaltModalForDecrypt} />
        </Flex>
        <Flex direction='column' gap={7} w='40%' border='1px solid #eee' borderRadius='md' p={5}>
          <TextSection
            label='Encrypted Salt'
            rows={5}
            value={encryptedSalt}
            icons={['clear', 'shown', 'copy', 'paste']}
            onChange={setEncryptedSalt}
          />
          <TextSection
            label='Encrypted Wallet'
            rows={5}
            value={encryptedWallet}
            icons={['clear', 'shown', 'copy', 'paste']}
            onChange={setEncryptedWallet}
          />
        </Flex>
      </Flex>

      <SaltModal mode={saltMode} isOpen={saltIsOpen} onClose={saltOnClose} onOk={handleOk} />
      <InternetWarningModal isOpen={warningIsOpen} onClose={warningOnClose} />
    </Flex >
  )
}