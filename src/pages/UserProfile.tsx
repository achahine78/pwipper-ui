import { useEffect, useState } from "react";
import { ProfileHeader } from "../components/ProfileHeader";
import { PweepList } from "../components/PweepList";
import { privateAxios } from "../api";
import { useParams } from "react-router-dom";
import { User } from "../types/User";

export const UserProfile = () => {
  const [pweeps, setPweeps] = useState([]);

  const { handle } = useParams();

  const [profileUser, setProfileUser] = useState<undefined | User>();

  useEffect(() => {
    privateAxios.get(`/api/user/${handle}`).then(({ data }) => {
      setProfileUser(data);
      privateAxios.get(`/api/pweeps/${data.id}`).then((response) => {
        setPweeps(response.data.pweeps);
      });
    });
  }, []);
  return (
    <div>
      {profileUser && <ProfileHeader user={profileUser} />}
      <PweepList pweeps={pweeps} />
    </div>
  );
};
