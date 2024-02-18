<template>
  <div v-if="total">
    <div class="container">
      <h3>Tin đăng đã xem</h3>
      <div class="row">
        <div
          class="col-6 col-md-4 col-lg-3 post-card"
          v-for="post in posts"
          :key="post?.id"
        >
          <router-link style="text-decoration: none" :to="`/chi-tiet-bai-dang/${post.id}`">
            <el-card :body-style="{ padding: '0px' }">
              <div class="show-post-image">
                <img :src="post.image" alt="Post image" class="el-card-cover" style="height: 200px;">
                <div class="number-image"><i class="el-icon-picture-outline"> {{ post.number_image }}</i> </div>
              </div>
              <div style="padding: 14px;">
                <div class="card-title">{{ post.title }}</div>
                <div class="post-subtitle">{{ showPrice(post) }} ・ {{ post.size }} m²</div>
                <div class="post-location">
                  <i class="el-icon-location"></i> {{ showAddress(post) }}
                </div>
                <!-- <el-button class="post-heart" @click="bookmark(post.id)">
                  <i v-if="post.bookmark == 1" class="el-icon-heart" style="color: red;"></i>
                  <i v-else class="el-icon-heart-outline"></i>
                </el-button> -->
              </div>
            </el-card>
          </router-link>
        </div>
      </div>
      <div class="paginate-page">
        <el-pagination background layout="prev, pager, next" :page-size="perPage" :page-count="total_page" @current-change="handleChangPage"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import PostApi from "@/api/post"
export default {
  data() {
    return {
      posts: [],
      currentPage: 1,
      total_page: 0,
      perPage: 0,
      user_id: 1,
      total: 0,
    };
    
  },
  mounted() {
    this.getPosts(1);
  },
  methods: {
    getPosts(page) {
      PostApi.history(
        page,
        {
          'guest_id': localStorage.getItem('guest_id')
        },
        (response) => {
          this.posts = response.data.data;
          this.currentPage = page;
          this.perPage = response.data.per_page;
          this.total_page = response.data.last_page;
          this.total = response.data.total;
        }
      )
    },
    handleChangPage(val) {
      this.getPosts(val)
    },
  },
};
</script>

<style scoped>
.paginate-page{
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
</style>