const MONTHS = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

export function formatMonth(monthNumber) {
  return MONTHS[monthNumber];
}

export function formatDay(dayNumber) {
  let day = dayNumber;
  if (Number(dayNumber) < 10) {
    day = dayNumber.slice(1);
  }

  switch (dayNumber.slice(-1)) {
    case '1':
      return `${day}st`;
    case '2':
      return `${day}nd`;
    case '3':
      return `${day}rd`;
    default:
      return `${day}th`;
  }
}

export function formatDate(date, separator = ' ') {
  const [month, day] = date.split('/');
  return `${formatMonth(month)}${separator}${formatDay(day)}`;
}

export function formatTeams(teams, separator = ' vs ') {
  const [team1, team2] = teams;
  return `${team1}${separator}${team2}`;
}

export function removeDuplicates(array) {
  return [...new Set(array)];
}
