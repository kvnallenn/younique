import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const ProductList = () => {
  return (
    <>
      <HStack display={{ md: "flex" }} spacing={3}>
        <Card maxW="sm">
          <CardBody>
            <Image src="../img/BAJU1_1.png" className="product-list" />
            <Stack mt="6" spacing="3">
              <Heading className="product-title">Key Shop Shirt</Heading>
              <Text className="text-product">Rp 89.000</Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <ButtonGroup spacing="3">
              <Button variant="solid" className="buy-product">
                Buy now
              </Button>
              <Button variant="outline" colorScheme="gray">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Image src="../img/baju2_1.png" className="product-list" />
            <Stack mt="6" spacing="3">
              <Heading className="product-title">Hello Fashion</Heading>
              <Text className="text-product">Rp 119.000</Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <ButtonGroup spacing="3">
              <Button variant="solid" className="buy-product">
                Buy now
              </Button>
              <Button variant="outline" colorScheme="gray">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </HStack>
      <HStack display={{ md: "flex" }} spacing={3} marginTop={5}>
        <Card maxW="sm">
          <CardBody>
            <Image src="../img/baju3.jpg" className="product-list" />
            <Stack mt="6" spacing="3">
              <Heading className="product-title">Cartoon T-Shirt</Heading>
              <Text className="text-product">Rp 89.000</Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <ButtonGroup spacing="3">
              <Button variant="solid" className="buy-product">
                Buy now
              </Button>
              <Button variant="outline" colorScheme="gray">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Image src="../img/baju4.jpg" className="product-list" />
            <Stack mt="6" spacing="3">
              <Heading className="product-title">White Oversized</Heading>
              <Text className="text-product">Rp 119.000</Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <ButtonGroup spacing="3">
              <Button variant="solid" className="buy-product">
                Buy now
              </Button>
              <Button variant="outline" colorScheme="gray">
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
