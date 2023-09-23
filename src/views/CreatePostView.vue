<template>
<div class="create-post-view">
  <div class="manage-nav">
    <manage-nav></manage-nav>
  </div>
  <div class="create-post">
      <div class="container">
        <el-card class="basic-infor card">
          <div class="header-basic-infor">
            <h2>Thông tin cơ bản</h2>
            <div class="select-tyle-action">
              <el-button class="sell-button" :class="{ active: activeButton === 'sell' }" @click="activeButton = 'sell'">Bán</el-button>
              <el-button class="rent-button" :class="{ active: activeButton === 'rent' }" @click="activeButton = 'rent'">Cho thuê</el-button>
            </div>
          </div>
          <label class="label" for="type">Loại bất động sản</label>
          <el-select class="select" v-model="value" filterable placeholder="Chọn loại bất động sản" clearable>
            <div v-if="activeButton === 'sell'">
              <el-option v-for="item in typeOption.sell" :key="item" :label="item" :value="item"></el-option>
            </div>
            <div v-else>
              <el-option v-for="item in typeOption.rent" :key="item" :label="item" :value="item"></el-option>
            </div>
          </el-select>

          <table style="width: 100%">
            <tr>
              <td style="width: 50%">
                <label class="label" for="province">Tỉnh, thành phố</label>
                <el-select class="select" id="province" v-model="province" placeholder="-----  Tỉnh, thành phố  -----" filterable clearable>
                  <el-option v-for="item in provinces" :key="item.province_id" :label="item.province_name" :value="item.province_name + '-' + item.province_id"></el-option>
                </el-select>
              </td>
              <td style="width: 50%">
                <label class="label" for="district">Quận, huyện</label>
                <el-select :disabled="!province" class="select" id="district" v-model="district" placeholder="-----  Quận, huyện  -----" filterable clearable>
                  <el-option v-for="item in districts" :key="item.district_id" :label="item.district_name" :value="item.district_name + '-' + item.district_id"></el-option>
                </el-select>
              </td>
            </tr>
            <tr>
              <td>
                <label class="label" for="ward">Phường, xã</label>
                <el-select :disabled="!district" class="select" id="ward" v-model="ward" placeholder="-----  Phường, xã  -----" filterable clearable>
                  <el-option v-for="item in wards" :key="item.ward_id" :label="item.ward_name" :value="item.ward_name + '-' + item.ward_id"></el-option>
                </el-select>
              </td>
              <td>
                <label class="label" for="street">Đường, phố</label>
                <el-input :disabled="!ward" type="text" class="select" id="street" v-model="street" placeholder="-----  Đường, phố  -----"></el-input>
              </td>
            </tr>
          </table>

          <label class="label" for="project">Dự án</label>
          <el-select class="select" id="project" v-model="project" placeholder="Chọn dự án">
            <el-option v-for="item in projects" :key="item" :label="item" :value="item"></el-option>
          </el-select>

          <label class="label" for="address">Địa chỉ hiển thị</label>
          <el-input type="text" class="input" id="address" v-model="address" placeholder="Có thể bổ sung chi tiết về ngõ, hẻm" required></el-input>
        </el-card>

        <el-card class="post-infor card">
          <h2>Thông tin bài viết</h2>
          <label class="label" for="title">Tiêu đề</label>
          <el-input type="text" class="input" id="title" v-model="title" placeholder="VD: Bán nhà mặt đường tại Giải Phóng" required minlength="30" maxlength="90" show-word-limit></el-input>
          
          <label class="label" for="description">Mô tả</label>
          <el-input type="textarea" :autosize="{ minRows: 6}" class="input" id="description" v-model="description" placeholder="Nhập mô tả chung về bất động sản của bạn. VD: Gần các trường đại học lớn như Đại học Bách Khoa Hà Nội,..." required minlength="30" maxlength="3000" show-word-limit></el-input>

        </el-card>

        <el-card class="real-estate-infor card">
          <h2>Thông tin bất động sản</h2>

          <label class="label" for="title">Diện tích (m&sup2;)</label>
          <el-input class="input" type="number" id="size" v-model="size" placeholder="Nhập diện tích VD:100" required></el-input>
          <table style="width: 100%">
            <td>
              <label class="label" for="title">Mức giá</label>
              <el-input class="input" type="number" id="price" v-model="price" placeholder="Nhập giá VD:10000000" required></el-input>
            </td>
            <td style="padding-left: 10px">
              <label class="label" for="title">Đơn vị</label>
              <el-select class="select" id="unit" v-model="unitSelected">
                <el-option v-for="item in unit" :key="item.value" :label="item.text" :value="item.value"></el-option>
              </el-select>
            </td>
          </table>
          <label for="legalDocument" class="label">Giấy tờ pháp lý</label>
          <div class="button-container" id="legalDocument">
            <div v-for="legalDocument in legalDocuments" :key="legalDocument">
              <el-button :v-model="legalDocument" class="horizontal-button">{{
                legalDocument
              }}</el-button>
            </div>
            <el-button class="horizontal-button" @click="dialogLegal = true">+</el-button>
            <el-dialog title="Thêm giấy tờ pháp lý" width="500px" :visible.sync="dialogLegal">
              <el-form :model="form">
                <el-form-item >
                  <el-input v-model="newLegal" autocomplete="off" placeholder="Nhập loại giấy tờ mới"></el-input>
                </el-form-item>
              </el-form>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogLegal = false">Huỷ</el-button>
                <el-button type="primary" @click="addLegal">Thêm</el-button>
              </span>
            </el-dialog>
          </div>

          <label for="furniture" class="label">Nội thất</label>
          <div class="button-container" id="furniture">
            <div v-for="furniture in furnitures" :key="furniture">
              <el-button :v-model="furniture" class="horizontal-button">{{
                furniture
              }}</el-button>
            </div>
            <el-button class="horizontal-button" @click="dialogFurniture = true">+</el-button>
            <el-dialog title="Thêm trạng thái nội thất" width="500px" :visible.sync="dialogFurniture">
              <el-form :model="form">
                <el-form-item >
                  <el-input v-model="newFurniture" autocomplete="off" placeholder="Nhập trạng thái nội thất mới"></el-input>
                </el-form-item>
              </el-form>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogFurniture = false">Huỷ</el-button>
                <el-button type="primary" @click="addFurniture">Thêm</el-button>
              </span>
            </el-dialog>
          </div>

          <table style="width: 100%">
            <tr>
              <td>
                <label class="label" for="bedroom">Số phòng ngủ</label>
                <el-input-number class="input" id="bedroom" v-model="bedroom" :min="0"></el-input-number>
              </td>
              <td>
                <label class="label" for="toilet">Số phòng tắm, vệ sinh</label>
                <el-input-number class="input" id="toilet" v-model="toilet" :min="0"></el-input-number>
              </td>
              <td>
                <label class="label" for="floor">Số tầng</label>
                <el-input-number class="input" id="floor" v-model="floor" :min="0"></el-input-number>
              </td>
            </tr>
          </table>
        </el-card>

        <el-card class="contact-infor card">
          <h2>Thông tin liên hệ</h2>
          <label class="label" for="uesrname">Tên liên hệ</label>
          <el-input class="input" id="uesrname" v-model="username" placeholder="Nhập tên liên hệ" required ></el-input>
          
          <label class="label" for="user_address">Địa chỉ</label>
          <el-input class="input" id="user_address" v-model="user_address" placeholder="Nhập địa chỉ" required ></el-input>
          
          <label class="label" for="email">Email</label>
          <el-input class="input" id="email" v-model="email" placeholder="Nhập vào email" required ></el-input>

          <el-button type="primary">Tiếp tục</el-button>
        </el-card>
      </div>
  </div>
</div>
  
</template>

<script>
import ManageNav from "@/layouts/ManageNav.vue";
import axios from "axios";

export default {
  components: {
    "manage-nav": ManageNav,
  },
  data() {
    return {
      username: "",
      activeButton: "sell", // Track the active button, initially set to "ban"
      propertyType: null,
      selected: null,
      dialogLegal: false,
      dialogFurniture: false,
      form: {
        name: '',
      },
      typeOption: {
        sell: [
          "Bán căn hộ chung cư",
          "Bán nhà riêng",
          "Bán nhà biệt thự liền kề",
          "Bán nhà mặt phố",
          "Bán nhà phố thương mại",
          "Bán đất nền dự án",
          "Bán đất",
          "Bán trang trại, khu nghỉ dưỡng",
          "Bán condotel",
          "Bán kho, nhà xưởng",
          "Bán loại bất động sản khác",
        ],
        rent: [
          "Cho thuê căn hộ chung cư",
          "Cho thuê nhà riêng",
          "Cho thuê nhà biệt thự, liền kề",
          "Cho thuê nhà mặt phố",
          "Cho thuê nhà thương mại",
          "Cho thuê nhà trọ, phòng trọ",
          "Cho thuê văn phòng",
          "Cho thuê, sang nhượng, cửa hàng, ki ốt",
          "Cho thuê kho, nhà xưởng, đất",
          "Cho thuê loại bất động sản khác",
        ],
      },
      provinces: [],
      districts: [],
      wards: [],
      quickAddress: "",
      project: "",
      projects: [],
      province: "",
      district: "",
      ward: "",
      street: "",
      address: "",
      title: "",
      description: "",
      uploadedImages: [],
      images: [],
      legalDocuments: ["Sổ đỏ/ Sổ hồng", "Hợp đồng mua bán", "Đang chờ sổ"],
      newLegal: "",
      legalSelected: "",
      furnitures: ["Đầy đủ", "Cơ bản", "Không có"],
      newFurniture: "",
      furnitureSelected: "",
      size: null,
      price: null,
      value: null,
      bedroom: null,
      toilet: null,
      floor: null,
      user_address: "",
      email: "",
      unit: [
        { value: "VND", text: "VND" },
        { value: "Giá/m2", text: "Giá/m2" },
        { value: "Thua thuan", text: "Thoả thuận" },
      ],
      unitSelected: "VND",
    };
  },

  mounted() {
    this.getListProvince();
  },
  methods: {
    filterImages(newImages) {
      this.uploadedImages = newImages;
    },
    addLegal() {
      this.legalDocuments.push(this.newLegal);
      this.newLegal = "";
      this.dialogLegal = false;
    },
    addFurniture() {
      this.furnitures.push(this.newFurniture);
      this.newFurniture = "";
      this.dialogFurniture = false;
    },

    async getListProvince() {
      try {
        const response = await axios.get("https://vapi.vnappmob.com/api/province");
        if(response.status == 200) {
          this.provinces = response.data.results;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async getListDistrict( province_id) {
      try {
        const response = await axios.get(`https://vapi.vnappmob.com/api/province/district/${province_id}`);
        if(response.status == 200) {
          this.districts = response.data.results;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async getListWard( district_id) {
      try {
        const response = await axios.get(`https://vapi.vnappmob.com/api/province/ward/${district_id}`);
        if(response.status == 200) {
          this.wards = response.data.results;
        }
      } catch (error) {
        console.error(error);
      }
    },
  },

  watch: {
    province(val){
      if(val){
        var $result = val.split("-");
        this.getListDistrict($result[1]);
        this.address = $result[0];
      } else {
        this.districts = [];
        this.wards = [];
        this.address = "";
      }
      this.district = "";
    },
    district(val){
      if(val){
        var $result = val.split("-");
        this.getListWard($result[1]);
        this.address = $result[0] + ', ' + this.province.split("-")[0];
      } else {
        this.wards = [];
        this.address = this.province.split("-")[0];
      }
      this.ward= "";
    },
    ward(val){
      if (val) {
        var $result = val.split("-");
        this.address = $result[0] + ', ' + this.district.split("-")[0] + ', ' + this.province.split("-")[0];
      } else {
        if (this.district) {
          this.address = this.district.split("-")[0] + ', ' + this.province.split("-")[0];
        }
      }
      this.street = "";
    },
    street(val) {
      if (val) {
        this.address = val + ', ' + this.ward.split("-")[0] + ', ' + this.district.split("-")[0] + ', ' + this.province.split("-")[0];
      } else {
        if (this.ward) {
          this.address = this.ward.split("-")[0] + ', ' + this.district.split("-")[0] + ', ' + this.province.split("-")[0];
        }
      }
    }
  },
};
</script>

<style scoped>
.create-post-view{
  display: flex;
  flex-direction: row;
}

.card {
  width: 60%;
  margin: 10px;
  padding: 20px;
}

.create-post {
  width: 80%;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.button-container {
  margin-top: 5px;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}

.header-basic-infor{
  display: flex;
  flex-direction: row;
}

.select-tyle-action{
  margin-left: 10%;
  display: flex;
  flex-direction: row;
}

.horizontal-button {
  margin-right: 10px;
  border: gray solid 1px;
  border-radius: 20px;
  border: none;
  color: black;
}

.select {
  width: 100%;
  height: 35px;
  border: rgb(227, 224, 224) solid 1px;
  border-radius: 5px;
  margin-top: 4px;
  margin-bottom: 10px;
}

.sell-button {
  /* background-color: #007bff; */
  width: 100px;
}

.rent-button {
  /* background-color: #28a745; */
  width: 100px;
}

.active {
  background-color: #dc3545 !important;
  color: #fff !important;
}

.label {
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 5px;
}

.input {
  margin-top: 5px;
  margin-bottom: 10px;
}

</style>