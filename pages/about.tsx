import React from 'react';
import PhoneIcon from '../components/UI/Icons/phone-icon';
import Regicon from '../components/UI/Icons/reg-icon';

const about = () => {
  return (
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
    </div>
  );
};

export default about;
