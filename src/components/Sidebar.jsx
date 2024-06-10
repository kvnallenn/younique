import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure, IconButton, Drawer, DrawerOverlay, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerBody } from "@chakra-ui/react";

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

          <DrawerBody>halo coki</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;