import { Box, Flex, OrderedList, ListItem, Input, useToast } from '@chakra-ui/react';

function DisclaimerPage() {
  return (
    <Flex direction='column'>
      <Box p={7} fontSize='6xl' fontWeight='bold' textAlign='center'>
        Disclaimer
      </Box>
      <Flex direction='column' width='75%' mx="auto">
        <Box p={5} fontSize='xl' textAlign='left'>
          Please read this disclaimer carefully before using the software that generates private keys (&quot;the Application&quot;). By using the Application, you acknowledge and agree to the terms stated below.
        </Box>
        <OrderedList p={5}>
          <ListItem p={3}>
            No Liability: No developer or entity involved in creating this Application shall be held liable for any claims or damages whatsoever, including but not limited to direct, indirect, incidental, special, exemplary, punitive, or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value, arising from your use, inability to use, or your interaction with other users of the Application.
          </ListItem>
          <ListItem p={3}>
            Security Risks: The generation of private keys involves inherent security risks. While the developers have taken measures to ensure the security of the Application, there is no guarantee that the generated private keys will be completely secure. It is your responsibility to implement additional security measures and take necessary precautions to protect your private keys and associated assets.
          </ListItem>
          <ListItem p={3}>
            User Responsibility: You acknowledge that the Application is a tool provided for your convenience, and its usage is solely at your own risk. It is your responsibility to ensure the accuracy, validity, and legality of the generated private keys, as well as any actions you take based on them.
          </ListItem>
          <ListItem p={3}>
            No Warranty: The Application is provided &quot;as is&quot;, without any warranty or guarantee, either expressed or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. The developers do not warrant that the Application will meet your requirements or that it will be error-free, uninterrupted, secure, or free of viruses or other harmful components.
          </ListItem>
          <ListItem p={3}>
            Third-Party Integration: The Application may integrate or interact with third-party services, platforms, or applications. The developers are not responsible for the functionality, security, or actions of any third-party services, platforms, or applications you may choose to use in conjunction with the Application.
          </ListItem>
          <ListItem p={3}>
            Compliance with Laws: You agree to use the Application in compliance with all applicable laws, regulations, and guidelines. The developers disclaim any responsibility for any illegal or unauthorized use of the Application by you or other users.
          </ListItem>
          <ListItem p={3}>
            Indemnification: You agree to indemnify and hold harmless the developers, their affiliates, and their respective directors, officers, employees, and agents from any claims, liabilities, damages, losses, or expenses, including attorneys&apos; fees, arising out of or in connection with your use of the Application or any violation of this disclaimer.
          </ListItem>
          <ListItem p={3}>
            Modification and Termination: The developers reserve the right to modify, suspend, or terminate the Application or this disclaimer at any time without prior notice. Your continued use of the Application after any such modifications shall constitute your acceptance of the modified disclaimer.
          </ListItem>
        </OrderedList>
        <Box p={5} fontSize='xl' textAlign='left'>
          By using the Application, you acknowledge that you have read, understood, and agreed to this disclaimer. If you do not agree to any part of this disclaimer, please refrain from using the Application.
        </Box>
      </Flex>
    </Flex>
  )
}

DisclaimerPage.displayName = 'DisclaimerPage';

export default DisclaimerPage;