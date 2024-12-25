import { ChakraProvider, extendTheme, Box, Grid } from "@chakra-ui/react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import LoginModal from "./LoginModal"; // LoginModal import edildi
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);
  const [isViewingCart, setIsViewingCart] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false); // Login Modal state
  const [searchQuery, setSearchQuery] = useState(""); // Arama için state

  const theme = {
    config: {
      useSystemColorMode: true,
      initialColorMode: "light",
    },
  };

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


  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  // Login modal açma/kapatma fonksiyonları
  const openLoginModal = () => setLoginOpen(true);
  const closeLoginModal = () => setLoginOpen(false);

  // Arama fonksiyonu
  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  return (
    <ChakraProvider theme={extendTheme(theme)}>
      {/* Navbar component */}
      <Navbar
        onLoginClick={openLoginModal} 
        onViewCartClick={() => setIsViewingCart(true)}
        onSearch={handleSearch} 
      />
      <Box p={5}>
        {isViewingCart ? (
          <Cart
            cart={cart}
            onBack={() => setIsViewingCart(false)}
            onRemove={removeFromCart} // Sepetten silme fonksiyonu
          />
        ) : (
          <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </Grid>
        )}
      </Box>
      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={closeLoginModal} />
    </ChakraProvider>
  );
};

export default App;
