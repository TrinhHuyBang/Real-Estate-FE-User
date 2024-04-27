<template>
  <div class="list-request-post">
    <div class="manage-post-nav">
      <admin-nav></admin-nav>
    </div>
    <div class="container">
      <h4>Danh sách tin chờ duyệt</h4>
      <p>Hiện có {{ total }} bất động sản</p>
      <div class="select-post-type">
        <el-select
          style="margin-bottom: 10px"
          v-model="selectedOrderBy"
          placeholder="Tin mới nhất"
        >
          <el-option value="Tin mới nhất">Tin mới nhất</el-option>
          <el-option value="Giá thấp đến cao">Giá thấp đến cao</el-option>
          <el-option value="Giá cao đến thấp">Giá cao đến thấp</el-option>
          <el-option value="Diện tích lớn đến bé">Diện tích lớn đến bé</el-option>
          <el-option value="Diện tích bé đến lớn">Diện tích bé đến lớn</el-option>
        </el-select>
        <div class="type-post">
          <el-button :class="{ active_selected: type === 'sell' }" @click="type = 'sell'" style="width: 100px; margin-right: -10px">Bán</el-button>
          <el-button :class="{ active_selected: type === 'rent' }" @click="type = 'rent'">Cho thuê</el-button>
        </div>
      </div>
      <div class="content-page">
        <div v-for="post in posts" :key="post.id">
          <single-post :post="post"  @acceptRejectAction="listRequestPost(1)"/>
        </div>
        <div v-if="posts.length" class="paginate-page">
          <el-pagination background layout="prev, pager, next" :page-size="perPage" :page-count="totalPage" @current-change="handleChangPage"></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostApi from '@/api/post'
import SinglePost from '@/components/Admin/Post/SinglePost.vue';
import AdminNav from "@/layouts/Admin/AdminNav.vue";
export default {
  components: {
    SinglePost,
    AdminNav,
  },
  mounted() {
    this.listRequestPost(1)
  },
  data() {
    return {
      selectedOrderBy: "Tin mới nhất",
      posts: [],
      currentPage: 1,
      totalPage: 0,
      perPage: 0,
      total: 0,
      type: "sell",
    };
  },
  methods: {
    listRequestPost(page) {
      PostApi.listRequestPost(
        page,
        {
          'order_by': this.selectedOrderBy,
          'type': this.type,
        },
        (response) => {
          this.posts = response.data.data
          this.currentPage = page;
          this.perPage = response.data.per_page;
          this.totalPage = response.data.last_page;
          this.total = response.data.total;
        },
      )
    },
    handleChangPage(val) {
      this.listRequestPost(val)
    },
  },
  watch: {
    selectedOrderBy() {
      this.listRequestPost(this.currentPage)
    },
    type() {
      this.listRequestPost(this.currentPage)
    }
  },
};
</script>

<style scoped>
.content-page {
  margin-left: 100px;
  width: 70%;
}

.manage-post-nav {
  width: 250px;
  margin-right: 20px;
}

.list-request-post {
  display: flex;
  flex-direction: row;
}

.select-post-type {
  position: relative;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
}

.type-post {
  /* position: absolute; */
  /* right: 100px; */
  margin-left: 50%;
}

.active_selected {
  background-color: red !important;
  color: white !important;
}

.paginate-page{
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
}
</style>