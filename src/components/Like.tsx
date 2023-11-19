import { Button } from "@chakra-ui/react";

interface Props {
    isLiked: boolean;
    count: number;
}

function Like({ isLiked, count }: Props) {
    return (
        <Button
            borderTopLeftRadius={'20px'}
            borderBottomLeftRadius={'20px'}
            borderTopRightRadius={'0px'}
            borderBottomRightRadius={'0px'}>
            Icon {count}
        </Button>
    )
}

export default Like;