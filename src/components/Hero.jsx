import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  HStack,
  Image,
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <>
      <Container>
        <Center>
          <HStack>
            <Box position="relative" display="inline-block">
              <Image src="../img/53567251.png" />
              <Button
                position="absolute"
                top="85%"
                left="50%"
                transform="translate(-50%, -50%)"
                backgroundColor="#303144"
                color="#FFFFFF"
                width="141.49px"
                height="38.9px"
                fontFamily={"poppins"}
                id="button-shop"
              >
                Shop Now
              </Button>
            </Box>
          </HStack>
        </Center>
      </Container>
    </>
  );
};

export default Hero;
