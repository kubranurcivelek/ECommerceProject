import { Box, Text, Image, Button, VStack, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Cart = function ({ cart, setCart }) {
    const total = cart.reduce((acc, product) => acc + product.price, 0);
    return (
        <Flex flexDir={"column"} alignItems={"center"} mt={2}>
            <VStack spacing={5} align="stretch">
                {cart.map((product, index) => (
                    <Flex
                        key={index}
                        alignItems="center"
                        borderWidth="1px"
                        borderRadius="lg"
                        p={4}
                        gap={4}
                    >
                        <Image
                            src={product.image}
                            alt={product.name}
                            boxSize="100px"
                            objectFit="cover"
                        />
                        <Text>{product.name}</Text>
                        <Text fontWeight="bold">${product.price}</Text>
                        <Button
                            colorScheme="red"
                            onClick={() => {
                                const newCart = cart.filter((_, i) => i !== index);
                                setCart(newCart);
                            }}
                        >
                            Remove
                        </Button>
                    </Flex>
                ))}
            </VStack>
            <Box mt={5} textAlign="center">
                <Text fontSize="xl" fontWeight="bold">
                    Subtotal: ${total}
                </Text>
                <Button colorScheme="teal" mt={3}>
                    Proceed To Checkout
                </Button>
            </Box>
        </Flex>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    setCart: PropTypes.func.isRequired,
};

export default Cart;
