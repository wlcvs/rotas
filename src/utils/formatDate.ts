export function getFormattedDate(type: "today" |
"tomorrow" = "today"): string {
  const date = new Date()

  if (type === "tomorrow") {
    date.setDate(date.getDate() + 1);
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
