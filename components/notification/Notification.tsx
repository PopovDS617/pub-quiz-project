import React, { useContext } from 'react';

import NotificationContext from '../../store/notification-context';
type NotificationProps = {
  title: string;
  message: string;
  status: string;
};

function Notification(props: NotificationProps) {
  const ctx = useContext(NotificationContext);

  let statusStyles = '';

  if (props.status === 'success') {
    statusStyles = 'status-success';
  }

  if (props.status === 'error') {
    statusStyles = 'status-error';
  }

  if (props.status === 'pending') {
    statusStyles = 'status-pending';
  }

  const activeStyles = `notification ${statusStyles}`;

  return (
    <div className={activeStyles} onClick={ctx.hideNotification}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </div>
  );
}

export default Notification;
