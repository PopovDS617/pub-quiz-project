import { ReactNode } from 'react';
import AddressIcon from '../UI/Icons/address-icon';
import DateIcon from '../UI/Icons/date-icon';
import LogisticsItem from './LogisticsItem';

type EventLogisticsProps = {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
};

const EventLogistics = (props: EventLogisticsProps) => {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className="event-details-logistics">
      <div className="event-details-logistics-image">
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className="event-details-logistics-list">
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};

export default EventLogistics;
