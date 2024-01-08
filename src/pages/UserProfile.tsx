import { useEffect, useState } from "react";
import { ProfileHeader } from "../components/ProfileHeader";
import { PweepList } from "../components/PweepList";
import { privateAxios } from "../api";
import { useParams } from "react-router-dom";
import { User } from "../types/User";
import { useUser } from "../hooks/useUser";
import { Follow } from "../types/Follow";

export const UserProfile = () => {
  const [pweeps, setPweeps] = useState([]);

  const { handle } = useParams();
  const { user } = useUser();

  const [profileUser, setProfileUser] = useState<undefined | User>();
  const [followers, setFollowers] = useState<Follow[]>([]);
  const [following, setFollowing] = useState<Follow[]>([]);

  useEffect(() => {
    privateAxios.get(`/api/user/${handle}`).then(({ data }) => {
      setProfileUser(data);
      privateAxios.get(`/api/pweeps/${data.id}`).then((response) => {
        setPweeps(response.data.pweeps);
      });

      privateAxios.get(`/api/followers/${data.id}`).then(({ data }) => {
        setFollowers(data.followers);
      });

      privateAxios.get(`/api/following/${data.id}`).then(({ data }) => {
        setFollowing(data.following);
      });
    });
  }, []);

  const onFollowSuccess = () => {
    setFollowers([
      ...followers,
      {
        followingId: profileUser?.id || "",
        followedById: user.id,
        followedBy: user,
      },
    ]);
  };

  const onUnfollowSuccess = () => {
    setFollowers(
      [...followers].filter(
        (follower) => follower.followingId !== profileUser?.id
      )
    );
  };

  return (
    <div>
      {profileUser && (
        <ProfileHeader
          profileUser={profileUser}
          followers={followers}
          following={following}
          onFollowSuccess={onFollowSuccess}
          onUnfollowSuccess={onUnfollowSuccess}
        />
      )}
      <PweepList pweeps={pweeps} />
    </div>
  );
};
