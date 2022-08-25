import React from 'react';
import PhoneIcon from '../components/UI/Icons/phone-icon';
import Regicon from '../components/UI/Icons/reg-icon';
import Head from 'next/head';
import NewsSubscription from '../components/input/NewsSubscription';

const about = () => {
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
      </div>
    </React.Fragment>
  );
};

export default about;
