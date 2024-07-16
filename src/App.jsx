import { ChakraProvider } from "@chakra-ui/react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./css/style.css";

function App() {
  return (
    <>
      <ChakraProvider>
        <Navbar link="Shop" />
        <Hero />
      </ChakraProvider>
    </>
  );
}

export default App;
