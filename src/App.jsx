import { useState } from "react";
import { Box, Button, ChakraProvider, extendTheme, Text, withDefaultColorScheme } from "@chakra-ui/react";
import Navbar from "./Navbar";
import LoginModal from "./LoginModal";

function App() {
    const [count, setCount] = useState(0);
    const [isLoginModalOpen, setLoginModalOpen] = useState(false); // State for login modal
    const theme = {
        config: {
            useSystemColorMode: true,
            initialColorMode: "light",
        },
    };

    return (
        <ChakraProvider theme={extendTheme(theme, withDefaultColorScheme({ colorScheme: "teal" }))}>
            <Navbar onLoginClick={() => setLoginModalOpen(true)} />
            <Box justifyContent={"center"} textAlign="center" mt={5}>
                <Text fontSize={"2xl"}>{count}</Text>
                <Button variant={"solid"} onClick={() => setCount(count + 1)}>Increment</Button>
            </Box>

            {isLoginModalOpen && (
                <LoginModal isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)} />
            )}
        </ChakraProvider>
    );
}

export default App;
