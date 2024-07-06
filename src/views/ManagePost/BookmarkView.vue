<template>
  <div class="container">
    <list-post :title="title"></list-post>
  </div>
</template>

<script>
import ListPost from "@/components/ManagePost/ListPost.vue";
export default {
    components: {
        "list-post": ListPost,
    },

    data() {
        return {
            title: "Danh sách tin lưu"
        };
    }
}
</script>

<style scoped>
.container {
  margin-top: 30px;
}
</style>