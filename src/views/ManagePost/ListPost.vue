<template>
  <div class="manage-list-post">
    <div class="manage-post-nav">
      <manage-nav></manage-nav>
    </div>
    <div class="container">
      <div class="nav">
        <h3>Danh sách tin đăng</h3>
        <div class="search-and-type">
          <el-input
            placeholder="Tìm kiếm theo tiêu đề, mô tả"
            class="search-field"
          >
            <el-button
              type="danger"
              slot="append"
              icon="el-icon-search"
            ></el-button>
          </el-input>
          <div class="type-post">
            <el-button style="width: 100px; margin-right: -10px">Bán</el-button>
            <el-button>Cho thuê</el-button>
          </div>
        </div>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Tất cả" name="all">
          <div
            class="single-rent-sell-post"
            v-for="post in posts"
            :key="post.id"
          >
            <div>
              <router-link :to="`/chi-tiet-bai-dang/${post.id}`">
                <img class="image-rent-sell-post" :src="post.imageUrl" alt="" />
              </router-link>
            </div>
            <div class="content-rent-sell-post">
              <router-link
                class="link-to-detail"
                :to="`/chi-tiet-bai-dang/${post.id}`"
              >
                <p class="rent-sell-post-title">{{ post.title }}</p>
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
              <span>{{ " ・ " + post.district + ", " + post.city }}</span>
              <p class="rent-sell-post-published_at">{{ post.published_at }}</p>
              <div v-if="post.status == 0" class="state-post">Chờ duyệt</div>
              <div class="action-post">
                <el-button icon="el-icon fa fa-pencil"> Sửa tin</el-button>
                <el-button type="danger" icon="el-icon fa fa-trash-alt"> Xoá tin </el-button>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Đang hiển thị" name="displayPost">
          <div
            v-for="post in posts"
            :key="post.id"
          >
            <div class="single-rent-sell-post" v-if="post.status == 1">
              <div>
                <router-link :to="`/chi-tiet-bai-dang/${post.id}`">
                  <img
                    class="image-rent-sell-post"
                    :src="post.imageUrl"
                    alt=""
                  />
                </router-link>
              </div>
              <div class="content-rent-sell-post">
                <router-link
                  class="link-to-detail"
                  :to="`/chi-tiet-bai-dang/${post.id}`"
                >
                  <p class="rent-sell-post-title">{{ post.title }}</p>
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
                <span>{{ " ・ " + post.district + ", " + post.city }}</span>
                <p class="rent-sell-post-published_at">{{ post.published_at }}</p>
                <div v-if="post.status == 0" class="state-post">Chờ duyệt</div>
                <div class="action-post">
                  <el-button icon="el-icon fa fa-pencil"> Sửa tin</el-button>
                  <el-button type="danger" icon="el-icon fa fa-trash-alt"> Xoá tin </el-button>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Chờ hiển thị" name="hiddenPost">
          <div
            v-for="post in posts"
            :key="post.id"
          >
            <div class="single-rent-sell-post" v-if="post.status == 0">
              <div>
                <router-link :to="`/chi-tiet-bai-dang/${post.id}`">
                  <img
                    class="image-rent-sell-post"
                    :src="post.imageUrl"
                    alt=""
                  />
                </router-link>
              </div>
              <div class="content-rent-sell-post">
                <router-link
                  class="link-to-detail"
                  :to="`/chi-tiet-bai-dang/${post.id}`"
                >
                  <p class="rent-sell-post-title">{{ post.title }}</p>
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
                <span>{{ " ・ " + post.district + ", " + post.city }}</span>
                <p class="rent-sell-post-published_at">{{ post.published_at }}</p>
                <div v-if="post.status == 0" class="state-post">Chờ duyệt</div>
                <div class="action-post">
                  <el-button icon="el-icon fa fa-pencil"> Sửa tin</el-button>
                  <el-button type="danger" icon="el-icon fa fa-trash-alt"> Xoá tin </el-button>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>


<script>
import ManageNav from "@/layouts/ManageNav.vue";
export default {
  components: {
    "manage-nav": ManageNav,
  },
  data() {
    return {
      activeType: "ban",
      activeName: "all",
      posts: [
        {
          id: 1,
          title:
            "post VỪA NHẬN NHÀ NÊN CHO THUÊ CH Q7 RIVERSIDE 1 - 2 - 3PN 6.5TR/TH CÓ LẮP SẴN MÁY LẠNH. LH: 0706 679 ***",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/Moc4.jpg?alt=media&token=332cfb56-5143-4049-a63a-dd9002b70edc",
          price: 2134,
          unit: "VND",
          size: 100,
          city: "Ha Noi",
          district: "Hai Ba Trung",
          bookmark: 0,
          bedroom: 2,
          toilet: 1,
          published_at: "12:00:00 12-07-2023",
          status: "1",
          type: "ban",
        },
        {
          id: 2,
          title: "post 2",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/Moc4.jpg?alt=media&token=332cfb56-5143-4049-a63a-dd9002b70edc",
          price: 2000,
          unit: "VND",
          size: 100,
          city: "Ha Noi",
          district: "Hai Ba Trung",
          bookmark: 1,
          published_at: "12:00:00 12-07-2023",
          status: "0",
          toilet: 1,
          type: "ban",
        },
        {
          id: 3,
          title: "post 3",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/Moc4.jpg?alt=media&token=332cfb56-5143-4049-a63a-dd9002b70edc",
          price: 2000,
          unit: "VND",
          size: 100,
          city: "Ha Noi",
          district: "Hai Ba Trung",
          bookmark: 1,
          published_at: "12:00:00 12-07-2023",
          status: "0",
          bedroom: 2,
          type: "ban",
        },
        {
          id: 4,
          title: "post 4",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/Moc4.jpg?alt=media&token=332cfb56-5143-4049-a63a-dd9002b70edc",
          price: 2000,
          unit: "VND",
          size: 100,
          city: "Ha Noi",
          district: "Hai Ba Trung",
          published_at: "12:00:00 12-07-2023",
          status: "1",
          bookmark: 0,
          type: "ban",
        },
        {
          id: 5,
          title: "post 1",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/Moc4.jpg?alt=media&token=332cfb56-5143-4049-a63a-dd9002b70edc",
          price: 2000,
          unit: "VND",
          size: 100,
          city: "Ha Noi",
          district: "Hai Ba Trung",
          published_at: "12:00:00 12-07-2023",
          status: "0",
          bookmark: 1,
          type: "cho thue",
        },
      ],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },

    showPrice(post) {
      if (post.unit == "Thỏa Thuận") {
        return "Giá Thoả thuận";
      } else {
        if (post.type == "ban") {
          return post.price / 1000 >= 1
            ? (post.price / 1000).toFixed(2) + " tỷ "
            : post.price + " triệu" + post.unit;
        } else {
          return post.price / 1000 >= 1
            ? (post.price / 1000).toFixed(2) + " tỷ " + "/tháng"
            : post.price + " triệu" + "/tháng";
        }
      }
    },
  },
};
</script>

<style>
.manage-list-post {
  display: flex;
  flex-direction: row;
}

.container {
  margin: 10px 0 0 30px;
}

.nav {
  display: flex;
  flex-direction: column;
}

.search-and-type {
  display: flex;
  position: relative;
  flex-direction: row;
  margin: 10px 0 10px 0;
}
.search-field {
  width: 400px;
}

.type-post {
  position: absolute;
  right: 10px;
}

.image-rent-sell-post {
  height: 150px;
  border-radius: 5px;
}

.single-rent-sell-post {
  position: relative;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  margin-right: 10%;
  margin-bottom: 30px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.content-rent-sell-post {
  margin: 0 20px 0 20px;
}

.rent-sell-post-title {
  font-size: 18px;
  font-weight: 600;
  color: #0e58a0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}

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