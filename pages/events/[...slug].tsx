import React from 'react';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../utilities/handle-dummy-data';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventSearch';
import Button from '../../components/UI/Button';
import ErrorAlert from '../../components/UI/ErrorAlert';

const FilteredEventsPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="loading">загружаемся...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <React.Fragment>
        <ErrorAlert>
          <p>выбран неверный период</p>
        </ErrorAlert>
        <div className="filter-fail">
          <Button link="/events" style="btn-aux">
            посмотреть все квизы
          </Button>
        </div>
      </React.Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <React.Fragment>
        <ErrorAlert>
          {' '}
          <p className="filter-fail">ничего не найдено</p>{' '}
        </ErrorAlert>
        <div className="filter-fail">
          <Button link="/events" style="btn-aux">
            посмотреть все квизы
          </Button>
        </div>
      </React.Fragment>
    );
  }

  const filterEvents = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div>
      <EventSearch onSearch={filterEvents} />
      <EventList items={filteredEvents} />
    </div>
  );
};

export default FilteredEventsPage;
