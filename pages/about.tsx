import React, { useContext } from 'react';
import PhoneIcon from '../components/UI/Icons/phone-icon';
import Regicon from '../components/UI/Icons/reg-icon';
import Head from 'next/head';
import NewsSubscription from '../components/input/NewsSubscription';
import Notification from '../components/notification/Notification';
import NotificationContext from '../store/notification-context';

const About = () => {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;
  return (
    <React.Fragment>
      <Head>
        <title>Просто Квиз - контакты</title>
        <meta
          name="desription"
          content="телефон +7 (928) 000-00-00 группа вконтакте https://vk.com/xxx"
        />
      </Head>

      <div className="contacts-container">
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
      </div>
    </React.Fragment>
  );
};

export default About;
