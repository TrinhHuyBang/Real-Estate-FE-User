<template>
  <div class="component">
    <search-nav />
    <div class="rent-sell-post-page">
      <div class="post-filter-container">
        <fillter-post type="sell"/>
      </div>
      <div class="post-list-container">
        <list-post :title="title" />
      </div>
    </div>
  </div>
</template>

<script>
import FillterPost from "@/components/FillterPost.vue";
import SearchNav from "@/layouts/SearchNav.vue";
import ListPost from "@/components/RentSellPost/ListPost.vue";
export default {
    data(){
        return {
            title: "Bán nhà đất trên toàn quốc",
        }
    },
  components: {
    "fillter-post": FillterPost,
    "search-nav": SearchNav,
    "list-post": ListPost,
  },
};
</script>

<style>
.component {
  display: flex;
  flex-direction: column;
}

.rent-sell-post-page {
  display: flex;
}

.post-filter-container {
  flex: 1;
  margin-left: 20px;
}

.post-list-container {
  flex: 2;
  margin-top: 30px;
  margin-left: -10px;
}
</style>