<template>
  <div>
    <div class="search">
      <p>Website số 1 về bất động sản - Mua bán cho thuê nhà đất toàn quốc</p>
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
      <RealEstateForYou />
      <ProjectForYou />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RealEstateForYou from "@/components/RealEstateForYou.vue";
import ProjectForYou from "@/components/ProjectForYou.vue";

export default {
  name: "HomeView",
  data() {
    return {
      selectedType: "",
      searchForm: {
        searchKey: '',
      },
    };
  },
  components: {
    RealEstateForYou,
    ProjectForYou,
  },
};
</script>

<style>
.home {
  margin: 5% 10% 0 10%;
}

.search {
  padding: 13rem;
  background-image: url(https://www.ohanaliving.vn/542ac03681516bcca0dd605bedd41a2b.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.search > p {
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
