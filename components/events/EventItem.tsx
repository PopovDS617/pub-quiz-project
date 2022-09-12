import React from 'react';
import { EventItemType } from '../../models';
import Image from 'next/image';
import Button from '../UI/Button';
import DateIcon from '../UI/Icons/date-icon';
import ArrowRightIcon from '../UI/Icons/arrow-right-icon';
import AddressIcon from '../UI/Icons/address-icon';

const EventItem = (props: EventItemType) => {
  const { title, image, date, location, id } = props;

  const readableDate = new Date(date!).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location!.replace(', ', '\n');
  const detailsLink = `/events/${id}`;

  return (
    <li key={id} className="event-item">
      <div className="event-image-container">
        <Image
          src={'/' + image}
          alt={title}
          layout="fill"
          objectFit="cover"
          // width={900}
          // height={300}
          // objectFit="cover"
          sizes="(max-width: 400px) 300px,
          (max-width: 768px) 450px,
          (max-width: 1200px) 900px"
          objectPosition="100% 29%"
          quality="70"
          placeholder="blur"
          blurDataURL={'/' + image}
        />
      </div>

      <div className="event-item-content">
        <div className="event-item-summary">
          <h2>{title}</h2>
          <div className="event-item-date">
            <DateIcon />
            <time>{readableDate}</time>
          </div>
          <div className="event-item-address">
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className="event-item-actions">
          <Button link={detailsLink} style="btn-main">
            <span> Подробнее</span>
            <span className="event-item-icon">
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
