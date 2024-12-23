import { Box, Image, Text, SimpleGrid } from '@chakra-ui/react';

// Temporary data

const products = [
    { id: 1, name: 'Product 1', price: '$10', image: 'path/to/image1.jpg' },
    { id: 2, name: 'Product 2', price: '$20', image: 'path/to/image2.jpg' },
    { id: 3, name: 'Product 3', price: '$30', image: 'path/to/image3.jpg' },
    { id: 4, name: 'Product 4', price: '$30', image: 'path/to/image4.jpg' },
    { id: 5, name: 'Product 5', price: '$30', image: 'path/to/image5.jpg' },
    { id: 6, name: 'Product 6', price: '$30', image: 'path/to/image6.jpg' },
    { id: 7, name: 'Product 7', price: '$30', image: 'path/to/image7.jpg' },
    { id: 8, name: 'Product 8', price: '$30', image: 'path/to/image8.jpg' },

    // Add more products as needed
];

const Products = () => {
    return (
        <SimpleGrid padding={10} columns={[1, 2, 3, 4]} spacing={5}>
            {products.map(product => (
                <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <Image src={product.image} alt={product.name} />
                    <Box p="6">
                        <Box d="flex" alignItems="baseline">
                            <Text fontWeight="bold" fontSize="md" mt="2">
                                {product.name}
                            </Text>
                        </Box>
                        <Text mt="2" color="gray.500">
                            {product.price}
                        </Text>
                    </Box>
                </Box>
            ))}
        </SimpleGrid>
    );
};

export default Products;