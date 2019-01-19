const date = date =>
  // Convert every date to a locale format.
  new Date(date).toLocaleString([], {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  })

export default date
