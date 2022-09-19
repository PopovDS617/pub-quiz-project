import React, { Fragment } from 'react';
import { TeamType } from '../../models';

type Props = {
  name: string;
  games: number;
  points: number;
};

const TeamItem = (props: Props) => {
  const { name, games, points } = props;
  return (
    <Fragment>
      <div className="rating-team-name">{name}</div>
      <div className="rating-team-games">{games}</div>
      <div className="rating-team-points">{points}</div>
    </Fragment>
  );
};

export default TeamItem;
