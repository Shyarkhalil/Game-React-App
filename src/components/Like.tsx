import { AiFillHeart } from 'react-icons/ai';
import { CiHeart } from 'react-icons/ci';
interface LikeProps {
  isLiked: boolean;
  onLikeHandeler: () => void;
}
const Like: React.FC<LikeProps> = ({ onLikeHandeler, isLiked }) => {
  return (
    <div onClick={onLikeHandeler} className="like-icon-wrapper">
      {isLiked ? (
        <CiHeart size="100" />
      ) : (
        <AiFillHeart size="100" color="red" />
      )}
    </div>
  );
};

export default Like;
