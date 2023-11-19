import { Button } from "@chakra-ui/react";
import { BsHandThumbsUp, BsHandThumbsUpFill } from "react-icons/bs";

interface Props {
    isLiked: boolean;
    count: number;
    onClick: () => void;
}

function Like({ isLiked, count, onClick }: Props) {
    return (
        <Button
            borderTopLeftRadius={'20px'}
            borderBottomLeftRadius={'20px'}
            borderTopRightRadius={'0px'}
            borderBottomRightRadius={'0px'}
            gap={2}
            onClick={onClick}>

            {isLiked ? <BsHandThumbsUpFill /> : <BsHandThumbsUp />} {count}

        </Button>
    )
}

export default Like;