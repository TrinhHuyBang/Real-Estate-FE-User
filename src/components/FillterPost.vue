<template>
  <div class="filter-post">
    <h4>Bộ lọc tìm kiếm</h4>
    <label for="post-type">Loại nhà đất</label>
    <el-select
      class="input-filter"
      id="post-type"
      filterable
      clearable
      placeholder="Tất cả"
      v-model="postTypeSelected"
      :disabled="disabledSelectType"
    >
    <div v-if="type == 'sell'">
      <el-option
        v-for="postType in postTypes.sell"
        :key="postType"
        :value="postType"
      > {{ postType }}
      </el-option>
    </div>
    <div v-else>
      <el-option
        v-for="postType in postTypes.rent"
        :key="postType"
        :value="postType"
      > {{ postType }}
      </el-option>
    </div>
    </el-select>
    <label for="post-area">Khu vực</label>
    <!-- <el-select
      class="input-filter"
      id="post-area"
      clearable
      placeholder="Tất cả"
    ></el-select> -->
    <label for="post-price">Mức giá</label>
    <el-select
      class="input-filter"
      id="post-price"
      clearable
      placeholder="Tất cả"
      
      v-model="priceSelected"
    >
      <div class="price-input-filter">
        <el-input-number
          :min="0"
          :controls="false"
          v-model="startFilterPrice"
          placeholder="Từ"
        ></el-input-number>
        <i class="el-icon-right"></i>
        <el-input-number
          :controls="false"
          v-model="endFilterPrice"
          placeholder="Đến"
        ></el-input-number>
      </div>
      <el-option
        v-for="(price, index) in optionPrice"
        :key="index"
        :value="price"
        >{{ price }}</el-option
      >
    </el-select>
    <label for="post-size">Diện tích</label>
    <el-select
      class="input-filter"
      id="post-size"
      clearable
      placeholder="Tất cả"
      v-model="sizeSelected"
    >
    <div>
      
    </div>
      <div class="price-input-filter">
        <el-input-number
          :min="0"
          :controls="false"
          v-model="startFilterSize"
          placeholder="Từ"
        ></el-input-number>
        <i class="el-icon-right"></i>
        <el-input-number
          :controls="false"
          v-model="endFilterSize"
          placeholder="Đến"
        ></el-input-number>
      </div>
      <hr>
      <el-option
        v-for="(size, index) in optionSize"
        :key="index"
        :value="size"
        >{{ size }}</el-option
      >
    </el-select>
    <label for="post-type"></label>
    <!-- <el-select
      class="input-filter"
      id="post-type"
      clearable
      placeholder="Tất cả"
    ></el-select> -->
    <div class="action-filter">
      <el-button type="danger" icon="el-icon-refresh" @click="resetFilter">Đặt lại</el-button>
      <el-button type="primary" @click="applyFilter">Áp dụng</el-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import axios from "axios";

export default {
  props: ['type'],
  computed: mapState({
        postTypes: (state) => state.postTypes, 
  }),
  mounted() {
    this.setPostType();
    this.disabledPostType();
  },
  data() {
    return {
      optionPrice: [
        "Dưới 500 triệu",
        "500 - 800 triệu",
        "800 triệu - 1 tỷ",
        "1 - 2 tỷ",
        "2 - 3 tỷ",
        "3 - 5 tỷ",
        "5 - 7 tỷ",
        "7 - 10 tỷ",
        "10 - 20 tỷ",
        "20 - 30 tỷ",
        "30 - 40 tỷ",
        "40 - 60 tỷ",
        "Trên 60 tỷ",
        "Thoả thuận",
      ],
      priceSelected: "",
      disabledSelectType: false,
      startFilterPrice: null,
      endFilterPrice: null,
      optionSize: [
        "Dưới 30 m²",
        "30 - 50 m²",
        "50 - 80 m²",
        "80 - 100 m²",
        "100 - 150 m²",
        "150 - 200 m²",
        "200 - 250 m²",
        "250 - 300 m²",
        "300 - 500 m²",
        "Trên 500 m²",
      ],
      sizeSelected: "",
      startFilterSize: null,
      endFilterSize: null,
      postTypeSelected: "",
    };
  },

  watch: {
    endFilterPrice() {
      this.updatePriceSelected();
    },
    startFilterPrice() {
      this.updatePriceSelected();
    },
    startFilterSize(){
      this.updateSizeSelected();
    },
    endFilterSize(){
      this.updateSizeSelected();
    },
    priceSelected(){
      this.updatePrice();
    }
  },

  methods: {
    disabledPostType(){
      if(this.$route.name !== "rentPost" && this.$route.name !=="sellPost"){
        this.disabledSelectType = true;
      }
      console.log(this.$route.name);
    },
    updatePriceSelected() {
      // Xử lý logic để cập nhật giá trị của priceSelected dựa trên startFilterPrice và endFilterPrice
      // Ví dụ:
      if(this.startFilterPrice > this.endFilterPrice && this.endFilterPrice != 0){
        var $temp = this.startFilterPrice;
        this.startFilterPrice = this.endFilterPrice;
        this.endFilterPrice = $temp;
      }
      if (this.startFilterPrice > 0 && this.endFilterPrice > 0) {
        this.startFilterPrice/1000 >= 1 ? this.priceSelected = `${this.startFilterPrice/1000} tỷ - ` : this.priceSelected = `${this.startFilterPrice} triệu - `;
        this.endFilterPrice/1000 >= 1 ? this.priceSelected += `${this.endFilterPrice/1000} tỷ` : this.priceSelected += `${this.endFilterPrice} triệu`;
      } else if (this.startFilterPrice > 0) {
        this.startFilterPrice/1000 >=1 ? this.priceSelected = `>= ${this.startFilterPrice/1000} tỷ` : this.priceSelected = `>= ${this.startFilterPrice} triệu`;
      } else if (this.endFilterPrice > 0) {
        this.endFilterPrice/1000 >= 1 ? this.priceSelected = `<= ${this.endFilterPrice/1000} tỷ` : this.priceSelected = `<= ${this.endFilterPrice} triệu`;
      } else {
        this.priceSelected = "";
      }
    },

    updateSizeSelected(){

      if(this.startFilterSize > this.endFilterSize && this.endFilterSize != 0){
        var $temp = this.startFilterSize;
        this.startFilterSize = this.endFilterSize;
        this.endFilterSize = $temp;
      }

      if (this.startFilterSize > 0 && this.endFilterSize > 0) {
        this.sizeSelected = `${this.startFilterSize} - ${this.endFilterSize} m²`;
      } else if (this.startFilterSize > 0) {
       this.sizeSelected = `>= ${this.startFilterSize} m²`;
      } else if (this.endFilterSize > 0) {
        this.sizeSelected = `<= ${this.endFilterSize} m²`;
      } else {
        this.sizeSelected = "";
      }
    },

    updatePrice(){
      if(this.priceSelected === "Dưới 500 triệu"){
        this.startFilterPrice = 0;
        this.endFilterPrice = 500;
      } else if(this.priceSelected === "500 - 800 triệu"){
        this.startFilterPrice = 500;
        this.endFilterPrice = 800;
      } else if(this.priceSelected === "800 triệu - 1 tỷ"){
        this.startFilterPrice = 800;
        this.endFilterPrice = 1000;
      } else if(this.priceSelected === "1 - 2 tỷ"){
        this.startFilterPrice = 1000;
        this.endFilterPrice = 2000;
      } else if(this.priceSelected === "2 - 3 tỷ"){
        this.startFilterPrice = 2000;
        this.endFilterPrice = 3000;
      } else if(this.priceSelected === "3 - 5 tỷ"){
        this.startFilterPrice = 3000;
        this.endFilterPrice = 5000;
      } else if(this.priceSelected === "5 - 7 tỷ"){
        this.startFilterPrice = 5000;
        this.endFilterPrice = 7000;
      } else if(this.priceSelected === "7 - 10 tỷ"){
        this.startFilterPrice = 7000;
        this.endFilterPrice = 10000;
      } else if(this.priceSelected == "10 - 20 tỷ"){
        this.startFilterPrice = 10000;
        this.endFilterPrice = 20000;
      } else if(this.priceSelected === "20 - 30 tỷ"){
        this.startFilterPrice = 20000;
        this.endFilterPrice = 30000;      
      } else if(this.priceSelected === "30 - 40 tỷ"){
        this.startFilterPrice = 30000;
        this.endFilterPrice = 40000;
      } else if(this.priceSelected === "40 - 60 tỷ"){
        this.startFilterPrice = 40000;
        this.endFilterPrice = 60000;
      } else if(this.priceSelected === "Trên 60 tỷ"){
        this.startFilterPrice = 60000;
        this.endFilterPrice = 9999999999;
      } else if(this.priceSelected === "Thoả thuận"){
        this.startFilterPrice = 0;
        this.endFilterPrice = 0;
      } else if(this.priceSelected === ""){
        this.startFilterPrice = 0;
        this.endFilterPrice = 0;
      }
    },

    ...mapActions(['commitSetPostType']),
    setPostType(){
      axios.get('/getPostType')
        .then(response => {
          this.commitSetPostType(response.data)
        })
        .catch(error => {
          console.error(error);
        });
    },

    resetFilter(){
      this.postTypeSelected = '';
      this.priceSelected = '';
      this.sizeSelected = '';
      this.startFilterPrice = null;
      this.endFilterPrice = null;
      this.startFilterSize = null;
      this.endFilterSize = null;
    },

    applyFilter(){
      console.log(this.priceSelected);
      console.log(this.startFilterPrice);
      console.log(this.endFilterPrice);
    },
  }
};
</script>

<style >
.filter-post {
  margin: 30px 0 0 40px;
  min-width: 250px;
  width: 60%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
}

.input-filter {
  margin: 5px 0 10px 0;
  width: 100%;
}

.action-filter {
  display: flex;
  flex-direction: row;
}

.price-input-filter {
  display: flex;
  flex-direction: row;
  width: 250px;
  padding: 20px;
}

.el-icon-right {
  margin: 10px 3px 0 3px;
}
</style>