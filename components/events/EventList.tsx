import React from 'react';
import { EventItemType } from '../../models';
import EventItem from './EventItem';

type EventListProps = {
  items: EventItemType[];
};

const EventList = (props: EventListProps) => {
  return (
    <ul className="event-list">
      {props?.items &&
        props.items.map((el) => (
          <EventItem
            id={el.id}
            key={el.id}
            title={el.title}
            date={el.date}
            image={el.image}
            location={el.location}
          />
        ))}
    </ul>
  );
};

export default EventList;
