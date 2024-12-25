import { Box, Text, Image, VStack, HStack, Button } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";

const ProductCard = ({ product, addToCart }) => {
    return (
        <Box
            maxW="lg"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            p={4}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexDirection={{ base: "column", md: "row" }} // Responsive düzen
        >
            {/* Product Details */}
            <VStack align="start" spacing={2} flex={1}>
                <Text fontWeight="bold" fontSize="md" isTruncated>
                    {product.name}
                </Text>
                <Text fontSize="sm" color="gray.500" noOfLines={2}>
                    {product.description}
                </Text>
                <HStack>
                    <Text fontWeight="bold" fontSize="sm">
                        Rating:
                    </Text>
                    {[...Array(5)].map((_, i) => (
                        <StarIcon
                            key={i}
                            boxSize={3}
                            color={i < product.rating ? "yellow.400" : "gray.300"}
                        />
                    ))}
                </HStack>
                <Text fontSize="lg" fontWeight="bold" color="teal.500">
                    ${product.price}
                </Text>
                <HStack spacing={2}>
                    <Button
                        size="sm"
                        variant="outline"
                        colorScheme="teal"
                    >
                        Add to Favourites
                    </Button>
                    <Button
                        size="sm"
                        variant="solid"
                        colorScheme="teal"
                        onClick={() => addToCart(product)}
                    >
                        Add to Cart
                    </Button>
                </HStack>
            </VStack>

            {/* Product Image */}
            <Image
                src={product.image}
                alt={product.name}
                boxSize="150px"
                objectFit="contain"
                ml={{ base: 0, md: 5 }}
            />
        </Box>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    addToCart: PropTypes.func.isRequired,
};

export default ProductCard;
