import { PropsWithChildren } from 'react';

const EventContent = (props: PropsWithChildren) => {
  return <section className="event-details-content">{props.children}</section>;
};

export default EventContent;
