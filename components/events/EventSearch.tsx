import React, { FormEvent, useRef } from 'react';
import Button from '../UI/Button';

type EventSearchProps = {
  onSearch: (arg1: string, arg2: string) => void;
};

const EventSearch = (props: EventSearchProps) => {
  const yearInputRef = useRef<HTMLSelectElement>(null);
  const monthInputRef = useRef<HTMLSelectElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const selectedYear = yearInputRef.current?.value;
    const selectedMonth = monthInputRef.current?.value;
    props.onSearch(selectedYear!, selectedMonth!);
  };

  return (
    <form className="event-search-form" onSubmit={submitHandler}>
      <div className="event-search-controls">
        <div className="event-search-control">
          <label htmlFor="year">год</label>
          <select defaultValue={'2022'} id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className="event-search-control">
          <label htmlFor="month">месяц</label>
          <select defaultValue={'08'} id="month" ref={monthInputRef}>
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
  );
};

export default EventSearch;
