export const fetchEvents = async () => {
  const response = await fetch(
    'https://smoothie-project-e7bb3-default-rtdb.europe-west1.firebasedatabase.app/events.json'
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
