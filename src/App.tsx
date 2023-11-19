import { Box, Heading } from "@chakra-ui/react";
import Like from "./components/Like";
import { useState } from "react";

function App() {
  const [isLiked, setIsLiked] = useState(false);
  const [count, setCount] = useState(0);

  function handleLike() {
    setCount(count + 1);
  }

  return (
    <Box padding={4}>
      <Heading>Like and Dislike</Heading>
      <Like isLiked={isLiked} count={count} onClick={handleLike} />
    </Box>
  )
}

export default App;
