import { turret } from "@/app/(pages)/page";
import TeamCard from "./TeamCard";

type Person = {
  id: number;
  img: string;
  name: string;
  post: string;
};

type TeamSectionProps = {
  team: Array<Person>;
};

const TeamSection = ({ team }: TeamSectionProps) => {
  const isBoardMember = team[0].post === "President";
  return (
    <section className="w-11/12 mx-auto flex flex-col items-center gap-y-4 ">
      <h1
        className={`text-3xl text-center lg:text-start lg:text-4xl font-bold ${turret.className}`}
      >
        {isBoardMember ? "Board Member - Team" : "Our Team"}
      </h1>
      <div className="flex justify-center gap-5 md:gap-x-16 md:gap-y-8 flex-wrap ">
        {team?.map((person) => (
          <TeamCard key={person.id} person={person} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;