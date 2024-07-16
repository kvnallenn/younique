import {
  Box,
  Button,
  Center,
  Container,
  HStack,
  Image,
  VStack,
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <>
      <Container maxW="auto">
        <Center>
          <VStack>
            <Box position="relative" display="inline-block">
              <Image src="../img/53567251.png" />
              <Button id="button-shop">Shop Now</Button>
            </Box>
            <Box position="relative" display="inline-block">
              <Image src="../img/53567252.png" />
              <HStack spacing="24px">
                <Box
                  position="absolute"
                  transform="translate(-50%, -50%)"
                  top="63%"
                  left="50%"
                  id="box-hero"
                >
                  <Button id="button-shop-2">T-Shirt</Button>
                  <Button id="button-shop-2">One Set</Button>
                  <Button id="button-shop-2">Celana</Button>
                  <Button id="button-shop-2">Dress</Button>
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
