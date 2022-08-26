import React, { ChangeEvent, FormEvent, useState, useContext } from 'react';
import NotificationContext from '../../store/notification-context';

const NewsSubscription = () => {
  const ctx = useContext(NotificationContext);

  const [enteredText, setEnteredText] = useState<string>('');

  let formIsValid = false;
  const emailTextHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredText(event.target.value);
  };

  if (
    enteredText &&
    enteredText.includes('@') &&
    enteredText.includes('.') &&
    enteredText.length > 3
  ) {
    formIsValid = true;
  }

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    if ((formIsValid = false)) {
      return;
    }

    ctx.showNotification({
      title: 'подписываемся...',
      message: 'оформляем подписку',
      status: 'pending',
    });

    fetch('/api/newsletter-sub', {
      method: 'POST',
      body: JSON.stringify({
        email: enteredText,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return response.json().then((data) => {
          throw new Error('что-то пошло не так');
        });
      })
      .then((data) => {
        ctx.showNotification({
          title: 'успешно!',
          message: 'подписка оформлена',
          status: 'success',
        });
      })
      .catch((error) => {
        ctx.showNotification({
          title: 'ошибка :(',
          message: 'что-то пошло не так',
          status: 'error',
        });
      });

    formIsValid = false;
    setEnteredText('');
  };

  return (
    <section className="newsletter">
      <h2>хочу знать о новых квизах раньше всех!</h2>
      <form onSubmit={submitHandler}>
        <div className="newsletter-control">
          <input
            type="text"
            id="email"
            placeholder="ваш e-mail"
            aria-label="Your email"
            onChange={emailTextHandler}
            value={enteredText}
          />
          <button disabled={!formIsValid}>подписаться</button>
        </div>
      </form>
      <p>{'и не забудьте указать знак @ и домен, например .ru'}</p>
    </section>
  );
};

export default NewsSubscription;
