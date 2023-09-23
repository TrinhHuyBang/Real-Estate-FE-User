<template>
  <div>
    <div class="container">
      <h3>Bất động sản dành cho bạn</h3>
      <div class="row">
        <div
          class="col-6 col-md-4 col-lg-3 post-card"
          v-for="post in posts"
          :key="post.id"
        >
          <router-link style="text-decoration: none" :to="`/chi-tiet-bai-dang/${post.id}`">
            <el-card>
              <img :src="post.imageUrl" alt="Post image" class="el-card-cover" style="height: 200px;">
              <div style="padding: 14px;">
                <div class="cart-title">{{ post.title }}</div>
                <div class="post-subtitle">{{ showPrice(post) }} ・ {{ post.size }} m²</div>
                <div class="post-location">
                  <i class="el-icon-location"></i> {{ post.district + ", " + post.city }}
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title:
            "CHUYÊN QUẢN LÝ CHO THUÊ CĂN HỘ ECO GREEN SG Q7, 2PN 70M2, GIÁ 12TR/TH, XEM NHÀ 24/7, LH 0932 139 ***",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/Moc4.jpg?alt=media&token=332cfb56-5143-4049-a63a-dd9002b70edc",
          price: 2134,
          unit: "VND",
          size: 100,
          city: "Ha Noi",
          district: "Hai Ba Trung",
          bookmark: 0,
          type: "ban",
        },
        {
          id: 2,
          title: "Card 2",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/Moc4.jpg?alt=media&token=332cfb56-5143-4049-a63a-dd9002b70edc",
          price: 2000,
          unit: "VND",
          size: 100,
          city: "Ha Noi",
          district: "Hai Ba Trung",
          bookmark: 1,
          type: "ban",
        },
        {
          id: 3,
          title: "Card 3",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/Moc4.jpg?alt=media&token=332cfb56-5143-4049-a63a-dd9002b70edc",
          price: 2000,
          unit: "VND",
          size: 100,
          city: "Ha Noi",
          district: "Hai Ba Trung",
          bookmark: 1,
          type: "ban",
        },
        {
          id: 4,
          title: "Card 4",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/Moc4.jpg?alt=media&token=332cfb56-5143-4049-a63a-dd9002b70edc",
          price: 2000,
          unit: "VND",
          size: 100,
          city: "Ha Noi",
          district: "Hai Ba Trung",
          bookmark: 0,
          type: "ban",
        },
        {
          id: 5,
          title: "Card 1",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/Moc4.jpg?alt=media&token=332cfb56-5143-4049-a63a-dd9002b70edc",
          price: 2000,
          unit: "VND",
          size: 100,
          city: "Ha Noi",
          district: "Hai Ba Trung",
          bookmark: 1,
          type: "cho thue",
        },
        {
          id: 6,
          title: "Card 2",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/Moc4.jpg?alt=media&token=332cfb56-5143-4049-a63a-dd9002b70edc",
          price: 2000,
          unit: "Thỏa Thuận",
          size: 100,
          city: "Ha Noi",
          type: "cho thue",
          district: "Hai Ba Trung",
          bookmark: 0,
        },
        {
          id: 7,
          title: "Card 3",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/Moc4.jpg?alt=media&token=332cfb56-5143-4049-a63a-dd9002b70edc",
          price: 2000,
          unit: "VND/m2",
          size: 100,
          city: "Ha Noi",
          type: "cho thue",
          district: "Hai Ba Trung",
          bookmark: 1,
        },
        {
          id: 8,
          title: "Card 4",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/Moc4.jpg?alt=media&token=332cfb56-5143-4049-a63a-dd9002b70edc",
          price: 200,
          unit: "VND",
          size: 100,
          city: "Ha Noi",
          type: "cho thue",
          district: "Hai Ba Trung",
          bookmark: 0,
        },
        // Thêm các card khác vào đây...
      ],
    };
  },
  methods: {
    showPrice(card) {
      if (card.unit == "Thỏa Thuận") {
        return "Giá Thoả thuận";
      } else {
        if (card.type == "ban") {
          return card.price / 1000 >= 1
            ? (card.price / 1000).toFixed(2) + " tỷ " + card.unit
            : card.price + " triệu" + card.unit;
        } else {
          return card.price / 1000 >= 1
            ? (card.price / 1000).toFixed(2) + " tỷ " + card.unit + "/tháng"
            : card.price + " triệu" + card.unit + "/tháng";
        }
      }
    },
    bookmark(id) {
      console.log(id);
    },
  },
};
</script>

<style>
.post-card {
  margin: 20px 0px 0px 0px;
}

.card-title {
  font-size: 15px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #0E58A0;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.post-heart {
  position: absolute;
  bottom: 10px;
  right: 20px;
  background-color: white;
  height: 8%;
  width: 10%;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>