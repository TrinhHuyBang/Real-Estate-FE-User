<template>
  <div>
    <MainHeader />
    <router-view />
    <!-- Các nội dung khác trong trang -->
  </div>
</template>

<script>
import MainHeader from './layouts/MainHeader.vue';

export default {
  components: {
    MainHeader
  }
};
</script>