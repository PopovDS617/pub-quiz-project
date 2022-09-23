import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { fetchTeams } from '../utilities/fetch-util';
import TeamTable from '../components/teams/TeamTable';
import { getPoints, getGames } from '../utilities/teams-util';

type TeamProp = {
  id: string;
  name: string;
  allPoints: number;
  allGames: number;
  points: {
    [year: string]: {
      [season: string]: {
        games: number;
        points: number;
      };
    };
  };
};

type Props = {
  teams: TeamProp[];
};

const RatingPage = (props: Props) => {
  const sortHandler = (sortMode: any) => {
    let result = props.teams.map((team, index) => {
      return {
        ...team,

        allGames: getGames(team.points, sortMode.year, sortMode.season),
        allPoints: getPoints(team.points, sortMode.year, sortMode.season),
      };
    });

    if (sortMode.type === 'byPoints') {
      result = result.sort((a, b) => (a.allPoints > b.allPoints ? -1 : 1));
    }
    if (sortMode.type === 'byGames') {
      result = result.sort((a, b) => (a.allGames - b.allGames ? -1 : 1));
    }

    return result;
  };

  const [sortState, setSortState] = useState({
    type: 'byPoints',
    year: 'all',
    season: 'all',
  });
  const sortedTeams = sortHandler(sortState);
  const slicedTeams = sortedTeams.slice(0, 10);
  const [teamList, setTeamList] = useState(slicedTeams);
  const [searchText, setSearchText] = useState('');

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const filteredTeams = props.teams.filter((team) =>
      team.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setTeamList(filteredTeams);
  };

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    if (searchText.length <= 2) {
      setTeamList(slicedTeams);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText.length]);

  return (
    <div className="rating-container">
      <form className="team-search-form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="название команды"
          onChange={inputHandler}
          value={searchText}
        />
        <button disabled={searchText.length <= 2 ? true : false}>найти</button>
      </form>

      <TeamTable teams={teamList} sortState={sortState} />
    </div>
  );
};

export const getStaticProps = async () => {
  const teams = await fetchTeams();

  const mappedTeams = teams.map((team) => {
    return {
      ...team,
      allGames: getGames(team.points, 'all', 'all'),
      allPoints: getPoints(team.points, 'all', 'all'),
    };
  });

  return {
    props: {
      teams: mappedTeams,
    },
  };
};

export default RatingPage;
