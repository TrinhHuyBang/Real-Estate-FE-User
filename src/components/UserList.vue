<template>
    <div class="container">
      <el-row :gutter="16">
        <el-col v-for="post in displayedPosts" :key="post.id" :span="colSpan">
          <el-card :body-style="{ padding: '0px' }">
            <router-link
              style="text-decoration: none"
              :to="`/chi-tiet-bai-dang/${post.id}`"
            >
              <div class="show-post-image">
                <img
                  :src="post.image"
                  alt="Post image"
                  class="el-card-cover"
                  style="height: 200px"
                />
                <div class="number-image">
                  <i class="el-icon-picture-outline">
                    {{ post.number_image }}</i
                  >
                </div>
              </div>
            </router-link>
            <div style="padding: 14px">
              <router-link
                style="text-decoration: none; color: black"
                :to="`/chi-tiet-bai-dang/${post.id}`"
              >
                <div class="card-title">{{ post.title }}</div>
                <div class="post-subtitle">
                  {{ showPrice(post) }} ・ {{ post.size }}m²
                </div>
                <div class="post-location">
                  <i class="el-icon-location-outline"></i>
                  {{ showAddress(post) }}
                </div>
              </router-link>
              <div class="post-published-bookmark">
                <div>Hôm nay</div>
                <el-button class="post-heart" @click="bookmark(post)">
                  <i
                    v-if="post.bookmark == 1"
                    class="fa-solid fa-heart fa-lg"
                    style="color: red"
                  ></i>
                  <i v-else class="fa-regular fa-heart fa-lg"></i>
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-button @click="changeRows">Thay đổi số lượng dòng</el-button>
      <!-- <h3> {{ showTitle() + '(' + total + ')' }} </h3>
      <div class="row">
        <div
          class="col-6 col-md-4 col-lg-3 post-card"
          v-for="post in posts"
          :key="post.id"
        >
          <el-card :body-style="{ padding: '0px' }">
            <router-link
              style="text-decoration: none"
              :to="`/chi-tiet-bai-dang/${post.id}`"
            >
              <div class="show-post-image">
                <img
                  :src="post.image"
                  alt="Post image"
                  class="el-card-cover"
                  style="height: 200px"
                />
                <div class="number-image">
                  <i class="el-icon-picture-outline">
                    {{ post.number_image }}</i
                  >
                </div>
              </div>
            </router-link>
            <div style="padding: 14px">
              <router-link
                style="text-decoration: none; color: black"
                :to="`/chi-tiet-bai-dang/${post.id}`"
              >
                <div class="card-title">{{ post.title }}</div>
                <div class="post-subtitle">
                  {{ showPrice(post) }} ・ {{ post.size }}m²
                </div>
                <div class="post-location">
                  <i class="el-icon-location-outline"></i>
                  {{ showAddress(post) }}
                </div>
              </router-link>
              <div class="post-published-bookmark">
                <div>Hôm nay</div>
                <el-button class="post-heart" @click="bookmark(post)">
                  <i
                    v-if="post.bookmark == 1"
                    class="fa-solid fa-heart fa-lg"
                    style="color: red"
                  ></i>
                  <i v-else class="fa-regular fa-heart fa-lg"></i>
                </el-button>
              </div>
            </div>
          </el-card>
        </div>
      </div>
      <div class="paginate-page">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="perPage"
          :page-count="totalPage"
          @current-change="handleChangPage"
        ></el-pagination>
      </div> -->
    </div>
</template>

<script>
import PostApi from "@/api/post";
export default {
  props: {
    type: String,
  },
  data() {
    return {
      posts: [],
      currentPage: 1,
      totalPage: 0,
      perPage: 0,
      total: 0,
      postsPerRow: 4,
      displayedRows: 1
    };
  },
  mounted() {
    // Lấy dữ liệu ban đầu khi trang được tạo
    this.listPost(1);
  },
  computed: {
    displayedPosts() {
      // Tính toán danh sách bài đăng cần hiển thị dựa trên số lượng dòng và bài đăng trên mỗi dòng
      const startIndex = 0;
      const endIndex = this.displayedRows * this.postsPerRow;
      return this.posts.slice(startIndex, endIndex);
    },
    desiredCols() {
      // Tính toán số lượng cột mong muốn dựa trên độ rộng tối thiểu của mỗi card và kích thước màn hình
      const minWidthPerCard = 220; // Độ rộng tối thiểu của mỗi card
      const availableWidth = window.innerWidth;
      return Math.min(this.postsPerRow, Math.floor(availableWidth / minWidthPerCard));
    },
    colSpan() {
      return 24 / this.desiredCols;
    }
  },
  methods: {
    changeRows() {
      // Tăng số lượng dòng khi nhấp vào nút
      this.displayedRows++;
    },
    listPost(page) {
      PostApi.listByUser(
        page,
        {
          type: this.type,
          user_id: this.$route.params.id,
        },
        (response) => {
          this.posts = response.data.data;
          this.currentPage = page;
          this.perPage = response.data.per_page;
          this.totalPage = response.data.last_page;
          this.total = response.data.total;
        },
      );
    },
    handleChangPage(val) {
      this.listPost(val);
    },
    showTitle() {
        if (this.type == "sell") {
            return 'Danh sách tin đăng bán'
        } else {
            return 'Danh sách tin đăng cho thuê'
        }
    },
  },
  watch: {
    desiredCols(newCols) {
      this.postsPerRow = newCols;
    }
  },
  destroyed() {
    // Hủy lắng nghe sự kiện resize khi component bị hủy
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style scoped>
@media screen and (max-width: 1100px) {
  .el-col {
    width: 33.33%; /* Hiển thị 3 bài đăng trên mỗi dòng khi màn hình nhỏ hơn hoặc bằng 1200px */
  }
}

@media screen and (max-width: 800px) {
  .el-col {
    width: 50%; /* Hiển thị 2 bài đăng trên mỗi dòng khi màn hình nhỏ hơn hoặc bằng 800px */
  }
}

@media screen and (max-width: 600px) {
  .el-col {
    width: 100%; /* Hiển thị 1 bài đăng trên mỗi dòng khi màn hình nhỏ hơn hoặc bằng 600px */
  }
}

.post-location {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 2px 0px 2px 0px;
}

.paginate-page {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

.post-published-bookmark {
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  margin: 15px 0px 5px 5px;
  color: grey;
}
</style>