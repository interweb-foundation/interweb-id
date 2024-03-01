/* eslint-disable */
import { Box, Button, useClipboard } from "@chakra-ui/react";
import React, { useState } from "react";
import { CodeBlock } from "react-code-blocks";
import { MdOutlineSentimentVerySatisfied as Copy } from "react-icons/md";

import { CopyBlockProps } from "../types";

const Snippet = (props) => {
  return (
    <Box
      position="relative"
      borderRadius="lg"
      padding={props.codeBlock ? `0.25rem 0.5rem 0.25rem 0.25rem` : "md"}
    >
      {props.children}
    </Box>
  );
};

export const CopyBlock = ({
  theme,
  code,
  codeBlock = false,
  customStyle = {},
  onCopy,
  ...rest
}: CopyBlockProps) => {
  const [copied, toggleCopy] = useState(false);

  const { hasCopied, onCopy: onClipboardCopy } = useClipboard(code);
  const handler = () => {
    onClipboardCopy();
    onCopy?.();
    toggleCopy(!copied);
  };

  return (
    <>
      <Button type="button" onClick={handler} {...{ theme, copied }}>
        <Copy />
        {hasCopied ? "Copied 👌" : "Copy"}
      </Button>

      <Snippet {...{ codeBlock }} style={customStyle} theme={theme}>
        {codeBlock ? (
          // @ts-ignore
          <CodeBlock text={code} theme={theme} {...rest} />
        ) : (
          // @ts-ignore
          <Code text={code} theme={theme} {...rest} />
        )}
      </Snippet>
    </>
  );
};
