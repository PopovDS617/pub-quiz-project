import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
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
  const event: any = props.event;

  if (!event) {
    return <h1>загрузка . . .</h1>;
  }

  return (
    <div className="event-details-container">
      <div className="event-details-item-container">
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
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const eventId: any = context.params?.eventId;
  const eventItem = await getEventById(eventId);
  return {
    props: {
      event: eventItem,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const events = await fetchEvents();
  const paths = events.map((event) => {
    return { params: { eventId: event.id } };
  });

  return {
    paths: paths,
    fallback: true,
  };
};

export default EventDetailPage;
