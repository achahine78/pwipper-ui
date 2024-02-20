import { useEffect, useState } from "react";
import { PostPweep } from "../components/PostPweep";
import { PweepList } from "../components/PweepList";
import { user } from "../mockData";
import { privateAxios } from "../api";

export const Homepage = () => {
  useEffect(() => {
    privateAxios.get("/api/timeline").then(({ data }) => {
      setPweeps(data.timeline);
    });
  }, []);
  const [pweeps, setPweeps] = useState([]);
  return (
    <div>
      <PostPweep user={user} />
      <PweepList pweeps={pweeps} />
    </div>
  );
};
