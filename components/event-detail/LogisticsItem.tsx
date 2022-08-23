import React from 'react';

type LogisctisItemProps = {
  icon: React.FC;
  children: React.ReactNode;
};

const LogisticsItem = (props: LogisctisItemProps) => {
  const { icon: Icon } = props;

  return (
    <li className="logistics-item">
      <span className="logistics-item-icon">
        <Icon />
      </span>
      <span>{props.children}</span>
    </li>
  );
};

export default LogisticsItem;
