import { Tooltip } from '@chakra-ui/react';
import { QuestionOutlineIcon } from '@chakra-ui/icons';

interface IProps {
  content?: string;
}

export default function InfoIcon(props: IProps) {
  const { content = '' } = props;
  return (
    <Tooltip
      isDisabled={!content}
      label={content}
      fontSize='md'
      fontWeight='normal'
      placement='bottom'
      hasArrow
      bg='gray.100'
      color='gray.600'
      mt='8px'
    >
      <QuestionOutlineIcon boxSize='0.75em' mb='2px' />
    </Tooltip>
  );
}