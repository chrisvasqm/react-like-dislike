import { Box, Heading } from "@chakra-ui/react";
import { useState } from "react";
import LikeWidget from "./components/LikeWidget";

function App() {
  const [isLiked, setIsLiked] = useState(false);
  const [count, setCount] = useState(0);

  function handleLike() {
    setIsLiked(!isLiked);

    if (!isLiked)
      setCount(count + 1);

    if (count > 0)
      setCount(0);
  }

  return (
    <Box padding={4}>
      <Heading>Like and Dislike</Heading>
      <LikeWidget isLiked={isLiked} count={count} onClick={handleLike} />
    </Box>
  )
}

export default App;
