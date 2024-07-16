import { ChakraProvider } from "@chakra-ui/react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./css/style.css";
import Product from "./components/Product";

function App() {
  return (
    <>
      <ChakraProvider>
        <Navbar link="Shop" />
        <Hero />
        <Product />
      </ChakraProvider>
    </>
  );
}

export default App;
