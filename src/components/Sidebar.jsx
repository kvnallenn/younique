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
          <Text className="navbar-res">
                Shop
            </Text>
            <Text className="navbar-res">
                Promo
            </Text>
            <Text className="navbar-res">
                Kategori
            </Text>
            <Text className="navbar-res">
                Jastip
            </Text>
            <Text className="navbar-res">
                Keranjang
            </Text>
            <Divider orientation="horizontal" w="100%" borderColor="black" mt={3} />
            <Text className="navbar-res">
                Customer Service
            </Text>
            <Text className="navbar-res">
                Tentang Kami
            </Text>
            <Input variant='flushed' fontSize={15} fontFamily={"HM Sans Regular"} mt={0} placeholder='Cari barang disini...'/>
          </VStack>
          </DrawerBody>
          <Center>
          <Divider orientation="horizontal" w="85%" borderColor="black"/>
          </Center>
          <DrawerFooter justifyContent="flex-start">
          <HStack spacing={10} p={1}>
          <Text className="navbar-res">
                Masuk
          </Text>
          <Text className="navbar-res">
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