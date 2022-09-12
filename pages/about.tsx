import React, { useContext } from 'react';
import PhoneIcon from '../components/UI/Icons/phone-icon';
import Regicon from '../components/UI/Icons/reg-icon';
import Head from 'next/head';
import NewsSubscription from '../components/input/NewsSubscription';
import Notification from '../components/notification/Notification';
import NotificationContext from '../store/notification-context';

const about = () => {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;
  return (
    <React.Fragment>
      <Head>
        <title>Смузи квиз - контакты</title>
        <meta
          name="desription"
          content="телефон +7 (928) 966-49-10 группа вконтакте https://vk.com/smuzi_rostov"
        />
      </Head>

      <div className="contacts-container">
        <section className="contacts-section">
          <h1>Наши контакты:</h1>
          <div className="contacts-item">
            <span className="contacts-icon">
              <PhoneIcon />
            </span>

            <span>+7 (928) 966-49-10</span>
          </div>
          <div className="contacts-item">
            <span className="contacts-icon">
              <Regicon />
            </span>
            <span>
              <a href="https://vk.com/smuzi_rostov"> группа Вконтакте </a>
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

export default about;
