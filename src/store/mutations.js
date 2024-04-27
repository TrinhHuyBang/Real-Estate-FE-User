export default {
  setPostType(state, data) {
    state.postTypes = data;
  },

  setUserInfo(state, data) {
    state.user = data;
  },

  setFilterData(state, data) {
    state.filter = data;
  },

  setBookmarkCount(state, data) {
    state.bookmarkCount = data;
  },

  setNotificationCount(state, data) {
    state.notificationCount = data;
  }
};
