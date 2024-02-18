<template>
  <div>
    <div class="search">
      <p>Website về bất động sản - Mua bán cho thuê nhà đất toàn quốc</p>
      <el-form :model="searchForm" @submit.prevent="submitSearch">
        <div class="input-form">
          <i class="el-icon-location-information" style="margin: 10px 10px 10px 20px; color: red; font-size:20px;"></i>
          <el-input placeholder="Tìm kiếm theo địa điểm, quận, tên đường, ..." v-model="searchForm.searchKey" class="input-with-select">
            <el-select v-model="selectedType" slot="prepend" placeholder="Loại nhà đất"  clearable>
              <el-option label="Nhà đất bán" value="Nhà đất bán"></el-option>
              <el-option label="Nhà đất cho thuê" value="Nhà đất cho thuê"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search" type="primary" native-type="submit"></el-button>
          </el-input>
        </div>
      </el-form>
    </div>
    <div class="home">
      <div class="news">
        <el-tabs v-model="activeName">
          <el-tab-pane v-for="tab in tabNews" :key="tab.name" :label="tab.label" :name="tab.name">
            <headline-news :newsList="newsList"/>
          </el-tab-pane>
        </el-tabs>
      </div>
      <RealEstateForYou />
      <ProjectForYou />
      <LocationRealEstateVue />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RealEstateForYou from "@/components/Home/RealEstateForYou.vue";
import ProjectForYou from "@/components/Home/ProjectForYou.vue";
import LocationRealEstateVue from '@/components/Home/LocationRealEstate.vue';
import HeadlineNews from '@/components/Home/HeadlineNews.vue';

export default {
  data() {
    return {
      selectedType: "",
      searchForm: {
        searchKey: '',
      },
      tabNews: [
        {
          label: "Tin nổi bật",
          name: "headline",
        },
        {
          label: "Tin tức",
          name: "all",
        },
        {
          label: "BĐS TPHCM",
          name: "hcm",
        },
        {
          label: "BĐS Hà Nội",
          name: "hn",
        },
      ],
      activeName: "headline",
      newsList: [
        {
            id: 1,
            title: "Dự Báo Thị Trường BĐS 2024: Những Chuyển Biến Đầy Khởi Sắc?",
            image: "https://img.iproperty.com.my/angel/520x300-crop/wp-content/uploads/sites/7/2023/12/bds-1-1-2.jpg",
            sub_title: "Khu vực cửa ngõ thành phố có nguồn cung giá hợp lí, điều kiện an cư tiện nghi, chi phí sinh hoạt hàng ngày rẻ… những điều này đang tác động tích cực đến tâm lí “thoát li trung tâm” của người mua nhà hiện nay. ",
            author: "Nguyễn Nam",
            created_at: "2023-12-17 14:27:10",
        },
        {
            id: 2,
            title: "Lãi Vay Ưu Đãi, Rước Ngay Nhà Đẹp Xế Sang Rộn Ràng Đón Tết Cùng BIDV",
            image: "https://img.iproperty.com.my/angel/520x300-crop/wp-content/uploads/sites/7/2023/12/bds-2-1.jpg",
            sub_title: "Khu vực cửa ngõ thành phố có nguồn cung giá hợp lí, điều kiện an cư tiện nghi, chi phí sinh hoạt hàng ngày rẻ… những điều này đang tác động tích cực đến tâm lí “thoát li trung tâm” của người mua nhà hiện nay. ",
            author: "Trịnh Huy Bằng",
            created_at: "2023-12-17 14:27:10",
        },
        {
            id: 3,
            title: "Loạt Chính Sách Bán Hàng Khủng Kích Cầu Người Mua Cuối Năm",
            image: "https://img.iproperty.com.my/angel/750x1000-fit/wp-content/uploads/sites/7/2023/12/dong-nai-1.jpg",
            sub_title: "Khu vực cửa ngõ thành phố có nguồn cung giá hợp lí, điều kiện an cư tiện nghi, chi phí sinh hoạt hàng ngày rẻ… những điều này đang tác động tích cực đến tâm lí “thoát li trung tâm” của người mua nhà hiện nay. ",
            author: "Nguyễn Nam",
            created_at: "2023-12-01 14:27:10",
        },
        {
            id: 4,
            title: "Sắp Diễn Ra Diễn Đàn “Thị Trường Bất Động Sản Năm 2024 - Nhận Diện Thách Thức Và Cơ Hội Phục Hồi”",
            image: "https://img.iproperty.com.my/angel/520x300-crop/wp-content/uploads/sites/7/2023/12/quan-5-gan-quan-nao-ava.jpg",
            sub_title: "Khu vực cửa ngõ thành phố có nguồn cung giá hợp lí, điều kiện an cư tiện nghi, chi phí sinh hoạt hàng ngày rẻ… những điều này đang tác động tích cực đến tâm lí “thoát li trung tâm” của người mua nhà hiện nay. ",
            author: "Trịnh Huy Bằng",
            created_at: "2023-12-17 14:27:10",
        },
        {
            id: 5,
            title: "Dự Báo Hướng Đi Của Thị Trường Đất Nền Năm 2024",
            image: "https://img.iproperty.com.my/angel/520x300-crop/wp-content/uploads/sites/7/2023/12/chung-cu-mini-1.jpg",
            sub_title: "Khu vực cửa ngõ thành phố có nguồn cung giá hợp lí, điều kiện an cư tiện nghi, chi phí sinh hoạt hàng ngày rẻ… những điều này đang tác động tích cực đến tâm lí “thoát li trung tâm” của người mua nhà hiện nay. ",
            author: "Nguyễn Nam",
            created_at: "2024-01-03 14:27:10",
        },
      ],
    };
  },
  components: {
    RealEstateForYou,
    ProjectForYou,
    LocationRealEstateVue,
    'headline-news' : HeadlineNews,
  },
};
</script>

<style scoped>
@media screen and (min-width:1260px){
  .home {
    margin: 5% 10% 0 10%;
  }
}

@media screen and (max-width:1260px){
  .home {
    margin: 5% 20px 0 20px;
  }
}

.news {
  margin: 0px 20px 0 20px;
}

.el-tabs__item {
  height: 45px;
  font-size: 20px;
  font-weight: 500;
  color: #000;
}

.search {
  padding: 13rem;
  background-image: url(https://lavenderstudio.com.vn/wp-content/uploads/2017/08/chup-hinh-noi-that-9-1024x683.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.search > p {
  justify-items: center;
  color: white;
  font-weight: 500;
  font-size: 2em;
}

.input-form {
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 10px;
  height: 50px;
  width: 80%;
  padding:7px 10px 7px 0;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
  width: 20%;
}

.search-btn {
  margin: 4px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
}
</style>
