import { DUMMY_EVENTS } from '../dummy-data';

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getEventById(id: string) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
