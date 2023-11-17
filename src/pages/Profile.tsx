import { ProfileHeader } from "../components/ProfileHeader";
import { PweepList } from "../components/PweepList";
import { pweeps, user } from "../mockData";

export const Profile = () => {
  return (
    <div>
      <ProfileHeader user={user} />
      <PweepList pweeps={pweeps} />
    </div>
  );
};
