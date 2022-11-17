import React, { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../UI/Button';

type EventSearchProps = {
  onSearch: (arg1: string, arg2: string) => void;
};

const EventSearch = (props: EventSearchProps) => {
  const [selectedYear, setSelectedYear] = useState<string>('2022');
  const [selectedMonth, setSelectedMonth] = useState<string>('01');
  const selectMonthHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(event.target.value);
  };
  const selectYearHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    props.onSearch(selectedYear, selectedMonth);
  };

  return (
    <div className="event-search-container">
      <form className="event-search-form" onSubmit={submitHandler}>
        <div className="event-search-controls">
          <div className="event-search-control">
            <label htmlFor="year">год</label>
            <select
              defaultValue={selectedYear}
              id="year"
              onChange={selectYearHandler}
            >
              
              <option value="2022">2022</option>
            </select>
          </div>
          <div className="event-search-control">
            <label htmlFor="month">месяц</label>
            <select
              id="month"
              onChange={selectMonthHandler}
              defaultValue={selectedMonth}
            >
              <option value="01">Январь</option>
              <option value="02">Февраль</option>
              <option value="03">Март</option>
              <option value="04">Апрель</option>
              <option value="05">Май</option>
              <option value="06">Июнь</option>
              <option value="07">Июль</option>
              <option value="08">Август</option>
              <option value="09">Сентябрь</option>
              <option value="10">Октярь</option>
              <option value="11">Ноябрь</option>
              <option value="12">Декабрь</option>
            </select>
          </div>
        </div>
        <Button style="btn-main">найти квиз</Button>
      </form>
    </div>
  );
};

export default EventSearch;
