export default {
  commitSetPostType({ commit }, data) {
    commit("setPostType", data);
  },

  commitSetUserInfo({ commit }, data) {
    commit("setUserInfo", data);
  },

  commitSetFilterData({ commit }, data) {
    commit("setFilterData", data);
  },

  commitSetBookmarkCount({ commit }, data) {
    commit("setBookmarkCount", data);
  },

  commitSetNotificationCount({ commit }, data) {
    commit("setNotificationCount", data);
  },
};
