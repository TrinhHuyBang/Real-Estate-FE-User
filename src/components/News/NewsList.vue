<template>
  <div class="container">
    <div class="single-news" v-for="item in news" :key="item.id">
      <div>
        <router-link :to="`/tin-tuc/${item.id}`">
          <img class="image-rent-sell-post" :src="item.image" alt="" />
        </router-link>
      </div>
      <div class="content-rent-sell-post">
        <router-link
          class="link-to-detail"
          :to="`/tin-tuc/${item.id}`"
        >
          <span class="news-title">{{ item.title }}</span>
        </router-link>
        <div class="news-date-author">
          <span>{{ item.created_at }} - {{ item.author }}</span>
        </div>
        <div class="news-sub-title">
          <p>{{ item.sub_title }}</p>
        </div>
      </div>
    </div>
    <div class="paginate-page">
      <el-pagination background layout="prev, pager, next" :page-size="perPage" :page-count="totalPage" @current-change="handleChangPage"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [
        {
            id: 1,
            title: "Dự Báo Thị Trường BĐS 2024: Những Chuyển Biến Đầy Khởi Sắc?",
            image: "https://img.iproperty.com.my/angel/520x300-crop/wp-content/uploads/sites/7/2023/12/bds-1-1-2.jpg",
            sub_title: "Khu vực cửa ngõ thành phố có nguồn cung giá hợp lí, điều kiện an cư tiện nghi, chi phí sinh hoạt hàng ngày rẻ… những điều này đang tác động tích cực đến tâm lí “thoát li trung tâm” của người mua nhà hiện nay. ",
            author: "Nguyễn Nam",
            created_at: "19/12/2023 08:00",
        },
        {
            id: 2,
            title: "Lãi Vay Ưu Đãi, Rước Ngay Nhà Đẹp Xế Sang Rộn Ràng Đón Tết Cùng BIDV",
            image: "https://img.iproperty.com.my/angel/520x300-crop/wp-content/uploads/sites/7/2023/12/bds-2-1.jpg",
            sub_title: "Khu vực cửa ngõ thành phố có nguồn cung giá hợp lí, điều kiện an cư tiện nghi, chi phí sinh hoạt hàng ngày rẻ… những điều này đang tác động tích cực đến tâm lí “thoát li trung tâm” của người mua nhà hiện nay. ",
            author: "Trịnh Huy Bằng",
            created_at: "19/12/2023 08:00",
        },
        {
            id: 3,
            title: "Loạt Chính Sách Bán Hàng Khủng Kích Cầu Người Mua Cuối Năm",
            image: "https://batdongsan.com.vn/tin-tuc/diem-sang-cuoi-nam-cua-thi-truong-bat-dong-san-2023-790704",
            sub_title: "Khu vực cửa ngõ thành phố có nguồn cung giá hợp lí, điều kiện an cư tiện nghi, chi phí sinh hoạt hàng ngày rẻ… những điều này đang tác động tích cực đến tâm lí “thoát li trung tâm” của người mua nhà hiện nay. ",
            author: "Nguyễn Nam",
            created_at: "19/12/2023 08:00",
        },
        {
            id: 4,
            title: "Sắp Diễn Ra Diễn Đàn “Thị Trường Bất Động Sản Năm 2024 - Nhận Diện Thách Thức Và Cơ Hội Phục Hồi”",
            image: "https://img.iproperty.com.my/angel/520x300-crop/wp-content/uploads/sites/7/2023/12/quan-5-gan-quan-nao-ava.jpg",
            sub_title: "Khu vực cửa ngõ thành phố có nguồn cung giá hợp lí, điều kiện an cư tiện nghi, chi phí sinh hoạt hàng ngày rẻ… những điều này đang tác động tích cực đến tâm lí “thoát li trung tâm” của người mua nhà hiện nay. ",
            author: "Trịnh Huy Bằng",
            created_at: "19/12/2023 08:00",
        },
        {
            id: 5,
            title: "Dự Báo Hướng Đi Của Thị Trường Đất Nền Năm 2024",
            image: "https://img.iproperty.com.my/angel/520x300-crop/wp-content/uploads/sites/7/2023/12/chung-cu-mini-1.jpg",
            sub_title: "Khu vực cửa ngõ thành phố có nguồn cung giá hợp lí, điều kiện an cư tiện nghi, chi phí sinh hoạt hàng ngày rẻ… những điều này đang tác động tích cực đến tâm lí “thoát li trung tâm” của người mua nhà hiện nay. ",
            author: "Nguyễn Nam",
            created_at: "19/12/2023 08:00",
        },
      ],
      currentPage: 1,
      totalPage: 0,
      perPage: 0,
      total: 0,
    }
  }
};
</script>

<style scoped>
.single-news {
  position: relative;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  width: 100%;
}

.news-title {
  font-size: 16px;
  font-weight: 600;
  color: black;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0px 0px 5px 0px;
}

.news-sub-title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 10px 0px 5px 0px;
}

.news-date-author {
  color: grey;
}

@media screen and (max-width:1260px){
  .single-news {
    width: 100%;
  }
}

.paginate-page{
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
}
</style>