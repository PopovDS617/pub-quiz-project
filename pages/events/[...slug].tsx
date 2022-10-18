import React from 'react';
import { getFilteredEvents } from '../../utilities/fetch-util';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventSearch';
import Button from '../../components/UI/Button';
import ErrorAlert from '../../components/UI/ErrorAlert';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { EventItemType } from '../../models';
import { GetServerSidePropsContext } from 'next';
import { motion } from 'framer-motion';

type FilteredEventsPageProps = {
  hasError?: boolean;
  filteredEvents?: EventItemType[];
};

const FilteredEventsPage = (props: FilteredEventsPageProps) => {
  const options = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 },
  };

  const router = useRouter();

  const pageHead = (
    <Head>
      <title>Просто квиз</title>
      <meta name="desription" content="Просто квиз Ростов-на-Дону" />
    </Head>
  );

  if (props.hasError) {
    return (
      <React.Fragment>
        {pageHead}
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

  if (!props.filteredEvents || props.filteredEvents.length === 0) {
    return (
      <React.Fragment>
        {pageHead}
        <ErrorAlert>
          <p className="filter-fail">ничего не найдено</p>
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
    <React.Fragment>
      {pageHead}
      <motion.div
        variants={options}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <EventSearch onSearch={filterEvents} />
        <EventList items={props.filteredEvents} />
      </motion.div>
    </React.Fragment>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { params } = context;

  const filterData = params?.slug;

  if (!filterData) {
    return <p>Загрузка . . .</p>;
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
    return { props: { hasError: true } };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      filteredEvents: filteredEvents,
    },
  };
};

export default FilteredEventsPage;
