import { Box, Flex, Button, Input, Spacer, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Navbar = () => {
    return (
        <Box bg="gray.100" p={4} w={"100vw"}>
            <Flex align="center">
                <Button mr={5} variant="ghost">Home</Button>
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
                <Spacer />
                <Input placeholder="Search" bg={"gray.50"} width="300px" />
                <Spacer />
                <Button variant="outline">Login</Button>
            </Flex>
        </Box>
    );
};

export default Navbar;
