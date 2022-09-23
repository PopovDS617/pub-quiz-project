import React, { Fragment } from 'react';
import { TeamType } from '../../models';

type Props = {
  place: number;
  name: string;
  games: number;
  points: number;
};

const TeamItem = (props: Props) => {
  const { name, games, points, place } = props;
  return (
    <Fragment>
      <div className="rating-team-name">
        {place}. {name}
      </div>
      <div className="rating-team-games">{games}</div>
      <div className="rating-team-points">{points}</div>
    </Fragment>
  );
};

export default TeamItem;
