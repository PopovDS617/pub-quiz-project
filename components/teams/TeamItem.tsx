import React, { Fragment } from 'react';

type Props = {
  place: number;
  teamName: string;
  games: number;
  points: number;
};

const TeamItem = (props: Props) => {
  const { teamName, games, points, place } = props;

  return (
    <Fragment>
      <div className="rating-team-name">
        {place}. {teamName}
      </div>
      <div className="rating-team-games">{games}</div>
      <div className="rating-team-points">{points}</div>
    </Fragment>
  );
};

export default TeamItem;
