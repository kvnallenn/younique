import { useRef } from 'react';
import React from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import '@fontsource/poppins';
import '@fontsource/secular-one';
import { Box, ChakraProvider, Flex, Spacer, Text, HStack, IconButton, Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure, Input, Button } from '@chakra-ui/react'





const Navbar = () =>{

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return(
    <>
    <ChakraProvider>
    <HStack display={{ base: 'none', lg: 'flex' }} spacing={10} >
    <Box bg='#E4E4E4' w='100%' color='white' h="42px" p={3}>
      <Flex alignItems='center' gap={7} mr={10}>
      <Spacer />
      <Text color={'black'} fontSize={12} fontFamily={'poppins'} >Tentang Kami</Text>
      <Text color={'black'} fontSize={12} fontFamily={'poppins'}>Hubungi Kami</Text>
      </Flex>
    </Box>
    </HStack>
    <Box w='100%' color='white' h="99px" p={6}>
    <Flex alignItems='center' gap={7} mr={7}>
      <Text fontFamily={'Secular One'} fontSize={32} color={'black'} ml={15}>YOUNIQUE.LY</Text>
      <HStack display={{ base: 'none', lg: 'flex' }} spacing={10}>
        <Text color={'black'} fontSize={14} fontFamily={'poppins'} fontWeight={'bold'} ml={5}>Shop</Text>
        <Text color={'black'} fontSize={14} fontFamily={'poppins'} fontWeight={'bold'}>Promo</Text>
        <Text color={'black'} fontSize={14} fontFamily={'poppins'} fontWeight={'bold'}>Kategori</Text>
        <Text color={'black'} fontSize={14} fontFamily={'poppins'} fontWeight={'bold'}>Jastip</Text>
      </HStack>
      <Spacer />
      <HStack display={{ base: 'none', lg: 'flex' }} spacing={10}>
      <Text color={'black'} fontSize={15} fontFamily={'poppins'} >Search</Text>
      <Text color={'black'} fontSize={15} fontFamily={'poppins'} >Masuk</Text>
      <Text color={'black'} fontSize={15} fontFamily={'poppins'} >Keranjang</Text>
      <Text color={'black'} fontSize={15} fontFamily={'poppins'}>Wishlist</Text>
      </HStack>
      <HStack display={{ base: 'flex', lg: 'none' }} spacing={10}>
      <IconButton onClick={onOpen} ref={btnRef} aria-label='Search database' icon={<HamburgerIcon />} variant='unstyled' color='black'/>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      ><DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>YOUNIQUE.LY</DrawerHeader>

        <DrawerBody>
          halo coki
        </DrawerBody>
      </DrawerContent>
    </Drawer>
      
      </HStack>
      </Flex>
    </Box>
    
    </ChakraProvider>
    </>
  )
}

export default Navbar;