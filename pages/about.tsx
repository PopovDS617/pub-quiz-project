import React, { useContext } from 'react';
import PhoneIcon from '../components/UI/Icons/phone-icon';
import Regicon from '../components/UI/Icons/reg-icon';
import Head from 'next/head';
import NewsSubscription from '../components/input/NewsSubscription';
import Notification from '../components/notification/Notification';
import NotificationContext from '../store/notification-context';
import { motion } from 'framer-motion';

const About = () => {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;

  const options = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 },
  };

  return (
    <React.Fragment>
      <Head>
        <title>Просто Квиз - контакты</title>
        <meta
          name="desription"
          content="телефон +7 (928) 000-00-00 группа вконтакте https://vk.com/xxx"
        />
      </Head>

      <motion.div
        className="contacts-container"
        variants={options}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <section className="contacts-section">
          <h1>Наши контакты:</h1>
          <div className="contacts-item">
            <span className="contacts-icon">
              <PhoneIcon />
            </span>

            <span>+7 (928) 000-00-00</span>
          </div>
          <div className="contacts-item">
            <span className="contacts-icon">
              <Regicon />
            </span>
            <span>
              <a href=""> группа Вконтакте </a>
            </span>
          </div>
        </section>
        <NewsSubscription />
        {activeNotification && (
          <Notification
            title={activeNotification.title}
            message={activeNotification.message}
            status={activeNotification.status}
          />
        )}
      </motion.div>
    </React.Fragment>
  );
};

export default About;
