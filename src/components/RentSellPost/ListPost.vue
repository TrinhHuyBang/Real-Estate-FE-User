<template>
  <div class="list-sell-rent-post">
    <h3>{{ title }}</h3>
    <p>Hiện có {{ posts.length }} bất động sản</p>
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
    <div class="single-rent-sell-post" v-for="post in posts" :key="post.id">
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
        <p class="rent-sell-post-published">{{ post.published }}</p>
        <el-button class="ren-selt-post-bookmark">
          <i
            v-if="post.bookmark == 1"
            class="el-icon bookmarked fas fa-heart"
          ></i>
          <i v-else class="el-icon far fa-heart"></i>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";
export default {
  props: {
    title: String,
  },
  data() {
    return {
      selectedOrderBy: "Tin mới nhất",
      posts: [
        {
          id: 1,
          title:
            "post VỪA NHẬN NHÀ NÊN CHO THUÊ CH Q7 RIVERSIDE 1 - 2 - 3PN 6.5TR/TH CÓ LẮP SẴN MÁY LẠNH. LH: 0706 679 ***",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/Moc4.jpg?alt=media&token=332cfb56-5143-4049-a63a-dd9002b70edc",
          price: 2134,
          unit: "VND",
          size: 10,
          city: "Ha Noi",
          district: "Hai Ba Trung",
          bookmark: 0,
          bedroom: 2,
          toilet: 1,
          published: "12:00:00 12-07-2023",
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
          published: "12:00:00 12-07-2023",
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
          size: 15,
          city: "Ha Noi",
          district: "Hai Ba Trung",
          bookmark: 1,
          published: "12:00:00 12-07-2023",
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
          size: 170,
          city: "Ha Noi",
          district: "Hai Ba Trung",
          published: "12:00:00 12-07-2024",
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
          size: 300,
          city: "Ha Noi",
          district: "Hai Ba Trung",
          published: "12:00:01 12-07-2023",
          bookmark: 1,
          type: "cho thue",
        },
      ],
    };
  },
  methods: {
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
    sort(type) {
      switch (type) {
        case "Giá thấp đến cao":
          this.posts.sort((postA, postB) => {
            return postA.price - postB.price;
          });
          break;
        case "Giá cao đến thấp":
          this.posts.sort((postA, postB) => {
            return postB.price - postA.price;
          });
          break;

        case "Diện tích lớn đến bé":
          this.posts.sort((postA, postB) => {
            return postB.size - postA.size;
          });
          break;

        case "Diện tích bé đến lớn":
          this.posts.sort((postA, postB) => {
            return postA.size - postB.size;
          });
          break;

        case "Tin mới nhất":
          this.posts.sort((postA, postB) => {
            const dateA = new Date(postA.published);
            const dateB = new Date(postB.published);
            return dateB - dateA; // Sắp xếp từ mới đến cũ
          });
          break;
        default:
          break;
      }
    },
  },
  watch: {
    selectedOrderBy(val) {
      this.sort(val);
    },
  },
};
</script>

<style>
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

.ren-selt-post-bookmark {
  position: absolute;
  bottom: 20px;
  right: 30px;
  background-color: white;
  height: 30px;
  width: 30px; /* Tăng kích thước để có kích thước vuông */
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Thêm bóng đổ cho nút */
}

.rent-sell-post-published {
  position: absolute;
  bottom: 5px;
}

.link-to-detail {
  text-decoration: none;
}

.bookmarked {
  color: red;
}
</style>