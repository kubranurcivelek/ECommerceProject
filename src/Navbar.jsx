import {
  Box,
  Flex,
  Button,
  Input,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  VStack
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setSearchQuery }) => {
  const navigate = useNavigate();
  return (
    <Box bg="gray.100" p={4} w={"100vw"}>
      <Flex align="center">
        <Button mr="5" variant="ghost" onClick={() => navigate("/")}>
          Home
        </Button>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Categories
          </MenuButton>
          <MenuList>
            <MenuItem>Electronics</MenuItem>
            <MenuItem>Fashion</MenuItem>
            <MenuItem>Home & Garden</MenuItem>
            <MenuItem>Sports</MenuItem>
            <MenuItem>Automotive</MenuItem>
          </MenuList>
        </Menu>
        <Input ml={5} placeholder="Search" bg={"gray.50"} width="300px" onChange={(e) => {
          setSearchQuery(e.target.value);
        }}/>
        <Spacer />
        <Popover>
          <PopoverTrigger>
            <Button mr={6} variant="outline">
              Login
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>Login</PopoverHeader>
            <PopoverBody>
              <VStack spacing={4}>
                <Input placeholder="Email" type="email" />
                <Input placeholder="Password" type="password" />
              </VStack>
            </PopoverBody>
            <Button mr={2}>
              Login
            </Button>
          </PopoverContent>
        </Popover>
        <Button variant="solid" onClick={() => navigate("/cart")}>
          Go to cart
        </Button>
      </Flex>
    </Box>
  );
};

Navbar.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
};

export default Navbar;
