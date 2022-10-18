import React from 'react';
import Head from 'next/head';
import Button from '../components/UI/Button';
import Spinner from '../components/UI/Spinner';
import { motion } from 'framer-motion';

const HomePage = () => {
  const header = {
    hidden: { opacity: 0, x: 0, y: '-20' },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 },
  };

  const listItem = {
    hidden: { opacity: 0, y: 0, x: '-40' },
    enter: { opacity: 1, y: 0, x: 0 },
    exit: { opacity: 0, y: 0, x: 20 },
  };

  const pageOptions = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 },
  };

  const buttonOptions = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <React.Fragment>
      <Head>
        <title>Просто Квиз</title>
        <meta name="desription" content="Просто квиз Ростов-на-Дону" />
      </Head>

      <motion.div
        className="home-container"
        variants={pageOptions}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <section className="home-section">
          <div className="home-spinner">
            <Spinner />
          </div>
          <section className="home-text-section">
            <motion.p
              variants={header}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{ duration: 0.8, delay: 0.4 }}
              className="home-text-desription"
            >
              {`Наш квиз  - это коктейль из интеллектуальных игр!`}
            </motion.p>
            <motion.p
              variants={listItem}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{ duration: 0.8, delay: 0.6 }}
            >{`7 туров `}</motion.p>
            <motion.p
              variants={listItem}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{ duration: 0.8, delay: 0.7 }}
            >{`2,5 часа драйва`}</motion.p>
            <motion.p
              variants={listItem}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{ duration: 0.8, delay: 0.8 }}
            >{`> 50 интересных тем`}</motion.p>
            <motion.p
              variants={listItem}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{ duration: 0.8, delay: 0.9 }}
            >{`2-10 человек в команде`}</motion.p>

            <motion.p
              variants={listItem}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{ duration: 0.8, delay: 1 }}
            >{`> 100 квизеров на каждой игре`}</motion.p>
          </section>
          <motion.div
            variants={buttonOptions}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <Button link={'/events'} style="btn-aux">
              выбрать квиз
            </Button>
          </motion.div>
        </section>
      </motion.div>
    </React.Fragment>
  );
};

export default HomePage;
