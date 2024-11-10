import { useState } from "react";
import { Box, Button, ChakraProvider, extendTheme, Text, withDefaultColorScheme } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./Navbar";

function App() {
    const [count, setCount] = useState(0);
    const theme = {
        config: {
            useSystemColorMode: true,
            initialColorMode: "light", 
        },
    };

    return (
        <ChakraProvider theme={extendTheme(theme, withDefaultColorScheme({ colorScheme: "teal" }))}>
            <Navbar />
            <Box justifyContent={"center"}>
                <Text fontSize={"2xl"}>{count}</Text>
                <Button variant={"solid"} onClick={() => setCount(count + 1)}>Increment</Button>
            </Box>
        </ChakraProvider>
    );
}

export default App;
