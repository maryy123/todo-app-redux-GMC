export let handleFilter = (tasks, filter) => {
  switch (filter) {
    case "UNDONE":
      return tasks.filter((el) => !el.isDone);

    case "DONE":
      return tasks.filter((el) => el.isDone);

    case "ALL":
    default:
      return tasks;
  }
};
