import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { EventItemType } from '../../models';
import { getEventById } from '../../utilities/fetch-util';
import EventSummary from '../../components/event-detail/EventSummary';
import EventLogistics from '../../components/event-detail/EventLogisitcs';
import EventContent from '../../components/event-detail/EventContent';
import { fetchEvents } from '../../utilities/fetch-util';
import { motion } from 'framer-motion';
type EventDetailProps = {
  event: EventItemType;
};

const EventDetailPage = (props: EventDetailProps) => {
  const options = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 },
  };

  const event: any = props.event;

  if (!event) {
    return <h1>загрузка . . .</h1>;
  }

  return (
    <motion.div
      className="event-details-container"
      variants={options}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.8, delay: 0.1 }}
    >
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
    </motion.div>
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
    fallback: false,
  };
};

export default EventDetailPage;
