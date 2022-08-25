import React from 'react';
import { GetStaticProps } from 'next';
import { EventItemType } from '../../models';
import { getEventById } from '../../utilities/fetch-util';
import EventSummary from '../../components/event-detail/EventSummary';
import EventLogistics from '../../components/event-detail/EventLogisitcs';
import EventContent from '../../components/event-detail/EventContent';
import { fetchEvents } from '../../utilities/fetch-util';

type EventDetailProps = {
  event: EventItemType;
};

const EventDetailPage = (props: EventDetailProps) => {
  const event = props.event;

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

export const getStaticProps: GetStaticProps = async (context) => {
  const eventId = context.params?.eventId;
  const eventItem = await getEventById(eventId);
  return {
    props: {
      event: eventItem,
    },
  };
};

export async function getStaticPaths() {
  const events = await fetchEvents();
  const paths = events.map((event) => {
    return { params: { eventId: event.id } };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export default EventDetailPage;
