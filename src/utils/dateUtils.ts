import { format, isToday } from 'date-fns';

export function formatDate(date: string | Date): string {
  return format(new Date(date), 'MMM dd, yyyy');
}

export function isDateToday(date: string | Date): boolean {
  return isToday(new Date(date));
}

export function getCurrentDateISO(): string {
  return new Date().toISOString();
}