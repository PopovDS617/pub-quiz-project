import React from 'react';

import TeamItem from './TeamItem';
import { TeamType } from '../../models';

type Props = {
  teams: TeamType[];
  sortState: {
    year: string | number;
    type: string;
    season: string;
  };
  onSort: (arg: string) => void;
};

const TeamTable = (props: Props) => {
  const teamNotFound = (
    <div className="rating-row" key={Math.random() * 100}>
      нет такой команды
    </div>
  );

  const sortByGames = () => {
    props.onSort('byGames');
  };
  const sortByPoints = () => {
    props.onSort('byPoints');
  };

  return (
    <div className="rating-body-container">
      <div className="rating-head-row">
        <div className="rating-head-name">Название</div>
        <div className="rating-head-games" onClick={sortByGames}>
          Игры
          {props.sortState.type === 'byGames' && (
            <span className="table-sort-arrow">▼</span>
          )}
        </div>
        <div className="rating-head-points" onClick={sortByPoints}>
          Баллы{' '}
          {props.sortState.type === 'byPoints' && (
            <span className="table-sort-arrow">▼</span>
          )}
        </div>
      </div>
      {props.teams.length === 0
        ? teamNotFound
        : props.teams.map((team, index) => {
            return (
              <div className="rating-row" key={Math.random() * 100}>
                <TeamItem
                  place={index + 1}
                  teamName={team.teamName}
                  games={team.allGames}
                  points={team.allPoints}
                />
              </div>
            );
          })}
    </div>
  );
};

export default TeamTable;
