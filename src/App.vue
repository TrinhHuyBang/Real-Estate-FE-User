<template>
  <div>
    <MainHeader />
    <div class="content">
      <router-view />
    </div>
    <main-footer />
    <!-- Các nội dung khác trong trang -->
  </div>
</template>

<script>
import MainHeader from './layouts/MainHeader.vue';
import MainFooter from './layouts/MainFooter.vue';
import { mapActions, mapState } from 'vuex';
import AuthApi from "@/api/auth"


export default {
  computed: mapState({
    shop: (state) => state.shop,
  }),
  components: {
    MainHeader,
    MainFooter
  },

  created() {
    this.setUserInfor()
  },
  methods: {
    ...mapActions(['commitSetUserInfo', 'commitSetBookmarkCount']),
    setUserInfor() {
      AuthApi.profile(
        (response) => {
          this.user = response.data.data
          this.commitSetUserInfo(this.user)
          this.commitSetBookmarkCount(this.user.bookmark)
        },
      )
    }
  }

};
</script>

<style>
  .content{
    margin-top: 90px;
  }
</style>