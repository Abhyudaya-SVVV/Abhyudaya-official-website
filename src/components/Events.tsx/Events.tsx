import EventCard from "./EventCard"
import { events } from "../../../public/data/upcomingEvent"

const Events = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {events.map((event) => (
        <EventCard
          key={event.id}
          heading={event.heading}
          desc={event.desc}
          img={event.img}
        />
      ))}
    </div>
  )
}

export default Events

