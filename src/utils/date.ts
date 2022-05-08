import {format, formatRelative, formatDistance} from 'date-fns';

export function getDate(date: Date) {
  return format(date, 'PP');
}

export function getDateRelative(date: Date, base: Date) {
  return formatRelative(date, base);
}

export function getDateFrom(date: Date, base: Date) {
  return formatDistance(date, base);
}
