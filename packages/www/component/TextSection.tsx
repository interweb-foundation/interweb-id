import React, { useCallback, useEffect, useState } from 'react';
import { Text, Flex, Stack, Tooltip, IconButton, Textarea, useToast } from '@chakra-ui/react';

import ClearIcon from './icon/ClearIcon';
import CopyIcon from './icon/CopyIcon';
import PasteIcon from './icon/PasteIcon';
import ViewIcon from './icon/ViewIcon';
import ViewOffIcon from './icon/ViewOffIcon';

interface IProps {
  label?: string;
  rows?: number;
  mode?: 'private' | 'public';
  value?: string;
  icons?: string[];
  onChange?: (content: string) => void;
}

const defaultRows = 3;

export default function TextSection(props: IProps) {
  const { label, rows, mode, value, icons, onChange } = props;

  const toast = useToast();
  const [content, setContent] = useState('');
  const [show, setShow] = useState(false);

  const handleChange = useCallback((content: string) => {
    onChange?.(content);
  }, [onChange]);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(content);
    toast({
      position: 'top',
      status: 'success',
      title: `${label} is copied to clipboard`,
    });
  }, [label, toast, content]);

  const handlePaste = useCallback(async () => {
    const text = await navigator.clipboard.readText();
    handleChange(text);
  }, [handleChange]);

  useEffect(() => {
    if (mode === 'public') {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [mode]);

  useEffect(() => {
    setContent(value || '');
  }, [value]);

  return (
    <Stack spacing={2}>
      <Flex justifyContent='space-between' alignItems='center'>
        <Flex direction='column' justify='center' h={4}>
          <Text>{label ? `${label}: ` : ''}</Text>
          {!show && (
            <Text mb={1} fontSize='sm' color='gray.500'>
              not editable under hidden mode
            </Text>
          )}
        </Flex>
        <Stack direction='row'>
          {icons?.includes('clear') && (
            <Tooltip label='clear' placement='top'>
              <IconButton aria-label='clear' icon={<ClearIcon />} size='sm' onClick={() => handleChange('')} />
            </Tooltip>
          )}
          {icons?.includes('shown') && !mode && (
            show ? (
              <Tooltip label='shown' placement='top'>
                <IconButton aria-label='shown' icon={<ViewIcon />} size='sm' onClick={() => setShow(false)} />
              </Tooltip>
            ) : (
              <Tooltip label='hidden' placement='top'>
                <IconButton aria-label='hidden' icon={<ViewOffIcon />} size='sm' onClick={() => setShow(true)} />
              </Tooltip>
            )
          )}
          {icons?.includes('copy') && (
            <Tooltip label='copy' placement='top'>
              <IconButton aria-label='copy' icon={<CopyIcon />} size='sm' onClick={handleCopy} />
            </Tooltip>
          )}
          {icons?.includes('paste') && (
            <Tooltip label='paste' placement='top'>
              <IconButton aria-label='paste' icon={<PasteIcon />} size='sm' onClick={handlePaste} />
            </Tooltip>
          )}
        </Stack>
      </Flex>
      <Textarea
        size='sm'
        resize='vertical'
        rows={rows || defaultRows}
        value={!show ? content.replace(/./g, '*') : content}
        isDisabled={!show}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange(e.target.value)}
      />
    </Stack>
  );
}