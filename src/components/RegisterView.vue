<template>
  <div class="container">
    <div class="register-form">
      <h2 class="text-center" style="margin-bottom: 20px">Đăng ký tài khoản</h2>
      <el-form ref="registerForm" @submit.native.prevent="register">
        <el-form-item label="Avatar">
          <br>
            <div class="custom-file-input">
                <label for="fileInput" class="upload-icon" v-if="!hasUploadedAvatar">
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text avt-text">Tải ảnh</div>
                    <input type="file" id="fileInput" @change="handleFileChange" accept="image/*" ref="fileInput" style="display: none"/>
                </label>
                <label for="fileInput" class="upload-icon" v-if="hasUploadedAvatar" :style="{ 'background-image': `url('${imagePreview(avatar)}')` }">
                    <input type="file" id="fileInput" @change="handleFileChange" accept="image/*" ref="fileInput" style="display: none"/>
                </label>
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
          <a href="/dang-nhap" style="text-decoration: none">Đăng nhập</a> tại đây
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase.js";
import AuthApi from "@/api/auth"
import { Notification } from 'element-ui';
// import { Notification } from "vue-notification";

export default {
  data() {
    return {
      hasUploadedAvatar: false,
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      imageUrl: "",
      avatar: null,
    };
  },
  methods: {
    async register() {
      if(this.avatar) {
        var storageRef = ref(
          storage,
          `avatars/` +
            Math.random().toString(36).slice(2, 8) +
            `${this.avatar.name}`
        );
        await uploadBytes(storageRef, this.avatar);
        var downloadURL = await getDownloadURL(storageRef);
      }

      var userData = {
        'username': this.username,
        'email': this.email,
        'phone': this.phone,
        'password': this.password,
        'avatar': downloadURL,
      };
      AuthApi.regiter(
        userData,
        () => {
          Notification.success({
            title: "Thành công",
            message: "Đăng ký tài khoản thành công! Xác thực email để tiếp tục!",
          });
          this.$router.push('/dang-nhap');
        },
        (error) => {
          Notification.error({
            title: "Thất bại",
            message: error.data.error,
          });
        }
      )
    },

    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.avatar = file;
        this.hasUploadedAvatar = true; // Đánh dấu rằng đã có ảnh
      }
      this.$refs.fileInput.value = '';
    },
    imagePreview(file) {
      return URL.createObjectURL(file);
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
  min-width: 450px;
}

.avatar{
    width: 30%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
}

.avt-icon{
  color:gray;
  font-size:30px;
  margin-top: 20px;
}

.avt-text{
  color: gray;
  font-size: 14px;
}

.label{
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 600;
}

.custom-file-input {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.upload-icon {
  width: 100px;
  height: 100px;
  border: 1px dashed #ccc;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #999;
  cursor: pointer;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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