<template>
  <div class="container">
    <div class="login-form">
      <h2 style="margin-left: 32%">Đăng nhập</h2>
      <el-form ref="loginForm" :model="loginForm" @submit.native.prevent="login">
        <el-form-item >
          <label for="username">Tài khoản:</label>
          <el-input
            v-model="loginForm.username"
            placeholder="SĐT chính hoặc email"
          ></el-input>
        </el-form-item>
        <el-form-item >
          <label for="password">Mật khẩu:</label>
          <el-input
            v-model="loginForm.password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Mật khẩu"
            class="password-input"
          >
            <el-button slot="append" icon="el-icon-view" @click="showPassword = !showPassword"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item>
          <router-link to="/quen-mat-khau">Quên mật khẩu?</router-link>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" native-type="submit">Đăng nhập</el-button>
        </el-form-item>
      </el-form>
      <div style="text-align: center">
        <span>Chưa có tài khoản? </span>
        <router-link to="/dang-ky" style="text-decoration: none">Đăng ký</router-link> tại đây
      </div>
    </div>
  </div>
</template>

<script>
import { Notification } from "element-ui";
import AuthApi from "@/api/auth"
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      showPassword: false,
      rememberAccount: false,
      rules: {
        username: [{ required: true, message: "Vui lòng nhập tài khoản", trigger: "blur" }],
        password: [{ required: true, message: "Vui lòng nhập mật khẩu", trigger: "blur" }],
      },
    };
  },
  methods: {
    login() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          const userData = {
            username: this.loginForm.username,
            password: this.loginForm.password,
          };

          AuthApi.login(
            userData,
            (response) => {
              const token = response.access_token
              localStorage.setItem('token', token)
              Notification.success({
                title: "Thành công",
                message: "Đăng nhập thành công",
              });
              window.location.href = "/"
            },
            (error) => {
              Notification.error({
                title: "Thất bại",
                message: error.data.error,
              });
            }
          )
        } else {
          return false;
        }
      });
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
  /* background-color: #f1f1f1; */
}

.login-form {
  margin: 20px;
  background-color: #f1f1f1;
  padding: 50px;
  width: 40%;
  border-radius: 5px;
  min-width: 450px;
}

.login-btn {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background-color: #007bff;
  font-size: 16px;
  font-weight: bold;
}

.password-input {
  position: relative;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.el-form-item__content {
  width: 90%;
  margin-bottom: 10px;
}

.el-button {
  border: none;
}

.el-form-item {
  display: flex;
  flex-direction: column;
}

.el-checkbox {
  margin-right: 10px;
}

</style>