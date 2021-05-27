export function parseDate(date, format="medium") {
  return new Intl.DateTimeFormat("default", {dateStyle: format}).format(new Date(date));
}