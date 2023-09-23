<template>
  <div class="manage-nav">
    <div class="user-infor">
        <img :src="user.avatar" alt="avatar" class="user-avatar">
        <div class="name-email">
            <h5>{{ user.name }}</h5>
            {{ user.email }}
        </div>
    </div>
    <el-menu default-active="/quan-ly-tin-dang" class="el-menu-vertical-demo" :collapse="isCollapse" :router="true">
        <el-submenu index="quan-ly-tin-dang">
            <template slot="title">
                <i class="el-icon fa fa-bars"></i>
                <span slot="title">Quản lý tin đăng</span>
            </template>
            <el-menu-item index="/dang-tin">Đăng mới</el-menu-item>
            <el-menu-item index="/quan-ly-tin-dang">Danh sách tin</el-menu-item>
        </el-submenu>
        <el-menu-item index="quan-ly-tin-luu">
            <i class="el-icon fas fa-heart"></i>
            <span slot="title">Tin lưu</span>
        </el-menu-item>
        <el-menu-item index="quan-ly-tin-luu">
            <i class="el-icon fas fa-bell"></i>
            <span slot="title">Thông báo</span>
        </el-menu-item>
        <el-menu-item index="quan-ly-tai-khoan">
            <i class="el-icon fa fa-gear"></i>
            <span slot="title">Quản lý tài khoản</span>
        </el-menu-item>
        <!-- <el-submenu index="quan-ly-tai-khoan">
            <template slot="title">
                <i class="el-icon fa fa-gear"></i>
                <span slot="title">Quản lý tài khoản</span>
            </template>
            <el-menu-item index="0" @click="changeProfileTab">Thông tin cá nhân</el-menu-item>
            <el-menu-item index="1" @click="changePasswordTab">Thay đổi mật khẩu</el-menu-item>
            <el-menu-item index="2" @click="enterpriseRegisterTab">Đăng ký doanh nghiệp</el-menu-item>
            <el-menu-item index="3" @click="deleteAccountTab">Xoá tài khoản</el-menu-item>
        </el-submenu> -->
        <el-menu-item index="4">
            <i class="el-icon fa fa-sign-out"></i>
            <span slot="title">Đăng xuất</span>
        </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
    data() {
        return {
            user : {
                avatar: "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/Logo.png?alt=media&token=9b017c07-2675-4894-b819-7e563e371299",
                name: "Trinh Huy Bang",
                email: "huybang@gmail.com",
            },
        };
    },

    methods: {
        changePasswordTab(){
            this.$router.push({ name: 'quan-ly-tai-khoan', params: { tabName: 'password' } });
        },
        changeProfileTab(){
            this.$router.push({ name: 'quan-ly-tai-khoan', params: { tabName: 'profile' } });
        },
        enterpriseRegisterTab(){
            this.$router.push({ name: 'quan-ly-tai-khoan', params: { tabName: 'enterpriseRegister' } });
        },
        deleteAccountTab(){
            this.$router.push({ name: 'quan-ly-tai-khoan', params: { tabName: 'deleteAccount' } });
        },
    },
}
</script>

<style scoped>
.manage-nav{
    display: flex;
    flex-direction: column;
    padding: 15px 0px 20px 0px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    height: 100%;
}

.user-infor{
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
    padding-right: 15px;
    padding-left: 15px;
}

.name-email{
    margin-left: 10px;
}

.user-avatar{
    width: 50px;
    height: 50px;
    border-radius: 100%;
}

.menu-item{
    height: 40px;
    width: 100%;
    padding: 10px;
}

.link-to{
    color: black;
    text-decoration: none;
}

.menu-item :hover {
    background-color: #ccc;
}

.el-icon{
    margin-right: 10px;
}



</style>