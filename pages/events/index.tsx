import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventSearch';
import { fetchEvents } from '../../utilities/fetch-util';
import { useRouter } from 'next/router';
import { EventItemType } from '../../models';
import Head from 'next/head';
import React from 'react';
import { motion } from 'framer-motion';

type AllEventsPageProps = {
  events: EventItemType[];
};

const AllEventsPage = (props: AllEventsPageProps) => {
  const options = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 },
  };

  const router = useRouter();

  const filterEvents = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Просто квиз</title>
        <meta name="desription" content="Наш квиз Ростов-на-Дону" />
      </Head>
      <motion.div
        className="main-list-container"
        variants={options}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <EventSearch onSearch={filterEvents} />
        <EventList items={props.events} />
      </motion.div>
    </React.Fragment>
  );
};

export async function getStaticProps() {
  const eventList = await fetchEvents();

  return {
    props: {
      events: eventList,
    },
    revalidate: 1800,
  };
}

export default AllEventsPage;
