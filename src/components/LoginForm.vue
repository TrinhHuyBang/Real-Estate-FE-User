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
            required
          ></el-input>
        </el-form-item>
        <el-form-item >
          <label for="password">Mật khẩu:</label>
          <el-input
            v-model="loginForm.password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Mật khẩu"
            required
            class="password-input"
          >
            <el-button slot="append" icon="el-icon-view" @click="showPassword = !showPassword"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox style="margin-right: 30px" v-model="rememberAccount"> Nhớ tài khoản </el-checkbox>
          <a href="#">Quên mật khẩu?</a>
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
import axios from "axios";

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
    async login() {
      this.$refs.loginForm.validate(async (valid) => {
        if (valid) {
          const userData = {
            username: this.loginForm.username,
            password: this.loginForm.password,
          };

          try {
            const response = await axios.post("/login", userData);
            console.log(response);
            // Handle successful login response
            // this.$router.push({ name: "dang-tin" });
          } catch (error) {
            Notification.error({
              title: "Đăng nhập thất bại",
              message: "Vui lòng kiểm tra tài khoản và mật khẩu của bạn",
            });
            console.error(error);
          }
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
  height: 90vh;
  /* background-color: #f1f1f1; */
}

.login-form {
  background-color: #f1f1f1;
  padding: 50px;
  width: 40%;
  border-radius: 5px;
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