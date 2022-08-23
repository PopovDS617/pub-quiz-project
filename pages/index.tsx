import { getFeaturedEvents } from '../utilities/handle-dummy-data';
import EventList from '../components/events/EventList';

const HomePage = () => {
  const allEvents = getFeaturedEvents();

  return (
    <div>
      <h1 className="main-title">Ближайшие квизы</h1>
      <EventList items={allEvents} />
    </div>
  );
};

export default HomePage;
