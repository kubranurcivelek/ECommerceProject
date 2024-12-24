import {
    Box,
    Image,
    Text,
    Button,
    Stack,
    Heading,
    Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const ProductView = () => {
    const [product, setProduct] = useState(null);
    const params = useParams();
    const productId = params.id;
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/products/${productId}`,
                );
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [productId]);

    if (!product) {
        return <Text>Loading...</Text>;
    }
    return (
        <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p="6"
            m="4"
        >
            <Flex direction={{ base: "column", md: "row" }} align="center">
                <Image
                    src="path/to/image"
                    alt="Product Image"
                />
                <Stack ml={{ md: "6" }} mt={{ base: "4", md: "0" }} spacing="3">
                    <Heading size="md">{product.productTitle}</Heading>
                </Stack>
            </Flex>
            <Text color="gray.500" mt="4">
                {product.productDescription}
            </Text>
            <Text fontWeight="bold" fontSize="xl" mt="2">
                ${product.productPrice}
            </Text>

            <Stack direction="row" spacing="4" mt="6">
                <Button variant="solid">Buy Now</Button>
                <Button variant="outline">Add to Cart</Button>
            </Stack>
        </Box>
    );
};

export default ProductView;
