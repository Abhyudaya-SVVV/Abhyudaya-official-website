import React from "react";
import { founders,coreMembers, Mentors } from "../../../../public/data/people";
import TeamSection from "@/components/TeamSection";

const Team = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <TeamSection title="Core Members" team={coreMembers} />
      <TeamSection title="Mentors" team={Mentors} />
      <TeamSection title="Founders" team={founders} />
    </div>
  );
};

export default Team;
