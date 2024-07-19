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
} from "@chakra-ui/react";

const Navbar = () => {
  const [isActive, setisActive] = useState(false);

  const onHandler = (e) => {
    e.preventDefault;
    setisActive(true);
  };

  const onStatus = (e) => {
    e.preventDefault;
    setisActive(false);
  };

  return (
    <>
      <ChakraProvider>
        <HStack display={{ base: "none", xl: "flex" }} spacing={10}>
          <Box bg="#E4E4E4" w="100%" color="white" h="42px" p={3}>
            <Flex alignItems="center" gap={7} mr={10}>
              <Spacer />
              <Text className="help-navbar">
                Tentang Kami
              </Text>
              <Text className="help-navbar">
                Hubungi Kami
              </Text>
            </Flex>
          </Box>
        </HStack>

        <Box w="100%" color="white" h="99px" p={6}>
          {isActive ? (
            <ScaleFade initialScale={0.9} in={isActive}>
              <SearchBar onClickHandler={onStatus} />
            </ScaleFade>
          ) : (
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
                  fontFamily={"HM Sans Regular"}
                  fontWeight={"bold"}
                  ml={5}
                >
                  SHOP
                </Text>
                <Text
                  color={"black"}
                  fontSize={14}
                  fontFamily={"HM Sans Regular"}
                  fontWeight={"bold"}
                >
                  PROMO
                </Text>
                <Text
                  color={"black"}
                  fontSize={14}
                  fontFamily={"HM Sans Regular"}
                  fontWeight={"bold"}
                >
                  KATEGORI
                </Text>
                <Text
                  color={"black"}
                  fontSize={14}
                  fontFamily={"HM Sans Regular"}
                  fontWeight={"bold"}
                >
                  JASTIP
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
                  fontFamily={"HM Sans Regular"}
                >
                  Search
                </Button>
                <Text color={"black"} fontSize={15} fontFamily={"HM Sans Regular"}>
                  Masuk
                </Text>
                <Text color={"black"} fontSize={15} fontFamily={"HM Sans Regular"}>
                  Keranjang
                </Text>
                <Text color={"black"} fontSize={15} fontFamily={"HM Sans Regular"}>
                  Wishlist
                </Text>
              </HStack>
              <HStack display={{ base: "flex", xl: "none" }} spacing={10}>
                <Sidebar />
              </HStack>
            </Flex>
          )}
        </Box>
      </ChakraProvider>
    </>
  );
};

export default Navbar;
