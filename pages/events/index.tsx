import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventSearch';
import { fetchEvents } from '../../utilities/fetch-util';
import { useRouter } from 'next/router';
import { EventItemType } from '../../models';
import Head from 'next/head';
import React from 'react';

type AllEventsPageProps = {
  events: EventItemType[];
};

const AllEventsPage = (props: AllEventsPageProps) => {
  const router = useRouter();

  const filterEvents = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Смузи квиз</title>
        <meta name="desription" content="Смузи квиз Ростов-на-Дону" />
      </Head>
      <div className="main-list-container">
        <EventSearch onSearch={filterEvents} />
        <EventList items={props.events} />
      </div>
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
