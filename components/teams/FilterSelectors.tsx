import React, { useState, ChangeEvent, FormEvent } from 'react';
import Button from '../UI/Button';

type Props = {
  onFilterTeams: (selected: any) => void;
};

const FilterSelectors = (props: Props) => {
  const [selectedPeriod, setSelectedPeriod] = useState({
    year: 'all',
    season: 'all',
  });

  const selectPeriodHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPeriod((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (selectedPeriod.year === 'all' && selectedPeriod.season !== 'all') {
      setSelectedPeriod((prev) => ({
        ...prev,
        year: '2022',
      }));
      props.onFilterTeams({
        year: '2022',
        season: selectedPeriod.season,
      });
    } else {
      props.onFilterTeams(selectedPeriod);
    }
  };

  return (
    <div className="event-filter-container">
      <form className="event-filter-form" onSubmit={submitHandler}>
        <div className="event-filter-controls">
          <div className="event-filter-control">
            <label htmlFor="year">год</label>
            <select
              name="year"
              defaultValue="all"
              id="year"
              onChange={selectPeriodHandler}
              value={selectedPeriod.year}
            >
              <option value="all">все</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
          <div className="event-filter-control">
            <label htmlFor="month">месяц</label>
            <select
              name="season"
              id="season"
              onChange={selectPeriodHandler}
              defaultValue="all"
              value={selectedPeriod.season}
            >
              <option value="all">все</option>
              <option value="winter">зима</option>
              <option value="spring">весна</option>
              <option value="summer">лето</option>
              <option value="autumn">осень</option>
            </select>
          </div>
        </div>
        <Button style="btn-main">фильтр</Button>
      </form>
    </div>
  );
};

export default FilterSelectors;
