<template>
    <div>
        <div class="single-rent-sell-post" v-for="post in posts" :key="post.id">
            <div>
              <router-link :to="`/chi-tiet-bai-dang/${post.id}`">
                <img class="image-rent-sell-post" :src="post.image" alt="" />
              </router-link>
            </div>
            <div class="content-rent-sell-post">
              <router-link
                class="link-to-detail"
                :to="`/chi-tiet-bai-dang/${post.id}`"
              >
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
              <div class="published_at rent-sell-post-published"> {{ showTime(post.published_at) }} </div>
              <div v-if="post.status == 0" class="state-post">Chờ duyệt</div>
              <div class="action-post">
                <el-button v-if="post.status == 0 || post.status == 1" icon="el-icon fa fa-pencil" @click="gotoUpdate(post.id)"> Sửa tin</el-button>
                <el-button v-if="post.status != 3" type="danger" icon="el-icon fa fa-trash-alt" @click="handleDelete(post.id)"> Xoá tin </el-button>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import PostApi from "@/api/post"
import { Notification } from "element-ui"
export default {
    props: {
        posts: {
          type: Array,
        }
    },
    methods: {
      gotoUpdate(id) {
        this.$router.push(`/sua-tin/${id}`)
      },
      handleDelete(id) {
        PostApi.delete(
          id,
          () => {
            Notification.success({
              title: "Thành công",
              message: "Xoá tin thành công!",
            });
            this.$emit('postDeleted');
          },
          () => {
            Notification.error({
              title: "Thất bại",
              message: "Xoá tin thất bại!",
            });
        }
        )
      },
    },
}
</script>

<style>
.link-to-detail {
  text-decoration: none;
}

.state-post {
  background-color: rgb(130, 130, 7);
  width: 100px;
  text-align: center;
}
.action-post {
  position: absolute;
  right: 20px;
  bottom: 20px;
}
</style>