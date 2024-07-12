import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  HStack,
  Image,
  VStack,
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <>
      <Container>
        <Center>
          <VStack>
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
            <Box position="relative" display="inline-block">
              <Image src="../img/53567252.png" />
              <HStack spacing={10}>
                <Box position="absolute" transform="translate(-50%, -50%)" top="63%"
                left="50%" id="box-hero">
                <Button
                  backgroundColor="#303144"
                  color="#FFFFFF"
                  width="88px"
                  height="31px"
                  fontFamily={"poppins"}
                  id="button-shop-2"
                >
                  T-Shirt
                </Button>
                <Button
                  backgroundColor="#303144"
                  color="#FFFFFF"
                  width="88px"
                  height="31px"
                  fontFamily={"poppins"}
                  id="button-shop-2"
                >
                  One Set
                </Button>
                <Button
                  backgroundColor="#303144"
                  color="#FFFFFF"
                  width="88px"
                  height="31px"
                  fontFamily={"poppins"}
                  id="button-shop-2"
                >
                  Celana
                </Button>
                <Button
                  backgroundColor="#303144"
                  color="#FFFFFF"
                  width="88px"
                  height="31px"
                  fontFamily={"poppins"}
                  id="button-shop-2"
                >
                  Dress
                </Button>
                </Box>
              </HStack>
            </Box>
          </VStack>
        </Center>
      </Container>
    </>
  );
};

export default Hero;
