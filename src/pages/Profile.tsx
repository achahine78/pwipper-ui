import { useEffect, useState } from "react";
import { ProfileHeader } from "../components/ProfileHeader";
import { PweepList } from "../components/PweepList";
import { privateAxios } from "../api";
import { useUser } from "../hooks/useUser";

export const Profile = () => {
  const [pweeps, setPweeps] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    privateAxios.get(`/api/pweeps/${user.id}`).then(({ data }) => {
      setPweeps(data.pweeps);
    });

    privateAxios.get(`/api/followers/${user.id}`).then(({ data }) => {
      setFollowers(data.followers);
    });

    privateAxios.get(`/api/following/${user.id}`).then(({ data }) => {
      setFollowing(data.following);
    });
  }, []);

  return (
    <div>
      <ProfileHeader
        profileUser={user}
        followers={followers}
        following={following}
      />
      <PweepList pweeps={pweeps} />
    </div>
  );
};
