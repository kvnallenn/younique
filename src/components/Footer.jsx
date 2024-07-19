import {
  Box,
  Container,
  HStack,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";
import FooterAccordion from "./FooterAccordion";

const Footer = () => {
  return (
    <>
      <Container maxW="xxl">
        <HStack className="footer-content">
          <Box>
            <List spacing={2}>
              <Box marginBottom={5}>
                <Text className="footer-title">SHOP</Text>
              </Box>
              <Box>
                <ListItem>T-Shirt</ListItem>
                <ListItem>One Set</ListItem>
                <ListItem>Celana</ListItem>
                <ListItem>Dress</ListItem>
              </Box>
            </List>
          </Box>
          <Box>
            <List spacing={2}>
              <Box marginBottom={5}>
                <Text className="footer-title">HELP</Text>
              </Box>
              <Box>
                <ListItem>FAQ</ListItem>
                <ListItem>Jastip</ListItem>
                <ListItem>Customer Service</ListItem>
                <ListItem>Return Policy</ListItem>
              </Box>
            </List>
          </Box>
          <Box>
            <List spacing={2}>
              <Box marginBottom={5}>
                <Text className="footer-title">CONTACT US</Text>
              </Box>
              <Box>
                <ListItem>+62 851-7331-6112 ( Whatsapp )</ListItem>
                <ListItem>Email</ListItem>
              </Box>
            </List>
          </Box>
        </HStack>
        <FooterAccordion/>
        <Container className="footer-copyright" centerContent>
          <Box>
            <SocialIcon
              network="instagram"
              bgColor="#e4e4e4"
              fgColor="#222222"
            ></SocialIcon>
            <SocialIcon
              network="whatsapp"
              bgColor="#e4e4e4"
              fgColor="#222222"
            ></SocialIcon>
          </Box>
          <Text
            fontFamily={"Secular One"}
            fontSize={32}
            color={"black"}
            ml={15}
          >
            YOUNIQUE.LY
          </Text>
          <Text className="footer-des">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            culpa ipsum accusamus odit? Pariatur hic, ad dignissimos excepturi
            repellendus perferendis ipsam soluta. Officiis aspernatur eaque
            nostrum inventore voluptatibus dolorem obcaecati!
          </Text>
          <br></br>
          <Text className="copyright-des">
            Copyright © Younique.ly
          </Text>
        </Container>
      </Container>
    </>
  );
};

export default Footer;
