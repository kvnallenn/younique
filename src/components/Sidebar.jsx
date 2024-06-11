import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure, IconButton, Drawer, DrawerOverlay, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerBody, VStack, Text, DrawerFooter, Divider, HStack, Input, Center } from "@chakra-ui/react";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <IconButton
        onClick={onOpen}
        ref={btnRef}
        aria-label="Search database"
        icon={<HamburgerIcon />}
        variant="unstyled"
        color="black"
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>YOUNIQUE.LY</DrawerHeader>
          <Center>
          <Divider orientation="horizontal" w="85%" borderColor="black" />
          </Center>
          <DrawerBody>
          <VStack align='stretch'>
          <Text color={"black"} fontSize={16} fontFamily={"poppins"} mt={3}>
                Shop
            </Text>
            <Text color={"black"} fontSize={16} fontFamily={"poppins"} mt={3}>
                Promo
            </Text>
            <Text color={"black"} fontSize={16} fontFamily={"poppins"} mt={3}>
                Kategori
            </Text>
            <Text color={"black"} fontSize={16} fontFamily={"poppins"} mt={3}>
                Jastip
            </Text>
            <Text color={"black"} fontSize={16} fontFamily={"poppins"} mt={3}>
                Keranjang
            </Text>
            <Divider orientation="horizontal" w="100%" borderColor="black" mt={3} />
            <Text color={"black"} fontSize={16} fontFamily={"poppins"} mt={3}>
                Customer Service
            </Text>
            <Text color={"black"} fontSize={16} fontFamily={"poppins"} mt={3}>
                Tentang Kami
            </Text>
            <Input variant='flushed' fontSize={16} fontFamily={"poppins"} mt={2} placeholder='Cari barang disini...'/>
          </VStack>
          </DrawerBody>
          <Center>
          <Divider orientation="horizontal" w="85%" borderColor="black"/>
          </Center>
          <DrawerFooter justifyContent="flex-start">
          <HStack spacing={10} p={1}>
          <Text color={"black"} fontSize={15} fontFamily={"poppins"}>
                Masuk
          </Text>
          <Text color={"black"} fontSize={15} fontFamily={"poppins"}>
                Daftar
          </Text>
          </HStack>
          </DrawerFooter>
        </DrawerContent>              
      </Drawer>
    </>
  );
};

export default Sidebar;