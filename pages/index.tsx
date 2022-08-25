import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Button from '../components/UI/Button';

const HomePage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Квиз Смузи</title>
        <meta name="desription" content="Смузи квиз Ростов-на-Дону" />
      </Head>

      <div className="home-container">
        <section className="home-section">
          <div className="home-img">
            <Image
              src="/images/icon-transformed.png"
              alt="смузи логотип"
              width={320}
              height={320}
              quality="90"
              layout="intrinsic"
              objectFit="cover"
            />
          </div>

          <p>
            {`Квиз "Смузи" - это коктейль из интеллектуальных игр, который
            расширяет кругозор, делает ум гибче, острее, а круг твоих друзей
            шире. Собери команду от 1 до 10 человек, захвати с собой хорошее
            настроение и приходи к нам.`}
          </p>
          <Button link={'/events'} style="btn-aux">
            выбрать квиз
          </Button>
        </section>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
