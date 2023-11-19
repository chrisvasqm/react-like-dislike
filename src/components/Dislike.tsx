import { Button } from "@chakra-ui/react";
import { BsHandThumbsDown, BsHandThumbsDownFill, BsHandThumbsUp, BsHandThumbsUpFill } from "react-icons/bs";

interface Props {
    isLiked: boolean;
    count: number;
    onClick: () => void;
}

function Dislike({ isLiked, count, onClick }: Props) {
    return (
        <Button
            padding={4}
            borderLeftWidth={2}
            borderColor={'gray.300'}
            borderTopLeftRadius={'0px'}
            borderBottomLeftRadius={'0px'}
            borderTopRightRadius={'20px'}
            borderBottomRightRadius={'20px'}
            onClick={onClick}>

            {isLiked ? <BsHandThumbsDownFill /> : <BsHandThumbsDown />}

        </Button>
    )
}

export default Dislike;