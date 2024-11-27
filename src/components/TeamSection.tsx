import React from "react";
import TeamCard from "./TeamCard";
import { Team } from "../../public/data/people";

type TeamSectionProps = {
  title: string;
  team: Array<Team>;
};

const TeamSection = ({ title, team }: TeamSectionProps) => {
  return (
    <section className="w-full text-center my-10">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {team.map((person) => (
          <TeamCard key={person.id} person={person} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
