import React, { useState } from "react";
import "@fontsource/poppins";
import "@fontsource/secular-one";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";

import {
  Box,
  ChakraProvider,
  Flex,
  Spacer,
  Text,
  HStack,
  Button,
  ScaleFade,
  useMediaQuery,
} from "@chakra-ui/react";

const Navbar = (props) => {
  const [isActive, setisActive] = useState(false);

  const onHandler = (e) => {
    e.preventDefault;
    setisActive(true);
  };

  return (
    <>
      <ChakraProvider>
        <HStack display={{ base: "none", xl: "flex" }} spacing={10}>
          <Box bg="#E4E4E4" w="100%" color="white" h="42px" p={3}>
            <Flex alignItems="center" gap={7} mr={10}>
              <Spacer />
              <Text color={"black"} fontSize={12} fontFamily={"poppins"}>
                Tentang Kami
              </Text>
              <Text color={"black"} fontSize={12} fontFamily={"poppins"}>
                Hubungi Kami
              </Text>
            </Flex>
          </Box>
        </HStack>

        <Box w="100%" color="white" h="99px" p={6}>
        {
          isActive ? 
            <ScaleFade initialScale={0.9} in={isActive}>
              <SearchBar/>
            </ScaleFade>
          : 
            <Flex alignItems="center" gap={7} mr={7}>
              <Text
                fontFamily={"Secular One"}
                fontSize={32}
                color={"black"}
                ml={15}
              >
                YOUNIQUE.LY
              </Text>
              <HStack display={{ base: "none", xl: "flex" }} spacing={10}>
                <Text
                  color={"black"}
                  fontSize={14}
                  fontFamily={"poppins"}
                  fontWeight={"bold"}
                  ml={5}
                >
                  Shop
                </Text>
                <Text
                  color={"black"}
                  fontSize={14}
                  fontFamily={"poppins"}
                  fontWeight={"bold"}
                >
                  Promo
                </Text>
                <Text
                  color={"black"}
                  fontSize={14}
                  fontFamily={"poppins"}
                  fontWeight={"bold"}
                >
                  Kategori
                </Text>
                <Text
                  color={"black"}
                  fontSize={14}
                  fontFamily={"poppins"}
                  fontWeight={"bold"}
                >
                  Jastip
                </Text>
              </HStack>
              <Spacer />
              <HStack display={{ base: "none", xl: "flex" }} spacing={10}>
                <Button
                  colorScheme="white"
                  color="black"
                  padding={0}
                  fontWeight={200}
                  onClick={onHandler}
                  fontFamily={"poppins"}
                >
                  Search
                </Button>
                <Text color={"black"} fontSize={15} fontFamily={"poppins"}>
                  Masuk
                </Text>
                <Text color={"black"} fontSize={15} fontFamily={"poppins"}>
                  Keranjang
                </Text>
                <Text color={"black"} fontSize={15} fontFamily={"poppins"}>
                  Wishlist
                </Text>
              </HStack>
              <HStack display={{ base: "flex", lg: "none" }} spacing={10}>
              <Sidebar />
            </HStack>
            </Flex>
        }
         
      </Box>
      </ChakraProvider>
    </>
  );
};

export default Navbar;
