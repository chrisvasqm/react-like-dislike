import { Button } from "@chakra-ui/react";

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
            onClick={onClick}>
            Icon {count}
        </Button>
    )
}

export default Like;