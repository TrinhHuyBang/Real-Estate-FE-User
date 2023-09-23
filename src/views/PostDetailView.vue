<template>
  <div>
    <PostDetail />
    <RealEstateForYou />
  </div>
</template>

<script>
import RealEstateForYou from "@/components/RealEstateForYou.vue";
import PostDetail from "@/components/PostDetail.vue";
export default {
  components: {
    RealEstateForYou,
    PostDetail
  },
};
</script>

<style>
</style>