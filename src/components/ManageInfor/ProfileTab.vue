<template>
  <div>
    <h5>Thông tin cá nhân</h5>
    <div class="profile">
        <div class="avatar">
            <el-image class="avt" :src="user.avatar" alt="Avatar" v-if="user.avatar"></el-image>
            <el-upload v-else class="avt">
                <i class="el-icon-upload avt-icon"></i>
                <div class="el-upload__text avt-text">Tải ảnh</div>
            </el-upload>
            <!-- <el-upload class="avt">
                <i class="el-icon-upload avt-icon"></i>
                <span class="avt-text">Tải ảnh</span>
            </el-upload> -->
            <span>{{ user.name }}</span>
        </div>
        <div class="infor">
            <label class="label" for="username">Họ và tên</label>
            <el-input placeholder="Họ và tên"></el-input>

            <label class="label" for="tax">Mã số thuế cá nhân</label>
            <el-input placeholder="Ví dụ: 1234567890 hoặc 1234567890-123"></el-input>
            <div><span style="font-size: 12px;">MST gồm 10 hoặc 13 chữ số</span></div>

            <label class="label" for="username">Số điện thoại chính</label>
            <el-input placeholder="SĐT chính" disabled></el-input>

            <label class="label">Email</label>
            <el-input placeholder="Email" disabled></el-input>

            <div class="btn-action">
                <el-button type="primary" class="btn" icon="el-icon-check">Lưu</el-button>
                <el-button type="danger" class="btn" icon="el-icon-close">Huỷ bỏ</el-button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: "Trinh Huy Bang",
                avatar: "",
                // avatar:
                // "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/Logo.png?alt=media&token=9b017c07-2675-4894-b819-7e563e371299",
                bookmark: 2,
                notification: 4,
            },
        };
    },
}
</script>

<style>
.profile {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
}

.avatar{
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.avatar .avt{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 20px;
    background-color:#e2e1e1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.infor{
    width: 40%;
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

.btn-action{
    display: flex;
    justify-content: flex-end;
    margin-top: 35px;
}

.btn-action .btn{
    width: 110px;
    margin-bottom: 30px;
}
</style>