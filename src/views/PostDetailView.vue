<template>
  <div>
    <post-detail />
    <real-estate-for-you />
    <post-view-history />
  </div>
</template>

<script>
import RealEstateForYou from "@/components/Home/RealEstateForYou.vue";
import PostDetail from "@/components/PostDetail.vue";
import PostViewHistory from '@/components/PostViewHistory.vue';
export default {
  components: {
    'real-estate-for-you' : RealEstateForYou,
    'post-detail': PostDetail,
    'post-view-history' : PostViewHistory,
  },
};
</script>

<style>
</style>