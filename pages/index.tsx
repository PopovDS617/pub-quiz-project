import React from 'react';
import Head from 'next/head';

import Button from '../components/UI/Button';
import Spinner from '../components/UI/Spinner';

const HomePage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Просто Квиз</title>
        <meta name="desription" content="Просто квиз Ростов-на-Дону" />
      </Head>

      <div className="home-container">
        <section className="home-section">
          <div className="home-spinner">
            <Spinner />
          </div>
          <section className="home-text-section">
            <p className="home-text-desription">
              {`Наш квиз  - это коктейль из интеллектуальных игр!`}
            </p>
            <p>{`7 туров `}</p>
            <p>{`2,5 часа драйва`}</p>
            <p>{`> 50 интересных тем`}</p>
            <p>{`2-10 человек в команде`}</p>

            <p>{`> 100 квизеров на каждой игре`}</p>
          </section>

          <Button link={'/events'} style="btn-aux">
            выбрать квиз
          </Button>
        </section>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
