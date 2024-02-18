<template>
  <div>
    <div class="header-enterprise-detail-page">
      <img :src="user.avatar" alt="">
      <div class="header-blur"></div>
    </div>
    <user-list type="sell"/>
    <user-list type="rent"/>
  </div>
</template>

<script>
import UserList from '@/components/UserList.vue'
import UserApi from '@/api/user'
export default {
  data() {
    return {
      user: {},
    }
  },

  mounted() {
    this.getInfor()
  },

  components: {
    'user-list': UserList,
  },

  methods: {
    getInfor() {
      UserApi.detail(
        this.$route.params.id,
        (response) => {
          this.user = response.data
        }
      )
    }
  },
}
</script>

<style scoped>
.header-enterprise-detail-page {
  position: relative;
  width: 100%;
  margin: auto;
  height: 350px;
  padding: 10px 10% 10px 10%;
  min-width: 935px;
}

.header-enterprise-detail-page img {
    width: 100%;
    height: 340px;
}

.header-blur {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 230px;
    background: linear-gradient(180deg, rgba(44,44,44,0) 0%, #2C2C2C 108.75%);
    mix-blend-mode: multiply;
}
</style>