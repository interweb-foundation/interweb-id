import { Button } from '@chakra-ui/react';

interface IProps {
  label: string;
  size?: string;
  onClick?: () => void;
}

export default function PlainButton(props: IProps) {
  const { label, size, onClick } = props;
  return (
    <Button
      w='100%'
      display='flex'
      px={10}
      justifyContent='center'
      alignItems='center'
      fontSize={size || 'lg'}
      fontWeight='medium'
      onClick={onClick}
    >
      {label}
    </Button>
  )
}