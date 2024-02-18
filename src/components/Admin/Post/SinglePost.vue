<template>
  <div class="single-rent-sell-post">
    <div>
      <router-link :to="`/admin/chi-tiet-bai-dang/${post.id}`">
        <img class="image-rent-sell-post" :src="post.image" alt="" />
        <div class="number-image">
          <i class="el-icon-picture-outline"> {{ post.number_image }}</i>
        </div>
      </router-link>
    </div>
    <div class="content-rent-sell-post">
      <router-link class="link-to-detail" :to="`/admin/chi-tiet-bai-dang/${post.id}`">
        <span class="rent-sell-post-title">{{ post.title }}</span>
      </router-link>
      <span style="color: red; font-weight: 600">
        {{ showPrice(post) + " ・ " + post.size + " m&sup2;" }}
      </span>
      <span v-if="post.bedroom">
        {{ " ・ " + post.bedroom }} <i class="el-icon fa fa-bed"></i>
      </span>
      <span v-if="post.toilet">
        {{ " ・ " + post.toilet }} <i class="el-icon fa fa-bath"></i>
      </span>
      <div class="post-location">
        <i class="el-icon-location-outline"></i> {{ showAddress(post) }}
      </div>
      <div class="published_at">Cập nhật lần cuối vào {{ showTime(post.updated_at) }}</div>
      <div class="accept-reject-action">
        <el-button type="primary" @click="acceptRequest()">Duyệt bài</el-button>
        <el-button type="danger" @click="rejectRequest()" style="width: 100px;">Huỷ</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import PostApi from "@/api/post"
import { Notification } from "element-ui"
export default {
  props: {
    post: {
      type: Object,
    },
  },

  methods: {
    acceptRequest() {
      PostApi.acceptRequest(
        this.post.id,
        () => {
          Notification.success({
            title: "Thành công",
            message: "Đã duyệt tin đăng có id" + this.post.id + " thành công!",
          });
          this.$emit('acceptRejectAction');
        },
        () => {
          Notification.error({
            title: "Thất bại",
            message: "Duyệt tin thất bại",
          });
        }
      )
    },

    rejectRequest() {
      PostApi.rejectRequest(
        this.post.id,
        () => {
          Notification.success({
            title: "Thành công",
            message: "Đã huỷ yêu cầu duyệt tin!",
          });
          this.$emit('acceptRejectAction');
        },
        () => {
          Notification.error({
            title: "Thất bại",
            message: "Xoá tin thất bại!",
          });
        }
      )
    }
  },
};
</script>

<style scoped>
.published_at {
  margin-top: 10px;
  color: grey;
}

.rent-sell-post-published {
  position: absolute;
  bottom: 5px;
}

.accept-reject-action {
  position: absolute;
  right: 20px;
  bottom: 20px;
}
</style>