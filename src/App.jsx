import { Box, ChakraProvider, extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router";
import Products from "./Products";
import ProductView from "./ProductView";

function App() {
    const theme = {
        config: {
            useSystemColorMode: true,
            initialColorMode: "light", 
        },
    };

    return (
        <ChakraProvider theme={extendTheme(theme, withDefaultColorScheme({ colorScheme: "teal" }))}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route index element={<Products />}></Route>
                    <Route path="/checkout" element={<Box>Checkout</Box>}></Route>
                    <Route path="/electronics" element={<Box>Electronics category</Box>}></Route>
                    <Route path="/products/:id" element={<ProductView />}></Route>
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    );
}

export default App;
