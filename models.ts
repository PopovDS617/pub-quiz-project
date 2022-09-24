export type EventItemType = {
  key?: string;
  id?: string;
  title?: string;
  description?: string;
  location?: string;
  date?: string;
  image?: string;
  isFeatured?: boolean;
};

export type TeamType = {
  id: string;
  name: string;
  points: {
    [year: string]: {
      [season: string]: {
        games: number;
        points: number;
      };
    };
  };
  allGames: number;
  allPoints: number;
};
