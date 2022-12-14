import AddressIcon from '../UI/Icons/address-icon';
import DateIcon from '../UI/Icons/date-icon';
import LogisticsItem from './LogisticsItem';
import PaymentIcon from '../UI/Icons/payment-icon';
import ChatIcon from '../UI/Icons/chat-icon';
import RegIcon from '../UI/Icons/reg-icon';
import Image from 'next/image';

type EventLogisticsProps = {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
};

const EventLogistics = (props: EventLogisticsProps) => {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className="event-details-logistics">
      <div className="event-details-logistics-image">
        <Image
          src={`/${image}`}
          alt={imageAlt}
          layout="fill"
          sizes="(max-width: 400px) 180px,
          (max-width: 768px) 400px,
          (max-width: 1200px) 900px"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={'/images/blur.jpg'}
        />
      </div>
      <ul className="event-details-logistics-list">
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
        <LogisticsItem icon={PaymentIcon}>
          400 рублей с игрока (оплата на месте наличными или картой)
        </LogisticsItem>
        <LogisticsItem icon={RegIcon}>
          <a href="">ссылка для регистрации</a>
        </LogisticsItem>
        <LogisticsItem icon={ChatIcon}>
          Осталиcь вопросы?
          <a href=""> Пишите нам</a>
        </LogisticsItem>
      </ul>
    </section>
  );
};

export default EventLogistics;
