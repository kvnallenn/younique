import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure, IconButton, Drawer, DrawerOverlay, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerBody, VStack, Text, DrawerFooter, Button, HStack, Input } from "@chakra-ui/react";

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
          <DrawerBody>
          <VStack align='stretch'>
            <Text color={"black"} fontSize={15} fontFamily={"poppins"}>
                Promo
            </Text>
            <Text color={"black"} fontSize={15} fontFamily={"poppins"} mt={2}>
                Kategori
            </Text>
            <Text color={"black"} fontSize={15} fontFamily={"poppins"} mt={2}>
                Jastip
            </Text>
            <Input variant='flushed' fontSize={15} fontFamily={"poppins"} mt={1} placeholder='Cari barang disini...'/>
          </VStack>
          </DrawerBody>
        </DrawerContent>              
      </Drawer>
    </>
  );
};

export default Sidebar;