const getInitialData = () => {
  const localData = localStorage.getItem("notes");
  return localData ? JSON.parse(localData) : [];
};

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("id-ID", options)
}

export { getInitialData, showFormattedDate };
