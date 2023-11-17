import { PostPweep } from "../components/PostPweep";
import { PweepList } from "../components/PweepList";
import { pweeps, user } from "../mockData";

export const Homepage = () => {
  return (
    <div>
      <PostPweep user={user} />
      <PweepList pweeps={pweeps} />
    </div>
  );
};
