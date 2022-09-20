import React from 'react';
import { getGames, getPoints } from '../../utilities/teams-util';
import TeamItem from './TeamItem';
import { TeamType } from '../../models';

type Props = {
  teams: TeamType[];
  sortState: {
    year: string | number;
    type: string;
    season: string;
  };
};

const TeamTable = (props: Props) => {
  const { year, season } = props.sortState;

  const teamNotFound = (
    <div className="rating-row" key={Math.random() * 100}>
      нет такой команды
    </div>
  );

  return (
    <div className="rating-body-container">
      <div className="rating-head-row">
        <div className="rating-head-name">Название</div>
        <div className="rating-head-games">Игры</div>
        <div className="rating-head-points">Баллы</div>
      </div>
      {props.teams.length === 0
        ? teamNotFound
        : props.teams.map((team, index) => (
            <div className="rating-row" key={Math.random() * 100}>
              <TeamItem
                place={index + 1}
                name={team.name}
                games={getGames(
                  team.points,
                  props.sortState.year,
                  props.sortState.season
                )}
                points={getPoints(team.points, year, season)}
              />
            </div>
          ))}
    </div>
  );
};

export default TeamTable;
