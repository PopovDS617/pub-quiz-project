import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getEventById } from '../../utilities/handle-dummy-data';
import EventSummary from '../../components/event-detail/EventSummary';
import EventLogistics from '../../components/event-detail/EventLogisitcs';
import EventContent from '../../components/event-detail/EventContent';

const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <h1>Ничего не найдено</h1>;
  }

  return (
    <div className="event-details-container">
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </div>
  );
};
export default EventDetailPage;
