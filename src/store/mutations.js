export default {
  addTask(state, task) {
    state.tasks.push({
      content: task,
      done: false,
    });
  },

  deleteTask(state, detask) {
    state.tasks = state.tasks.filter((task) => task.content !== detask);
  },
};
