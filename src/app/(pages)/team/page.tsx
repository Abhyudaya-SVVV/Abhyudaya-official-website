import React from "react";
import { founders, boardMembers, coreMembers } from "../../../../public/data/people";
import TeamSection from "@/components/TeamSection";

const Team = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <TeamSection title="Founders" team={founders} />
      <TeamSection title="Board Members" team={boardMembers} />
      <TeamSection title="Core Members" team={coreMembers} />
    </div>
  );
};

export default Team;
