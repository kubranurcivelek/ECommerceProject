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
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";

const Navbar = ({ onLoginClick, onViewCartClick }) => {
  return (
    <Box bg="gray.100" p={4} w={"100vw"}>
      <Flex align="center">
        <Button mr="5" variant="ghost">
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
        <Input ml={5} placeholder="Search" bg={"gray.50"} width="300px" />
        <Spacer />
        <Button mr={6} variant="outline" onClick={onLoginClick}>
          Login
        </Button>
        <Button variant="solid" onClick={onViewCartClick}>
          Go to cart
        </Button>
      </Flex>
    </Box>
  );
};

Navbar.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  onViewCartClick: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Navbar;
