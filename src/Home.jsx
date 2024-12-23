import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
    const [count, setCount] = useState(0);

    // Categories will be displayed here

    return (
        <Box justifyContent={"center"}>
            <Text fontSize={"2xl"}>{count}</Text>
            <Button variant={"solid"} onClick={() => setCount(count + 1)}>
                Increment
            </Button>
        </Box>
    );
}
