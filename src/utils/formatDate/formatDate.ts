// Formats a date string into the "DD/MM/YYYY" format
export function formatDate(inputDate: string | undefined | null) {
  if (!inputDate) {
    return "";
  }

  const date = new Date(inputDate);

  if (isNaN(date.getTime())) {
    return "";
  }

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDay = day < 10 ? "0" + day : day;
  const formattedMonth = month < 10 ? "0" + month : month;

  return `${formattedDay}/${formattedMonth}/${year}`;
}
