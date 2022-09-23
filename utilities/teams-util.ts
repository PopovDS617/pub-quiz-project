type Year = {
  [season: string]: {
    games: number;
    points: number;
  };
};

type Argument = {
  [key: string]: Year;
};

export const getGames = (
  arg: Argument,
  year: number | string,
  season: string
) => {
  let gamesCount = 0;

  if (year === 'all' && season === 'all') {
    const year2021 = arg.year2021;
    const year2022 = arg.year2022;

    const values2021 = Object.values(year2021);
    const values2022 = Object.values(year2022);
    const allValues = values2021.concat(values2022);

    allValues.forEach((element) => {
      gamesCount += +element.games;
    });
  } else if (season === 'all' && year !== 'all') {
    const yearObject = arg[`year${year}`];

    const yearValues = Object.values(yearObject);

    yearValues.forEach((element) => {
      gamesCount += +element.games;
    });
  } else if (season !== 'all' && year !== 'all') {
    const yearName = `year${year}`;
    gamesCount = arg[yearName][season].games;
  }

  return gamesCount;
};

export const getPoints = (
  arg: Argument,
  year: number | string,
  season: string
) => {
  let pointsCount = 0;

  if (year === 'all' && season === 'all') {
    const year2021 = arg.year2021;
    const year2022 = arg.year2022;

    const values2021 = Object.values(year2021);
    const values2022 = Object.values(year2022);
    const allValues = values2021.concat(values2022);

    allValues.forEach((element) => {
      pointsCount += +element.points;
    });
  } else if (season === 'all' && year !== 'all') {
    const yearObject = arg[`year${year}`];

    const yearValues = Object.values(yearObject);

    yearValues.forEach((element) => {
      pointsCount += +element.points;
    });
  } else if (season !== 'all' && year !== 'all') {
    const yearName = `year${year}`;
    pointsCount = arg[yearName][season].points;
  }

  return pointsCount;
};
