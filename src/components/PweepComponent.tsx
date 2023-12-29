import { useUser } from "../hooks/useUser";
import { Pweep } from "../types/Pweep";
import "./PweepComponent.scss";
import { LikeOutlined, RetweetOutlined } from "@ant-design/icons";

type Props = {
  pweep: Pweep;
};

export const PweepComponent = ({ pweep }: Props) => {
  const { user } = useUser();
  return (
    <div className="pweep">
      <div className="pweep__profile-image-container">
        <img src={user.image} className="pweep__profile-image" />
      </div>
      <div className="pweep__body">
        <div className="pweep__body-header">
          <div className="pweep__username">{user.name}</div>
          <div className="pweep__handle">@{user.handle}</div>
          <div className="pweep__creation-date">{pweep.createdAt}</div>
        </div>
        <div className="pweep__body-content">{pweep.content}</div>
        <div className="pweep__body-controls">
          <LikeOutlined />
          <RetweetOutlined />
        </div>
      </div>
    </div>
  );
};
