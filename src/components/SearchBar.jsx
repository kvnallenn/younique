import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

const SearchBar = () => {
  return (
    <>
      <Box color='black'>
        <Flex justifyContent="center">
          <InputGroup maxWidth={800} size='md'>
            <Input placeholder="Cari barang kamu disini..." borderColor='gray' focusBorderColor='black'/>
            <InputRightElement width='5rem'>
              <Box display="flex" alignItems="center" h="100%">
                <Button h="1.75rem" size="sm" colorScheme="white" color="black">
                  <CloseIcon color="black.500" boxSize={2}/> 
                </Button>
                <Button h="1.75rem" size="sm" colorScheme="white" color="black">
                  <SearchIcon color="black.500" /> 
                </Button>
              </Box>
            </InputRightElement>
          </InputGroup>
          
        </Flex>
        
      </Box>
    </>
  );
};

export default SearchBar;
