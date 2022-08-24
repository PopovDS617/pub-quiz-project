import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventSearch';
import { getAllEvents } from '../../utilities/handle-dummy-data';
import { useRouter } from 'next/router';
import { EventItemType } from '../../models';

type AllEventsPageProps = {
  items: EventItemType[];
};

const AllEventsPage = (props: AllEventsPageProps) => {
  const router = useRouter();

  const filterEvents = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div>
      <EventSearch onSearch={filterEvents} />
      <EventList items={props.items} />
    </div>
  );
};

export async function getStaticProps() {
  const allEvents = getAllEvents();

  return { props: { items: allEvents } };
}

export default AllEventsPage;
