import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  ListItem,
  List,
} from "@chakra-ui/react";

const FooterAccordion = () => {
  return (
    <>
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text className="footer-accordion">SHOP</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <List spacing={2}>
              <Box>
                <ListItem>T-Shirt</ListItem>
                <ListItem>One Set</ListItem>
                <ListItem>Celana</ListItem>
                <ListItem>Dress</ListItem>
              </Box>
            </List>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text className="footer-accordion">HELP</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <List spacing={2}>
              <Box>
                <ListItem>FAQ</ListItem>
                <ListItem>Jastip</ListItem>
                <ListItem>Customer Service</ListItem>
                <ListItem>Return Policy</ListItem>
              </Box>
            </List>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text className="footer-accordion">CONTACT US</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <List spacing={2}>
              <Box>
                <ListItem>+62 851-7331-6112 ( Whatsapp )</ListItem>
                <ListItem>Email</ListItem>
              </Box>
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default FooterAccordion;
