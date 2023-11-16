import { User } from "../types/User";
import "./PostPweep.scss";

type Props = {
  user: User;
};

const POST_PWEEP_PLACEHOLDER = "What's on your mind?!";

export const PostPweep = ({ user }: Props) => {
  return (
    <div className="post-pweep__container">
      <div className="post-pweep__image-input-container">
        <img src={user.image} className="post-pweep__image" />
        <input
          className="post-pweep__input"
          placeholder={POST_PWEEP_PLACEHOLDER}
        />
      </div>
      <div className="post-pweep__button-container">
        <button className="post-pweep__button">Post</button>
      </div>
    </div>
  );
};
