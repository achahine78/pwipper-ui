import { useState } from "react";
import { User } from "../types/User";
import "./PostPweep.scss";
import { privateAxios } from "../api";

type Props = {
  user: User;
};

const POST_PWEEP_PLACEHOLDER = "What's on your mind?!";

export const PostPweep = ({ user }: Props) => {
  const [pweepContent, setPweepContent] = useState<undefined | string>();
  const postPweep = () => {
    privateAxios.post("/api/pweep", {
      content: pweepContent,
    });
  };
  return (
    <div className="post-pweep__container">
      <div className="post-pweep__image-input-container">
        <img src={user.image} className="post-pweep__image" />
        <input
          className="post-pweep__input"
          placeholder={POST_PWEEP_PLACEHOLDER}
          onChange={(e) => {
            setPweepContent(e.target.value);
          }}
        />
      </div>
      <div className="post-pweep__button-container">
        <button className="post-pweep__button" onClick={postPweep}>
          Post
        </button>
      </div>
    </div>
  );
};
