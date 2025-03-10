import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Cart from "./Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Products from "./Products"

const App = () => {
  const theme = {
    config: {
      useSystemColorMode: true,
      initialColorMode: "light",
    },
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  
  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <BrowserRouter>
        <Navbar
          setSearchQuery={(q) => setSearchQuery(q)} 
        />
        <Routes>
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/" element={<Products query={searchQuery} cart={cart} setCart={setCart} />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
