import { Box, Text, Image, Button, VStack, Flex } from "@chakra-ui/react";

const Cart = () => {
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const total = cart.reduce((acc, product) => acc + product.price, 0);
    return (
        <Box>
            <VStack spacing={5} align="stretch">
                {cart.map((product, index) => (
                    <Flex
                        key={index}
                        alignItems="center"
                        justifyContent="space-between"
                        borderWidth="1px"
                        borderRadius="lg"
                        p={4}
                    >
                        <Image src={product.image} alt={product.name} boxSize="100px" objectFit="cover" />
                        <Text>{product.name}</Text>
                        <Text fontWeight="bold">${product.price}</Text>
                        <Button colorScheme="red" onClick={() => {cart.filter((_, i) => i !== index)}}>
                            Remove
                        </Button>
                    </Flex>
                ))}
            </VStack>
            <Box mt={5} textAlign="right">
                <Text fontSize="xl" fontWeight="bold">Subtotal: ${total}</Text>
                <Button colorScheme="teal" mt={3}>Proceed To Checkout</Button>
            </Box>
        </Box>
    );
};

export default Cart;
