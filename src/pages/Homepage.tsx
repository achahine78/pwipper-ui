import { PweepComponent } from "../components/PweepComponent";
import { Pweep } from "../types/Pweep";
import { User } from "../types/User";

const user: User = {
    id: 'user',
    name: 'achahine78',
    image: 'https://picsum.photos/200',
    handle: 'achahine78',
    bio: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
}

const pweep: Pweep = {
    id: 'pweep',
    createdAt: 'whatever',
    content: 'shu lshabezz shu lshabezz shu lshabezz shu lshabezz shu lshabezz shu lshabezz shu lshabezz shu lshabezz',
    likes: 123,
    repweeps: 400,
}

export const Homepage = () => {
    return (
        <div>
            <PweepComponent user={user} pweep={pweep} />
        </div>
    )
};