import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  useState,
} from 'react';

type Props = {};

const NewsSubscription = (props: Props) => {
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

    fetch('/api/newsletter-sub', {
      method: 'POST',
      body: JSON.stringify({
        email: enteredText,
      }),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => response.json());

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
