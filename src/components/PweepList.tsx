import { Pweep } from "../types/Pweep";
import { PweepComponent } from "./PweepComponent";

type Props = {
  pweeps: Pweep[];
};

export const PweepList = ({ pweeps }: Props) => {
  return (
    <div>
      {pweeps.map((pweep) => (
        <PweepComponent pweep={pweep} />
      ))}
    </div>
  );
};
