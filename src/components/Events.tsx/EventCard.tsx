import Image from "next/image";
import Button from "../common/Button";
import { StaticImageData } from "next/image";

type EventCardProps = {
  heading: string;
  desc: string;
  img: StaticImageData;
};

const EventCard = ({ heading, desc, img }: EventCardProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 justify-center items-center lg:items-start mb-16">
      <div className="lg:w-[45%] md:min-h-[350px] sm:border-8 sm:rounded-3xl overflow-hidden mt-2">
        <Image
          src={img}
          alt=""
          width={500}
          height={500}
          className="w-full md:w-[30vw] mx-auto h-auto object-cover"
        />
      </div>
      <div className="flex flex-col gap-10 md:w-1/2 lg:justify-evenly items-start h-full lg:w-[45%] md:px-10">
        <h1 className=" text-4xl border-4 border-rich-blue-border border-opacity-70 px-16 py-2 text-center rounded-2xl">
          {heading}
        </h1>
        <p className="text-lg">{desc}</p>
        {/* <Button text="RSVP NOW" rounded={false} linkTo="/" /> */}
      </div>
    </div>
  );
};

export default EventCard;