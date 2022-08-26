import React, { useContext } from 'react';
import MainHeader from './MainHeader';
import Notification from '../notification/Notification';
import NotificationContext from '../../store/notification-context';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;

  return (
    <React.Fragment>
      <MainHeader />
      <main>{props.children}</main>

      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </React.Fragment>
  );
};

export default Layout;
