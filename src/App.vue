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

export default {
  components: {
    MainHeader,
    MainFooter
  }
};
</script>

<style>
  .content{
    margin-top: 90px;
  }
</style>