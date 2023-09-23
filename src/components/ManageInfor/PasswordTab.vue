<template>
  <div >
    <h5>Đổi mật khẩu</h5>
    <div class="password-change-tab">
      <el-form ref="changPassword" :model="changPassword" :rules="rules" @submit.native.prevent="login">
        
          <label class="label" for="password">Mật khẩu hiện tại:</label>
          <el-input
            v-model="changPassword.password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Mật khẩu"
            required
            class="password-input"
          >
            <el-button slot="append" icon="el-icon-view" @click="showPassword = !showPassword"></el-button>
          </el-input>
          <div style="margin-top:10px;">
            <a href="#" style="color:red;">Quên mật khẩu?</a>
            <el-button type="text" @click="dialogVisible = true">click to open the Dialog</el-button>

            <el-dialog
              title="Khôi phục mật khẩu"
              :visible.sync="dialogVisible"
              width="40%"
              :before-close="handleClose">
              <el-button @click="dialogVisible = false">Gửi mã xác minh qua email </el-button>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
              </span>
            </el-dialog>
          </div>
      
          <label class="label" for="password">Mật khẩu mới:</label>
          <el-input
            v-model="changPassword.newPassword"
            :type="showNewPassword ? 'text' : 'password'"
            placeholder="Mật khẩu mới"
            required
            class="password-input"
          >
            <el-button slot="append" icon="el-icon-view" @click="showNewPassword = !showNewPassword"></el-button>
          </el-input>
        
          <label class="label" for="password">Nhập lại mật khẩu mới:</label>
          <el-input
            v-model="changPassword.againPassword"
            :type="showAgainPassword ? 'text' : 'password'"
            placeholder="Nhập lại mật khẩu mới"
            required
            class="password-input"
          >
            <el-button slot="append" icon="el-icon-view" @click="showAgainPassword = !showAgainPassword"></el-button>
          </el-input>
          
          <ul class="help-text">
            <li>Mật khẩu tối thiểu 8 kí tự</li>
            <li>Chứa ít nhất một ký tự số</li>
            <li>Chứa ít nhất một ký tự viết hoa</li>
          </ul>
          <el-button type="primary" class="action-btn" native-type="submit">Lưu thay đổi</el-button>
          
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
        username: "",
        password: "",
        newPassword: "",
        againPassword: "",
      },
      showPassword: false,
      showNewPassword:false,
      showAgainPassword:false,
      rememberAccount: false,
      rules: {
        username: [{ required: true, message: "Vui lòng nhập tài khoản", trigger: "blur" }],
        password: [{ required: true, message: "Vui lòng nhập mật khẩu", trigger: "blur" }],
      },
    };
  },
}
</script>

<style>
.password-change-tab{
  width: 40%;
  margin-left: 20%;
}

.help-text{
  margin-top: 20px;
  color: gray;
  font-size: 14px;
}

a{
  text-decoration: none;
}

.action-btn{
  margin-bottom: 20px;

}
</style>