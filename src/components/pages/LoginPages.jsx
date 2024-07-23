import Footer from "../Footer";
import Navbar from "../Navbar";
import "../../css/style.css";
import { ChakraProvider, Container } from "@chakra-ui/react";

const LoginPage = () => {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        
        <Footer />
      </ChakraProvider>
    </>
  );
};

export default LoginPage;
