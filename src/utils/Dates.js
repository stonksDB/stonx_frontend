export function parseDate(date, format="medium") {
  let dateObj;
  if (date.includes("-")) {   // YYYY-MM-DD format
    const split = date.split("-");
    dateObj = new Date(Date.UTC(split[2], split[1]-1, split[0]));
  } else {
    dateObj = new Date(date);
  }

  return new Intl.DateTimeFormat("default", {dateStyle: format}).format(dateObj);
}
