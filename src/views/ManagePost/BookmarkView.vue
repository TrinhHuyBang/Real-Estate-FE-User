<template>
  <div class="manage-list-bookmark-post">
    <div class="manage-post-nav">
      <manage-nav></manage-nav>
    </div>
    <div class="container">
        <list-post :title="title"></list-post>
    </div>
  </div>
</template>

<script>
import ManageNav from "@/layouts/ManageNav.vue";
import ListPost from "@/components/RentSellPost/ListPost.vue";
export default {
    components: {
        "manage-nav": ManageNav,
        "list-post": ListPost,
    },

    data() {
        return {
            title: "Danh sách tin lưu"
        };
    }
}
</script>

<style>

.manage-list-bookmark-post {
  display: flex;
  flex-direction: row;
}

.container {
  margin: 10px 0 0 30px;
}

</style>