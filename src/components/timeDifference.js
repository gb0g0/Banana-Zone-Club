export function getDifference(targetTime) {
  const formatDateToISO = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  };
  const time = new Date();
  const currentTime = formatDateToISO(time);
  const endOfCountdown = formatDateToISO(targetTime);

  const timeDifference = new Date(endOfCountdown) - new Date(currentTime);
  return timeDifference;
}
