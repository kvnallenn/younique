import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, ChakraProvider, Flex, Spacer, Text, HStack } from '@chakra-ui/react'
import '@fontsource/poppins';
import '@fontsource/secular-one';
import { IconButton } from '@chakra-ui/react';



const Navbar = () =>{
  return(
    <>
    <ChakraProvider>
    <Box bg='#E4E4E4' w='100%' color='white' h="42px" p={3}>
      <Flex alignItems='center' gap={7} mr={10}>
      <Spacer />
      <Text color={'black'} fontSize={12} fontFamily={'poppins'} >Tentang Kami</Text>
      <Text color={'black'} fontSize={12} fontFamily={'poppins'}>Hubungi Kami</Text>
      </Flex>
    </Box>
    <Box w='100%' color='white' h="99px" p={6}>
    <Flex alignItems='center' gap={7} mr={7}>
      <Text fontFamily={'Secular One'} fontSize={32} color={'black'} ml={15}>YOUNIQUE</Text>
      <HStack display={{ base: 'none', md: 'flex' }} spacing={10}>
        <Text color={'black'} fontSize={14} fontFamily={'poppins'} fontWeight={'bold'} ml={5}>Shop</Text>
        <Text color={'black'} fontSize={14} fontFamily={'poppins'} fontWeight={'bold'}>Promo</Text>
        <Text color={'black'} fontSize={14} fontFamily={'poppins'} fontWeight={'bold'}>Kategori</Text>
        <Text color={'black'} fontSize={14} fontFamily={'poppins'} fontWeight={'bold'}>Jastip</Text>
      </HStack>
      <Spacer />
      <HStack display={{ base: 'none', md: 'flex' }} spacing={10}>
      <Text color={'black'} fontSize={15} fontFamily={'poppins'} >Search</Text>
      <Text color={'black'} fontSize={15} fontFamily={'poppins'} >Masuk</Text>
      <Text color={'black'} fontSize={15} fontFamily={'poppins'} >Keranjang</Text>
      <Text color={'black'} fontSize={15} fontFamily={'poppins'}>Wishlist</Text>
      </HStack>
          <IconButton
            size="md"
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={onOpen}
          />
      </Flex>
    </Box>
    </ChakraProvider>
    </>
  )
}

export default Navbar;