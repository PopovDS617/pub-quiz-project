export const fetchEvents = async () => {
  const response = await fetch(
    `https://${process.env.firebaseRoute}/events.json`
  );

  const data = await response.json();

  const events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
};

export async function getEventById(id: string) {
  const eventList = await fetchEvents();
  return eventList.find((event) => event.id === id);
}

type GetFilteredArguments = {
  year: number;
  month: number;
};

export async function getFilteredEvents(dateFilter: GetFilteredArguments) {
  const { year, month } = dateFilter;

  const eventList = await fetchEvents();

  let filteredEvents = eventList.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
