import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { fetchTeams } from '../utilities/fetch-util';
import TeamTable from '../components/teams/TeamTable';
import { getPoints, getGames } from '../utilities/teams-util';
import FilterSelectors from '../components/teams/FilterSelectors';
import { motion } from 'framer-motion';

type TeamProp = {
  id: string;
  teamName: string;
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
  const options = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 },
  };

  const sortTeams = (sortMode: any) => {
    let result = props.teams.map((team) => {
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
      result = result.sort((a, b) => (a.allGames > b.allGames ? -1 : 1));
    }

    return result;
  };

  const [sortState, setSortState] = useState({
    type: 'byPoints',
    year: 'all',
    season: 'all',
  });

  // const slicedTeams = sortedTeams.slice(0, 10);
  const [teamList, setTeamList] = useState(props.teams);
  const [searchText, setSearchText] = useState('');

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const filteredTeams = props.teams.filter((team) =>
      team.teamName.toLowerCase().includes(searchText.toLowerCase())
    );

    setTeamList(filteredTeams);
  };

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  const filterHandler = (selected: typeof sortState) => {
    setSortState((prev) => ({
      ...prev,
      season: selected.season,
      year: selected.year,
    }));
    setSearchText('');
  };

  const sortHandler = (type: string) => {
    setSortState((prev) => ({
      ...prev,
      type,
    }));
  };

  useEffect(() => {
    setTeamList(sortTeams(sortState));
  }, [sortState]);

  useEffect(() => {
    if (searchText.length === 0) {
      setTeamList(sortTeams(sortState));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText.length, sortState]);

  return (
    <motion.div
      className="rating-container"
      variants={options}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      <form className="team-search-form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="название команды"
          onChange={inputHandler}
          value={searchText}
        />
        <button disabled={searchText.length <= 2 ? true : false}>найти</button>
      </form>
      <FilterSelectors onFilterTeams={filterHandler} />
      <TeamTable teams={teamList} sortState={sortState} onSort={sortHandler} />
    </motion.div>
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
    revalidate: 1800,
  };
};

export default RatingPage;
