import { User } from "../types/User";
import { Pweep } from "../types/Pweep";

type Props = {
  user: User;
  pweep: Pweep;
};

export const PweepComponent = ({ user, pweep }: Props) => {
  return (
    <div>
      <div>
        <img src={user.image} />
        <div>{user.name}</div>
        <div>{user.handle}</div>
        <div>{pweep.createdAt}</div>
      </div>
      <div>
        {pweep.content}
      </div>
    </div>
  );
};
