import { Box, Grid } from '@chakra-ui/react';
import ProductCard from "./ProductCard";
import PropTypes from 'prop-types';

const products = [
    {
      id: 1,
      name: "Apple MacBook Air M1",
      description: '16GB 256GB SSD macOS 13" Z1240009K',
      price: 800,
      image: "/image.png",
    },
    {
      id: 2,
      name: "Dell XPS 13",
      description: '16GB 512GB SSD Windows 11 Z9230001F',
      price: 1000,
      image: "/image.png",
    },
    {
      id: 3,
      name: "Apple iPhone 14",
      description: "256GB iOS 16 Smartphone",
      price: 1200,
      image: "/image.png",
    },
];

export default function Products({ query, cart, setCart }) {
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );
    const addToCart = (product) => {
        setCart([...cart, product]);
        sessionStorage.setItem("cart", JSON.stringify(cart));
    };
    return (
        <Box p={5}>
            <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
            </Grid>
        </Box>
    );
}

Products.propTypes = {
    query: PropTypes.string.isRequired,
    cart: PropTypes.array.isRequired,
    setCart: PropTypes.func.isRequired,
};