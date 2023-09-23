<template>
  <div class="container">
    <div class="register-form">
      <h2 class="text-center" style="margin-bottom: 20px">Đăng ký tài khoản</h2>
      <el-form ref="registerForm" @submit.native.prevent="register">
        <el-form-item label="Avatar" label-for="avatar">
          <br />
          <div>
            <input
              type="file"
              accept="image/*"
              id="avatar"
              ref="uploadAvatar"
              @change="changeAvatar"
            />
            <div v-if="imageUrl" class="avatar-display">
              <img :src="imageUrl" class="avatar" />
              <span class="delete-avatar" @click="deleteAvatar()"
                ><i class="el-icon-close"></i
              ></span>
            </div>
            <div v-else>
              <a class="btn btn-upload"><i class="el-icon-upload avatar-uploader-icon" ></i>  </a>
            </div>
          </div>
        </el-form-item>
        
        <el-form-item label="Họ và tên" label-for="username">
          <el-input
            id="username"
            v-model="username"
            placeholder="Họ và tên"
            required
          ></el-input>
        </el-form-item>
        <el-form-item label="Email" label-for="email">
          <el-input
            id="email"
            v-model="email"
            placeholder="Email"
            type="email"
            required
          ></el-input>
        </el-form-item>
        <el-form-item label="Số điện thoại" label-for="phone">
          <el-input
            id="phone"
            v-model="phone"
            placeholder="Số điện thoại chính"
            required
          ></el-input>
        </el-form-item>
        <el-form-item label="Mật khẩu" label-for="password">
          <el-input
            id="password"
            v-model="password"
            placeholder="Mật khẩu"
            type="password"
            required
          ></el-input>
        </el-form-item>
        <el-form-item label="Xác nhận mật khẩu" label-for="confirmPassword">
          <el-input
            id="confirmPassword"
            v-model="confirmPassword"
            placeholder="Xác nhận mật khẩu"
            type="password"
            required
          ></el-input>
        </el-form-item>
        <el-button class="register-btn" type="primary" native-type="submit"
          >Đăng ký</el-button
        >
        <div style="text-align: center; margin-top: 20px">
          <span>Đã có tài khoản? </span>
          <a href="/dang-nhap" style="text-decoration: none">Đăng nhập</a> tại
          đây
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase.js";
import axios from "axios";
// import { Notification } from "vue-notification";

export default {
  data() {
    return {
      avatars: [],
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      imageUrl: "",
      avatar: "",
    };
  },
  methods: {
    async register() {
      var storageRef = ref(
        storage,
        `avatars/` +
          Math.random().toString(36).slice(2, 8) +
          `${this.avatar.name}`
      );
      await uploadBytes(storageRef, this.avatar);
      var downloadURL = await getDownloadURL(storageRef);

      // Perform the registration process and store the download URLs in the database
      var userData = {
        username: this.username,
        email: this.email,
        phone: this.phone,
        password: this.password,
        avatar: downloadURL,
      };
      axios.post("/register", userData).then((response) => {
        console.log(response);
        this.$router.push({ name: "dang-nhap" });
      });
    },

    changeAvatar(event) {
      this.avatar = event.target.files[0];
      this.imageUrl = URL.createObjectURL(this.avatar);
    },
    deleteAvatar() {
      this.imageUrl = "";
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 95vh;
}

.register-form {
  margin: 20px;
  background-color: #f1f1f1;
  padding: 50px;
  width: 40%;
  border-radius: 5px;
}

.avatar-uploader {
  display: flex;
  justify-content: center;
}

.avatar-uploader .el-upload {
  border: #090909 solid 1px;
  border-radius: 6px;
  cursor: pointer;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-display {
  position: relative;
}

.delete-avatar {
  position: absolute;
  top: -25px;
  right: -10px;
}

.avatar-uploader-icon {
  font-size: 45px;
  color: #8c939d;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}

.avatar {
  width: 50px;
  height: 50px;
  display: block;
  border-radius: 50%;
}

.register-btn {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background-color: #007bff;
  font-size: 16px;
  font-weight: bold;
}
</style>