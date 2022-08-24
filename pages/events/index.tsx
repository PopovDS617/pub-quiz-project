import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventSearch';
import { getAllEvents } from '../../utilities/handle-dummy-data';
import { useRouter } from 'next/router';

const AllEventsPage = () => {
  const router = useRouter();
  const allEvents = getAllEvents();
  const filterEvents = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div>
      <EventSearch onSearch={filterEvents} />
      <EventList items={allEvents} />
    </div>
  );
};

export default AllEventsPage;
