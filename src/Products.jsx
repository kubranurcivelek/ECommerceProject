import { Box, Image, Text, SimpleGrid, Select } from '@chakra-ui/react';
import { useNavigate } from "react-router";
import { useState } from "react";
// Temporary data

const products = [
    { id: 1, name: 'Product 1', price: '$10', image: 'path/to/image1.jpg', category: 'Category 1' },
    { id: 2, name: 'Product 2', price: '$20', image: 'path/to/image2.jpg', category: 'Category 2' },
    { id: 3, name: 'Product 3', price: '$30', image: 'path/to/image3.jpg', category: 'Category 1' },
    { id: 4, name: 'Product 4', price: '$30', image: 'path/to/image4.jpg', category: 'Category 2' },
    { id: 5, name: 'Product 5', price: '$30', image: 'path/to/image5.jpg', category: 'Category 1' },
    { id: 6, name: 'Product 6', price: '$30', image: 'path/to/image6.jpg', category: 'Category 2' },
    { id: 7, name: 'Product 7', price: '$30', image: 'path/to/image7.jpg', category: 'Category 1' },
    { id: 8, name: 'Product 8', price: '$30', image: 'path/to/image8.jpg', category: 'Category 2' },
];

const Products = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    return (
        <Box padding={10}>
            <Select placeholder="Select category" onChange={handleCategoryChange} mb={5}>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Furniture">Furniture</option>
                <option value="Sports">Sports</option>
                <option value="Automotive">Automotive</option>
            </Select>
            <SimpleGrid columns={[1, 2, 3, 4]} spacing={5}>
                {filteredProducts.map(product => (
                    <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" onClick={() => navigate("/products/" + product.id)}>
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
        </Box>
    );
};

export default Products;