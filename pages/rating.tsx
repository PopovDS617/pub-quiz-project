import React from 'react';
import TeamItem from '../components/teams/TeamItem';
import { TeamType } from '../models';
import { fetchTeams } from '../utilities/fetch-util';
import { getGames, getPoints } from '../utilities/teams-util';
import SearchBar from '../components/input/SearchBar';

type Props = {
  teams: TeamType[];
};

const RatingPage = (props: Props) => {
  return (
    <div className="rating-container">
      <SearchBar />

      <div className="rating-body-container">
        <div className="rating-head-row">
          <div className="rating-head-name">Название</div>
          <div className="rating-head-games">Игры</div>
          <div className="rating-head-points">Баллы</div>
        </div>
        {props.teams.map((team) => (
          <div className="rating-row" key={Math.random() * 100}>
            <TeamItem
              name={team.name}
              games={getGames(team.points, 'all', 'all')}
              points={getPoints(team.points, 'all', 'all')}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const teams = await fetchTeams();

  return {
    props: {
      teams: teams,
    },
  };
};

export default RatingPage;
