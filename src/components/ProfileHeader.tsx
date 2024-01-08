import { privateAxios } from "../api";
import { useUser } from "../hooks/useUser";
import { User } from "../types/User";
import "./ProfileHeader.scss";
import { Button } from "./ui/Button";

type Props = {
  profileUser: User;
  following: any[];
  followers: any[];
  onFollowSuccess?: () => void;
  onUnfollowSuccess?: () => void;
};

export const ProfileHeader = ({
  profileUser,
  followers,
  following,
  onFollowSuccess,
  onUnfollowSuccess,
}: Props) => {
  const { user } = useUser();
  const isOwnProfile = user.id === profileUser.id;
  const isFollowing = followers.some(
    (follow) => follow.followedById === user.id
  );

  const followUser = () => {
    privateAxios
      .post("/api/follow", {
        followedBy: user.id,
        following: profileUser.id,
      })
      .then((response) => {
        if (response.status === 200 && typeof onFollowSuccess === "function") {
          onFollowSuccess();
        }
      });
  };

  const unfollowUser = () => {
    privateAxios
      .post("/api/unfollow", {
        followedBy: user.id,
        following: profileUser.id,
      })
      .then((response) => {
        if (
          response.status === 200 &&
          typeof onUnfollowSuccess === "function"
        ) {
          onUnfollowSuccess();
        }
      });
  };

  const renderFollowButton = () => {
    if (!isOwnProfile) {
      return isFollowing ? (
        <Button label="Unfollow" onClick={unfollowUser} />
      ) : (
        <Button label="Follow" onClick={followUser} />
      );
    }
  };
  return (
    <div className="profile-header">
      <img src={profileUser.image} className="profile-header__image" />
      <div className="profile-header__username">{profileUser.username}</div>
      <div className="profile-header__handle">@{profileUser.handle}</div>
      <div className="profile-header__bio">{profileUser.bio}</div>
      {renderFollowButton()}
      <div>
        <span className="profile-header__follow-count-container">
          <span className="profile-header__follow-count">
            {following.length}
          </span>
          <span className="profile-header__follow-count-label">Following</span>
        </span>
        <span className="profile-header__follow-count-container">
          <span className="profile-header__follow-count">
            {followers.length}
          </span>
          <span className="profile-header__follow-count-label">Followers</span>
        </span>
      </div>
    </div>
  );
};
