import { User } from "../types/User";
import './ProfileHeader.scss';

type Props = {
  user: User;
};

export const ProfileHeader = ({ user }: Props) => {
  return (
    <div className="profile-header">
      <img src={user.image} className="profile-header__image" />
      <div className="profile-header__username">{user.name}</div>
      <div className="profile-header__handle">@{user.handle}</div>
      <div className="profile-header__bio">{user.bio}</div>
      <div>
        <span className="profile-header__follow-count-container">
          <span className="profile-header__follow-count">{user.followingCount}</span>
          <span className="profile-header__follow-count-label">Following</span>
        </span>
        <span className="profile-header__follow-count-container">
          <span className="profile-header__follow-count">{user.followerCount}</span>
          <span className="profile-header__follow-count-label">Followers</span>
        </span>
      </div>
    </div>
  );
};
