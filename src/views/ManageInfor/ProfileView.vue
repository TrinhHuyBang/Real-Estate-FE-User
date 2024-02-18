<template>
  <div class="manage-list-bookmark-post">
    <div class="manage-post-nav">
      <manage-nav></manage-nav>
    </div>
    <div class="container">
        <h3>Quản lý tài khoản</h3>
        <el-tabs v-model="activeName" >
        <el-tab-pane label="Chỉnh sửa thông tin cá nhân" name="profile">
          <profile-tab/>
        </el-tab-pane>
        <el-tab-pane label="Cài đặt tài khoản" name="password">
          <password-tab/>
        </el-tab-pane>
        <el-tab-pane label="Đăng ký tài khoản doanh nghiệp" name="enterpriseRegister">
          <enterprise-register-tab/>
        </el-tab-pane>
        <el-tab-pane label="Xoá tài khoản" name="deleteAccount">
          <delete-account-tab />
        </el-tab-pane>
        <el-tab-pane label="Đăng ký tài khoản môi giới" name="brokerRegister">
          <broker-register-tab />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import ManageNav from "@/layouts/ManageNav.vue";
import ProfileTab from '@/components/ManageInfor/ProfileTab.vue';
import PasswordTab from '@/components/ManageInfor/PasswordTab.vue';
import EnterpriseRegisterTab from '@/components/ManageInfor/EnterpriseRegisterTab.vue';
import DeleteAccountTab from '@/components/ManageInfor/DeleteAccountTab.vue';
import BrokerRegisterTab from '@/components/ManageInfor/BrokerRegisterTab.vue';
export default {
    
    components: {
        "manage-nav": ManageNav,
        "profile-tab": ProfileTab,
        "password-tab": PasswordTab,
        "enterprise-register-tab": EnterpriseRegisterTab,
        "delete-account-tab": DeleteAccountTab,
        "broker-register-tab": BrokerRegisterTab,
    },

    data(){
        return {
          activeName: "profile",
        }
    },

    methods: {
        
    },
}
</script>

<style scoped>
.manage-list-bookmark-post {
  display: flex;
  flex-direction: row;
}

.container {
  margin: 30px 0 0 30px;
}
</style>