import { CloseIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

const ButtonSearch = ({buttonSearchStatus}) =>{

    return(
        <Button h="1.75rem" size="sm" colorScheme="white" color="black">
            <CloseIcon color="black.500" boxSize={2}/> 
        </Button>
    )
}

export default ButtonSearch;