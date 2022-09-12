import React, { useEffect, useState } from 'react';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventSearch';
import { fetchEvents } from '../../utilities/fetch-util';
import { useRouter } from 'next/router';
import { EventItemType } from '../../models';
import Head from 'next/head';
import Spinner from '../../components/UI/Spinner';

type AllEventsPageProps = {
  events: EventItemType[];
};

const AllEventsPage = (props: AllEventsPageProps) => {
  const [events, setEvents] = useState([]);
  const router = useRouter();

  const filterEvents = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  useEffect(() => {
    async function fetchData() {
      const eventList: any = await fetchEvents();
      setEvents(eventList);
    }
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Смузи квиз</title>
        <meta name="desription" content="Смузи квиз Ростов-на-Дону" />
      </Head>
      <div className="main-list-container">
        <EventSearch onSearch={filterEvents} />
        {!events ? <Spinner /> : <EventList items={events} />}
      </div>
    </React.Fragment>
  );
};

// export async function getStaticProps() {
//   const eventList = await fetchEvents();

//   if (!eventList) {
//     return <Spinner />;
//   }

//   return {
//     props: {
//       events: eventList,
//     },
//     revalidate: 1800,
//   };
// }

export default AllEventsPage;
