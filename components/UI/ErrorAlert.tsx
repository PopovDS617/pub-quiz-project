import { PropsWithChildren } from 'react';

function ErrorAlert(props: PropsWithChildren) {
  return <div className="alert">{props.children}</div>;
}

export default ErrorAlert;
