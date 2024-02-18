<template>
  <div class="admin-detail-post">
    <div class="manage-post-nav">
      <admin-nav></admin-nav>
    </div>
    <div>
      <admin-post-detail style="width: 100%;"/>
      <div class="accept-reject-action">
        <el-button type="primary" @click="acceptRequest()">Duyệt bài</el-button>
        <el-button type="danger" @click="rejectRequest()" style="width: 100px; margin-left: 30px;">Huỷ</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import PostApi from "@/api/post"
import { Notification } from "element-ui"
import AdminNav from "@/layouts/Admin/AdminNav.vue";
import AdminPostDetail from '@/components/Admin/Post/AdminPostDetail.vue';
export default {
  components: {
    AdminNav,
    AdminPostDetail
  },

   methods: {
    acceptRequest() {
      PostApi.acceptRequest(
        this.$route.params.id,
        () => {
          Notification.success({
            title: "Thành công",
            message: "Đã duyệt tin đăng có id = " + this.post.id + " thành công!",
          });
          this.$emit('acceptRejectAction');
        },
        () => {}
      )
      this.$router.push('/admin/danh-sach-tin-cho-duyet');
    },

    rejectRequest() {
      PostApi.rejectRequest(
        this.$route.params.id,
        () => {
          Notification.success({
            title: "Thành công",
            message: "Đã huỷ yêu cầu duyệt tin!",
          });
          this.$emit('acceptRejectAction');
        },
        () => {}
      )
      this.$router.push('/admin/danh-sach-tin-cho-duyet');
    }
  },
};
</script>

<style scoped>
.admin-detail-post {
  display: flex;
  flex-direction: row;
}
.manage-post-nav {
  width: 250px;
  margin-right: 20px;
}

.accept-reject-action {
    margin: 30px 0 20px;
    display: flex;
    justify-content: center;
}
</style>