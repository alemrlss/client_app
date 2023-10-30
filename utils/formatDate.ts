export const formatDateTime = (date: string): string => {
  const formattedDate = new Date(date);
  return formattedDate.toLocaleString("es", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};
