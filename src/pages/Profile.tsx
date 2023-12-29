import { useEffect, useState } from "react";
import { ProfileHeader } from "../components/ProfileHeader";
import { PweepList } from "../components/PweepList";
import { privateAxios } from "../api";
import { useUser } from "../hooks/useUser";

export const Profile = () => {
  const [pweeps, setPweeps] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    privateAxios.get(`/api/pweeps/${user.id}`).then(({ data }) => {
      setPweeps(data.pweeps);
    });
  }, []);
  return (
    <div>
      <ProfileHeader user={user} />
      <PweepList pweeps={pweeps} />
    </div>
  );
};
