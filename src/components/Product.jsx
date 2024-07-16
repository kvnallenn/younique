import { Container, Text } from "@chakra-ui/react";
import ProductList from "./ProductList";

const Product = () => {
  return (
    <>
      <Container maxW="xxl" centerContent>
        <Text className="text-hero">NEW ARRIVALS</Text>
        <ProductList />
      </Container>
    </>
  );
};

export default Product;
