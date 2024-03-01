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
} from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';

interface IProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function InternetWarningModal(props: IProps) {
    const { isOpen, onClose } = props;

    return (
        <Modal
            isCentered
            size='2xl'
            scrollBehavior='inside'
            blockScrollOnMount={false}
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Flex gap={3} justify='center' align='center'>
                        <WarningTwoIcon color='red.500' boxSize='1.25em' />
                        <Text>Disconnect the Internet</Text>
                    </Flex>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Flex direction='column' gap={3}>
                        <Text fontSize='xl' >
                            To ensure maximum security during the generation, encryption, or decryption of private keys,
                            it is strongly recommended to turn off the internet connection.
                        </Text>
                        <Text fontSize='xl' >
                            By disconnecting from the internet,
                            you minimize the risk of potential online threats or malicious actors gaining unauthorized access to your sensitive data.
                        </Text>
                        <Text fontSize='xl' >
                            This offline approach significantly reduces the attack surface and enhances the overall integrity of the encryption process,
                            safeguarding the confidentiality of your private keys.
                        </Text>
                    </Flex>
                </ModalBody>
                <ModalFooter>
                    <Flex gap={2}>
                        <Button variant='ghost' onClick={onClose}>Close</Button>
                    </Flex>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}