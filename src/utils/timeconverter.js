// inspired by https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript

export default function timeConverter(timestamp) {
  const d = new Date(timestamp);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const year = d.getFullYear();
  const month = months[d.getMonth()];
  const date = d.getDate();
  const hour = ('0' + d.getHours()).slice(-2); //inspired by: https://stackoverflow.com/questions/8043026/how-to-format-numbers-by-prepending-0-to-single-digit-numbers
  const min = ('0' + d.getMinutes()).slice(-2);
  const time = date + ' ' + month + ' ' + year + ' at ' + hour + ':' + min;
  return time;
}
