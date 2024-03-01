import React, { useCallback, useState } from 'react';
import {
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  IconButton,
  Stack,
  InputGroup,
  Input,
  InputRightElement,
  Slider,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

interface IProps {
  mode: 'encrypt' | 'decrypt';
  isOpen: boolean;
  onClose: () => void;
  onOk: (length: number, salt: string) => void;
}

export default function SaltModal(props: IProps) {
  const { mode, isOpen, onClose, onOk } = props;

  const [sliderValue, setSliderValue] = useState(64);

  const [show, setShow] = useState(false);
  const [input, setInput] = useState('');
  const [isInvalid, setInvalid] = useState(false);
  const [invalidMsg, setInvalidMsg] = useState('');

  const reset = useCallback(() => {
    setShow(false);
    setInput('');
    setInvalid(false);
  }, []);

  const handleInput = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    const input = evt.target.value;
    setInput(input);
    if (input) {
      setInvalid(false);
    }
  }, []);

  const handleOk = useCallback(() => {
    if (!input) {
      setInvalid(true);
      setInvalidMsg('salt is required');
    } else if (input.length < 8) {
      setInvalid(true);
      setInvalidMsg('salt need to be at least 8 characters');
    } else {
      onOk(sliderValue, input);
    }
  }, [sliderValue, input, onOk]);

  return (
    <Modal
      size='xl'
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onClose}
      onCloseComplete={reset}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader pb={2}>{mode.charAt(0).toUpperCase() + mode.substring(1)}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {mode === 'encrypt' && (
            <Text mb={4} fontSize='sm' color='gray.500'>
              To encrypt the mnemonic phrase, a secret salt will be generated under the hood.
            </Text>
          )}
          <Flex direction='column' gap={8}>
            {mode === 'encrypt' && (
              <Stack spacing={6}>
                <Box>
                  <Text fontSize='lg' fontWeight='bold'>salt length: </Text>
                  <Text mb={3} fontSize='sm' color='gray.500'>
                    the amount of random bytes to be used to generate the secret salt
                  </Text>
                </Box>
                <Box px={4}>
                  <Slider value={sliderValue} min={8} max={128} step={8} onChange={(val) => setSliderValue(val)}>
                    <SliderMark
                      value={8}
                      {...{
                        'mt': '2',
                        'ml': '-1.5',
                        'fontSize': 'sm',
                      }}
                    >
                      8
                    </SliderMark>
                    <SliderMark
                      value={128}
                      {...{
                        'mt': '2',
                        'ml': '-2.5',
                        'fontSize': 'sm',
                      }}
                    >
                      128
                    </SliderMark>
                    <SliderMark
                      value={sliderValue}
                      textAlign='center'
                      bg='blue.500'
                      color='white'
                      mt='-10'
                      ml='-6'
                      w='12'
                    >
                      {sliderValue}
                    </SliderMark>
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>
                </Box>
              </Stack>
            )}
            <Stack spacing={2}>
              <Box>
                <Text fontSize='lg' fontWeight='bold'>manual salt: </Text>
                {mode === 'encrypt' && (
                  <Text mb={1} fontSize='sm' color='gray.500'>
                    the salt to be used to encrypt the secret salt
                  </Text>
                )}
              </Box>
              <InputGroup size='md'>
                <Input
                  type={show ? 'text' : 'password'}
                  value={input}
                  onChange={handleInput}
                  isInvalid={isInvalid}
                  placeholder='input the manual salt here'
                  autoComplete='new-password'
                />
                <InputRightElement>
                  <IconButton
                    size='xs'
                    aria-label='show input'
                    icon={show ? <ViewIcon /> : <ViewOffIcon />}
                    onClick={() => setShow(v => (!v))}
                  />
                </InputRightElement>
              </InputGroup>
              {
                isInvalid && <Text fontSize='xs' color='red' p={1}>{invalidMsg}</Text>
              }
            </Stack>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Flex gap={2}>
            <Button variant='ghost' onClick={onClose}>Cancel</Button>
            <Button colorScheme='blue' mr={3} onClick={handleOk}>Ok</Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}