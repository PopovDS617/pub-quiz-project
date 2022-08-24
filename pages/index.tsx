/* eslint-disable react/no-unescaped-entities */
import { getFeaturedEvents } from '../utilities/handle-dummy-data';
import EventList from '../components/events/EventList';
import Button from '../components/UI/Button';

const HomePage = () => {
  return (
    <div className="home-container">
      <section className="home-section">
        <img src="/images/icon-transformed.png" alt="смузи логотип" />
        <p>
          Квиз "Смузи" - это коктейль из интеллектуальных игр, который расширяет
          кругозор, делает ум гибче, острее, а круг твоих друзей шире. Собери
          команду от 1 до 10 человек, захвати с собой хорошее настроение и
          приходи к нам.
        </p>
        <Button link={'/events'} style="btn-aux">
          выбрать квиз
        </Button>
      </section>
    </div>
  );
};

export default HomePage;
