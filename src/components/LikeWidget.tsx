import Like from './Like';
import Dislike from './Dislike';

interface Props {
    isLiked: boolean;
    count: number;
    onClick: () => void;
}

function LikeWidget({ isLiked, count, onClick }: Props) {
    return (
        <>
            <Like isLiked={isLiked} count={count} onClick={onClick} />
            <Dislike isLiked={isLiked} count={count} onClick={onClick} />
        </>
    )
}

export default LikeWidget;