<template>
  <div class="component">
    <search-nav />
    <div class="rent-sell-post-page">
      <div class="post-filter-container">
        <fillter-post type="rent" />
      </div>
      <div class="post-list-container">
        <list-post :title="title"  />
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
          title: "Cho thuê nhà đất trên toàn quốc",
          postType: {
            ban: [
              "Bán căn hộ chung cư",
              "Bán nhà riêng",
              "Bán nhà biệt thự liền kề",
              "Bán nhà mặt phố",
              "Bán nhà phố thương mại",
              "Bán đất nền dự án",
              "Bán đất",
              "Bán trang trại, khu nghỉ dưỡng",
              "Bán condotel",
              "Bán kho, nhà xưởng",
              "Bán loại bất động sản khác",
            ],
            chothue: [
              "Cho thuê căn hộ chung cư",
              "Cho thuê nhà riêng",
              "Cho thuê nhà biệt thự, liền kề",
              "Cho thuê nhà mặt phố",
              "Cho thuê nhà thương mại",
              "Cho thuê nhà trọ, phòng trọ",
              "Cho thuê văn phòng",
              "Cho thuê, sang nhượng, cửa hàng, ki ốt",
              "Cho thuê kho, nhà xưởng, đất",
              "Cho thuê loại bất động sản khác",
            ],
          },
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