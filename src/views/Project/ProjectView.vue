<template>
  <div class="row">
    <div class="post-filter-container">
      <div class="filter-post">
        <h4>Tìm kiếm dự án</h4>
        <el-input class="input-filter" placeholder="Nhập từ khoá tìm kiếm" v-model="search" clearable> <i class="el-icon-search el-input__icon" slot="suffix"></i> </el-input>
        <label for="field">Loại hình</label>
        <el-select
          class="input-filter"
          id="field"
          filterable
          clearable
          placeholder="Tất cả"
          v-model="field"
        >
          <el-option v-for="item in fields" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
        <label for="province">Khu vực</label>
        <el-select class="input-filter" id="province" v-model="province" placeholder="-----  Tỉnh, thành phố  -----" filterable clearable>
          <el-option v-for="item in provinces" :key="item.province_id" :label="item.province_name" :value="item.province_name + '-' + item.province_id"></el-option>
        </el-select>
        <el-select :disabled="!province" class="input-filter" id="district" v-model="district" placeholder="-----  Quận, huyện  -----" filterable clearable>
          <el-option v-for="item in districts" :key="item.district_id" :label="item.district_name" :value="item.district_name + '-' + item.district_id"></el-option>
        </el-select>

        <label for="status">Trạng thái</label>
        <el-select class="input-filter" id="status" v-model="statusSelected" placeholder="Trạng thái" filterable clearable>
          <el-option v-for="item in status" :key="item" :label="item" :value="item"></el-option>
        </el-select>
        <div class="action-filter">
          <el-button type="danger" icon="el-icon-refresh" @click="resetFilter">Đặt lại</el-button>
          <el-button type="primary" @click="applyFilter">Tìm kiếm</el-button>
        </div>
      </div>
    </div>
    <div class="project-list">
      <project-list/>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import ProjectList from '@/components/Project/ProjectList.vue'
export default {
  created() {
    this.getListProvince()
  },
  components: {
    "project-list" : ProjectList,
  },

  data() {
    return {
      province: "",
      district: "",
      provinces: [],
      districts: [],
      search: "",
      status: ['Sắp mở bán', 'Đang mở bán', 'Đã bàn giao'],
      statusSelected: "",
    }
  },

  methods: {
    async getListProvince() {
      try {
        const response = await axios.get("https://vapi.vnappmob.com/api/province")
        if(response.status == 200) {
          this.provinces = response.data.results
        }
      } catch (error) {
        console.error(error)
      }
    },
    async getListDistrict( province_id) {
      try {
        const response = await axios.get(`https://vapi.vnappmob.com/api/province/district/${province_id}`)
        if(response.status == 200) {
          this.districts = response.data.results
        }
      } catch (error) {
        console.error(error)
      }
    },

    applyFilter() {

    },
    resetFilter() {

    },
  },
  
  watch: {
    province(val) {
      if(val){
        var $result = val.split("-")
        this.getListDistrict($result[1])
      } else {
        this.districts = []
        this.wards = []
        this.address = ""
      }
      this.district = ""
    },
  }
}
</script>

<style scoped>
.project-list {
  flex: 2;
  margin: 30px 0 0 0px;
}
</style>