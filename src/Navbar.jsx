import { Box, Flex, Button, Input, Spacer, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <Box bg="gray.100" p={4} w={"100vw"}>
            <Flex align="center">
                <Button onClick={() => navigate("/")} mr="5" variant="ghost">Home</Button>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Categories
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={() => navigate("/electronics")}>Electronics</MenuItem>
                        <MenuItem onClick={() => navigate("/fashion")}>Fashion</MenuItem>
                        <MenuItem onClick={() => navigate("/furniture")}>Furniture</MenuItem>
                        <MenuItem onClick={() => navigate("/sports")}>Sports</MenuItem>
                        <MenuItem onClick={() => navigate("/automotive")}>Automotive</MenuItem>
                    </MenuList>
                </Menu>
                <Input ml={5} placeholder="Search" bg={"gray.50"} width="300px" />
                <Spacer />
                <Button mr={6} variant="outline">Login</Button>
                <Button onClick={() => navigate("/checkout")} variant="solid">Go to cart</Button>
            </Flex>
        </Box>
    );
};

export default Navbar;
