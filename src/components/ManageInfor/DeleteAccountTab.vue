<template>
  <div>
    <h5>Xoá tài khoản</h5>
    <div class="account-tab">
      <el-form
        ref="changPassword"
        :model="changPassword"
        :rules="rules"
        @submit.native.prevent="login"
      >
        <label class="label" for="password">Mật khẩu hiện tại:</label>
        <el-input
          v-model="changPassword.password"
          :type="showPassword ? 'text' : 'password'"
          placeholder="Mật khẩu"
          required
          class="password-input"
        >
          <el-button
            slot="append"
            icon="el-icon-view"
            @click="showPassword = !showPassword"
          ></el-button>
        </el-input>

        <div class="help-text">Lưu ý:</div>
        <ul class="help-text">
          <li>Quý khách sẽ không thể đăng nhập lại vào tài khoản này sau khi khóa.</li>
          <li>Các tin đăng đang hiển thị của quý khách sẽ tiếp tục được hiển thị tới hết thời gian đăng tin.</li>
          <li>Số điện thoại chính đăng ký tài khoản này và các số điện thoại đăng tin của quý khách sẽ không thể được sử dụng lại để đăng ký tài khoản mới.</li>
        </ul>
        <el-button type="danger" class="action-btn" native-type="submit"
          >Xoá tài khoản</el-button
        >
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      changPassword: {
        password: "",
      },
      showPassword: false,
    };
  },
};
</script>

<style>
.account-tab {
  width: 40%;
  margin-left: 20%;
}

.help-text {
  margin-top: 20px;
  color: gray;
  font-size: 14px;
}

a {
  text-decoration: none;
}

.action-btn {
  margin-bottom: 20px;
}
</style>