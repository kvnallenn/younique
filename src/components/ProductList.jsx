import {
    Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const ProductList = () => {
  return (
    <>
      <HStack  display={{ md: "flex" }} gap={15}>
        <Card maxW="sm">
          <CardBody>
            <Image
              src="../img/BAJU1_1.png"
              className="product-list"
            />
            <Stack mt="6" spacing="3">
              <Heading className="product-title">Key Shop Shirt</Heading>
              <Text className="text-product">
                Rp 89.000
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <ButtonGroup spacing="3">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
          
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Image
              src="../img/baju2_1.png"
              className="product-list"
            />
            <Stack mt="6" spacing="3">
              <Heading className="product-title">Hello Fashion</Heading>
              <Text className="text-product">
                Rp 119.000
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <ButtonGroup spacing="3">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        </HStack>
    </>
  );
};

export default ProductList;
