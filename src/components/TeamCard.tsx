import React from "react";
import Image from "next/image";
import { Team } from "../../public/data/people";

type TeamCardProp = {
  person: Team; // A single Team object
};

const TeamCard = ({ person }: TeamCardProp) => {
  const { img, name, post, linkedin } = person;

  return (
    <div className="bg-rich-blue-bgDark border-dashed border-4 rounded-xl border-rich-blue-border overflow-hidden w-full max-w-sm text-sm p-4 flex flex-col items-center">
      <div className="w-32 h-32 mb-4">
        <Image
          src={img}
          alt={`${name}'s photo`}
          width={128}
          height={128}
          className="rounded-full object-cover"
        />
      </div>
      <h2 className="font-semibold text-lg">{name}</h2>
      <p className="text-sm font-light">{post}</p>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        LinkedIn
      </a>
    </div>
  );
};

export default TeamCard;
