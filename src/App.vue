<template>
  <div>
    <MainHeader />
    <div class="content">
      <router-view />
      <widget-review />
    </div>
    <main-footer />
    <!-- Các nội dung khác trong trang -->
  </div>
</template>

<script>
import MainHeader from './layouts/MainHeader.vue';
import MainFooter from './layouts/MainFooter.vue';
import { mapActions, mapState } from 'vuex';
import { Notification } from "element-ui";
import AuthApi from "@/api/auth"
import WidgetReview from './components/WidgetReview.vue';


export default {
  data() {
    return {
      subscriptionData: null,
      userInfor: {

      }
    }
  },
  computed: mapState({
    user: (state) => state.user,
    bookmarkCount: (state) => state.bookmarkCount,
  }),
  components: {
    MainHeader,
    MainFooter,
    WidgetReview
  },

  mounted() {
  this.setUserInfor()
  this.$pusher.subscribe('postNotification')
    .bind( 'posts', data => {
      if(this.user.id === data['user_id']) {
        Notification.info({
          title: "Thành công",
          message: data['message'],
        })
      }
    })
  },
  methods: {
    ...mapActions(['commitSetUserInfo', 'commitSetBookmarkCount']),
    setUserInfor() {
      AuthApi.profile(
        (response) => {
          this.userInfor = response.data.data
          this.commitSetUserInfo(this.userInfor)
          this.commitSetBookmarkCount(this.userInfor.bookmark)
        },
      )
    },

    setBookmark(data) {
      this.commitSetBookmarkCount(data)
    }
  }

};
</script>

<style>
  .content{
    margin-top: 90px;
  }
</style>