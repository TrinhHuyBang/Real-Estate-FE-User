<template>
  <el-header class="header shadow-sm" style="height: 90px">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      menu-trigger="hover"
      :router="true"
    >
      <el-menu-item index="/" class="logo">
        <img class="logo" src="/Logo.png"
        alt="Logo"/>
      </el-menu-item>
      <el-submenu index="/nha-dat-ban" @click="handleChangPagehange('/nha-dat-ban')">
        <template slot="title">Nhà đất bán</template>
        <el-menu-item index="1" @click="handleChangPagehange('/nha-dat-ban/can-ho-chung-cu')">Bán căn hộ chung cư</el-menu-item>
        <el-menu-item index="2" @click="handleChangPagehange('/nha-dat-ban/nha-rieng')">Bán nhà riêng</el-menu-item>
        <el-menu-item index="3" @click="handleChangPagehange('/nha-dat-ban/nha-biet-thu-lien-ke')">Bán nhà biệt thự liền kề</el-menu-item>
        <el-menu-item index="4" @click="handleChangPagehange('/nha-dat-ban/nha-mat-pho')">Bán nhà mặt phố</el-menu-item>
        <el-menu-item index="5" @click="handleChangPagehange('/nha-dat-ban/nha-pho-thuong-mai')">Bán nhà phố thương mại</el-menu-item>
        <el-menu-item index="6" @click="handleChangPagehange('/nha-dat-ban/dat-nen-du-an')">Bán đất nền dự án</el-menu-item>
        <el-menu-item index="7" @click="handleChangPagehange('/nha-dat-ban/dat')">Bán đất</el-menu-item>
        <el-menu-item index="8" @click="handleChangPagehange('/nha-dat-ban/trang-trai-khu-nghi-duong')">Bán trang trại, khu nghỉ dưỡng</el-menu-item>
        <el-menu-item index="9" @click="handleChangPagehange('/nha-dat-ban/condotel')">Bán condotel</el-menu-item>
        <el-menu-item index="10" @click="handleChangPagehange('/nha-dat-ban/kho-nha-xuong')">Bán kho, nhà xưởng</el-menu-item>
        <el-menu-item index="11" @click="handleChangPagehange('/nha-dat-ban/loai-bat-dong-san-khac')">Bán loại bất động sản khác</el-menu-item>
      </el-submenu>
      <el-submenu index="/nha-dat-cho-thue">
        <template slot="title">Cho thuê nhà đất</template>
        <el-menu-item index="12" @click="handleChangPagehange('/nha-dat-cho-thue/can-ho-chung-cu')">Cho thuê căn hộ chung cư</el-menu-item>
        <el-menu-item index="13" @click="handleChangPagehange('/nha-dat-cho-thue/nha-rieng')">Cho thuê nhà riêng</el-menu-item>
        <el-menu-item index="14" @click="handleChangPagehange('/nha-dat-cho-thue/nha-biet-thu-lien-ke')">Cho thuê nhà biệt thự liền kề</el-menu-item>
        <el-menu-item index="15" @click="handleChangPagehange('/nha-dat-cho-thue/nha-mat-pho')">Cho thuê nhà mặt phố</el-menu-item>
        <el-menu-item index="16" @click="handleChangPagehange('/nha-dat-cho-thue/nha-thuong-mai')">Cho thuê nhà thương mại</el-menu-item>
        <el-menu-item index="17" @click="handleChangPagehange('/nha-dat-cho-thue/nha-tro-phong-tro')">Cho thuê nhà trọ, phòng trọ</el-menu-item>
        <el-menu-item index="18" @click="handleChangPagehange('/nha-dat-cho-thue/van-phong')">Cho thuê văn phòng</el-menu-item>
        <el-menu-item index="19" @click="handleChangPagehange('/nha-dat-cho-thue/sang-nhuong-cua-hang-ki-ot')">Cho thuê, sang nhượng, cửa hàng, ki ốt</el-menu-item>
        <el-menu-item index="20" @click="handleChangPagehange('/nha-dat-cho-thue/kho-nha-xuong-dat')" >Cho thuê kho, nhà xưởng, đất</el-menu-item>
        <el-menu-item index="21" @click="handleChangPagehange('/nha-dat-cho-thue/loai-bat-dong-san-khac')">Cho thuê loại bất động sản khác</el-menu-item>
      </el-submenu>
      <el-submenu index="/du-an">
        <template slot="title">Dự án</template>
        <el-menu-item index="22"  @click="handleChangPagehange('/du-an/can-ho-chung-cu')">Căn hộ chung cư</el-menu-item>
        <el-menu-item index="23"  @click="handleChangPagehange('/du-an/cao-oc-van-phong')">Cao ốc văn phòng</el-menu-item>
        <el-menu-item index="24"  @click="handleChangPagehange('/du-an/trung-tam-thuong-mai')">Trung tâm thương mại</el-menu-item>
        <el-menu-item index="25"  @click="handleChangPagehange('/du-an/khi-do-thi-moi')">Khi đô thị mới</el-menu-item>
        <el-menu-item index="26"  @click="handleChangPagehange('/du-an/khu-phuc-hop')">Khu phức hợp</el-menu-item>
        <el-menu-item index="27"  @click="handleChangPagehange('/du-an/nha-o-xa-hoi')">Nhà ở xã hội</el-menu-item>
        <el-menu-item index="28"  @click="handleChangPagehange('/du-an/khu-nghi-duong-sinh-thai')">Khu nghỉ dưỡng, Sinh thái</el-menu-item>
        <el-menu-item index="29"  @click="handleChangPagehange('/du-an/khu-cong-nghiep')">Khu công nghiệp</el-menu-item>
        <el-menu-item index="30"  @click="handleChangPagehange('/du-an/biet-thu-lien-ke')">Biệt thự, liền kề</el-menu-item>
        <el-menu-item index="31"  @click="handleChangPagehange('/du-an/shophouse')">Shophouse</el-menu-item>
        <el-menu-item index="32"  @click="handleChangPagehange('/du-an/nha-mat-pho')">Nhà mặt phố</el-menu-item>
        <el-menu-item index="33"  @click="handleChangPagehange('/du-an/du-an-khac')">Dự án khác</el-menu-item>
      </el-submenu>
      <el-menu-item index="/tin-tuc" >Tin Tức</el-menu-item>
      <el-submenu index="/danh-ba">
        <template slot="title">Danh bạ</template>
        <el-menu-item index="/doanh-nghiep">Doanh nghiệp</el-menu-item>
        <el-menu-item index="/nha-moi-gioi">Nhà môi giới</el-menu-item>
      </el-submenu>
    </el-menu>

    <div class="auth">
      <template v-if="user && user.id">
        <div>
          <el-badge :value="bookmarkCount ? bookmarkCount : null" :max="99" class="item">
            <router-link style="color: black;" to="/quan-ly-tin-luu"><i class="far fa-heart"></i></router-link>
          </el-badge>
          <el-badge :value="user.notice" :max="99" class="item">
            <i class="far fa-bell"></i>
          </el-badge>
          <el-dropdown class="dropdown" trigger="hover">
            <router-link to="/quan-ly-tin-dang" class="dropdown-trigger username-avt">
              <div>
                <el-image
                  class="avt"
                  :src="user.avatar"
                  alt="Avatar"
                  v-if="user.avatar"
                ></el-image>
                <div v-else class="avatar-placeholder">
                  <span class="avatar-letter">{{ showName() }}</span>
                </div>
              </div>
              <div>
                <span class="name">{{ user.name }}</span>
              </div>
            </router-link>
            <el-dropdown-menu>
              <router-link to="/quan-ly-tin-dang">
                <el-dropdown-item>
                  Quản lý tin đăng
                </el-dropdown-item>
              </router-link>
              <router-link to="/quan-ly-tai-khoan">
                <el-dropdown-item>
                  Thay đổi thông tin cá nhân
                </el-dropdown-item>
              </router-link>
              <span @click="logout()">
                <el-dropdown-item>
                  Đăng xuất
                </el-dropdown-item>
              </span>
            </el-dropdown-menu>
          </el-dropdown>
          <router-link to="/dang-tin">
            <el-button class="btn" type="primary"> Đăng tin </el-button>
          </router-link>
        </div>
      </template>
      <template v-else>
        <div class="item d-flex align-items-center text-muted">
          <router-link to="/dang-nhap">
            <el-button class="btn" type="primary"> Đăng nhập </el-button>
          </router-link>
          <router-link to="/dang-ky">
            <el-button class="btn" type="primary"> Đăng ký </el-button>
          </router-link>
        </div>
      </template>
    </div>
  </el-header>
</template>

<script>
import AuthApi from "@/api/auth"
import { mapState } from 'vuex';
export default {
  data() {
    return {

    };
  },
  computed: mapState({
    user: (state) => state.user, 
    bookmarkCount: (state) => state.bookmarkCount,
  }),
  mounted() {
    this.checkGuest()
  },

  methods: {
    showName() {
      return this.user.name ? this.user.name.split(" ")[this.user.name.split(" ").length - 1][0] : ""
    },
    handleChangPagehange(path) {
      this.$router.push(path)
      window.location.href = this.$router.resolve(path).href
    },
    logout() {
      AuthApi.logout(
        () => {
          localStorage.setItem('token', '')
          window.location.assign('/')
        }
      )
    },
    checkGuest() {
      var guest_id = localStorage.getItem('guest_id')
      if(!guest_id) {
        guest_id = Math.random().toString(36).slice(2, 8) + Math.random().toString(36).slice(2, 8)
        localStorage.setItem('guest_id', guest_id)
      }
    }
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}

router-link {
  color: black;
}

.logo img {
  width: 100%;
  height: 70px;
}

.bell-icon {
  position: relative;
  height: 30px;
  width: 30px;
}

.notification-count {
  position: absolute;
  top: -7px;
  right: 9px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: red;
  color: white;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navigation ul {
  display: flex;
  align-items: center;
  list-style: none;
}

.navigation li {
  margin-right: 20px;
  vertical-align: middle;
}

.navigation a {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.switch {
  text-decoration: none;
  color: black;
}

.navigation a:hover {
  text-decoration: underline;
  text-decoration-color: red;
  text-decoration-thickness: 2px;
}

.item {
  margin-right: 1em;
}

.auth {
  display: flex;
  align-items: center;
}

.auth > div {
  display: flex;
  align-items: center;
  gap: 10px;
}

.icon {
  margin-right: 20px;
  height: 20px;
  width: 20px;
}

.username-avt {
  display: flex;
}

.btn {
  font-weight: bold;
  margin-right: 30px;
  vertical-align: middle;
  width: 120px;
}

.avt {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.name {
  justify-content: center;
}

.dropdown {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin-right: 20px;
}

a {
  text-decoration: none;
}

.dropdown .el-dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  padding: 10px;
}

.dropdown:hover .el-dropdown-menu {
  display: block;
}

.dropdown .dropdown-trigger {
  color: #333;
  white-space: nowrap;
}

.dropdown .el-dropdown-menu a {
  display: block;
  padding: 5px;
  color: #333;
  text-decoration: none;
}

.dropdown .el-dropdown-menu a:hover {
  background-color: #f0f0f0;
}

.avatar-placeholder {
  width: 40px;
  height: 40px;
  background-color: #3498db;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
}
</style>