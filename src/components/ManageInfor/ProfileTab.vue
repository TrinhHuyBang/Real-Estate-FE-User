<template>
  <div>
    <h5>Thông tin cá nhân</h5>
    <div class="profile">
        <div class="avatar">
            <div class="custom-file-input">
                <label for="fileInput" class="upload-icon" v-if="!hasUploadedAvatar && !user.avatar">
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text avt-text">Tải ảnh</div>
                    <input type="file" id="fileInput" @change="handleFileChange" accept="image/*" ref="fileInput" style="display: none"/>
                </label>
                <label for="fileInput" class="upload-icon" v-if="hasUploadedAvatar" :style="{ 'background-image': `url('${imagePreview(avatar)}')` }">
                    <input type="file" id="fileInput" @change="handleFileChange" accept="image/*" ref="fileInput" style="display: none"/>
                </label>
                <label for="fileInput" class="upload-icon" v-if="user.avatar && !hasUploadedAvatar" :style="{ 'background-image': `url('${user.avatar}')` }">
                    <input type="file" id="fileInput" @change="handleFileChange" accept="image/*" ref="fileInput" style="display: none"/>
                </label>
                <span class="el-icon-close delete-avatar-icon" v-if="hasUploadedAvatar || user.avatar" @click="deleteAvatar"></span>
            </div>
            <span>{{ user.name }}</span>
        </div>
        <div class="infor">
            <label class="label" for="username">Họ và tên</label>
            <el-input placeholder="Họ và tên" v-model="user.name"></el-input>

            <label class="label" for="tax">Mã số thuế cá nhân</label>
            <el-input placeholder="Ví dụ: 1234567890 hoặc 1234567890-123"></el-input>
            <div><span style="font-size: 12px;">MST gồm 10 hoặc 13 chữ số</span></div>

            <label class="label" for="username">Số điện thoại chính</label>
            <el-input placeholder="SĐT chính" v-model="user.phone" disabled></el-input>

            <label class="label">Email</label>
            <el-input placeholder="Email" v-model="user.email" disabled></el-input>

            <div class="btn-action">
                <el-button type="primary" class="btn" icon="el-icon-check" @click="update()">Lưu</el-button>
                <el-button type="danger" class="btn" icon="el-icon-close" @click="getInfor()">Huỷ bỏ</el-button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import AuthApi from "@/api/auth"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage } from "../../firebase"
import { Notification } from 'element-ui'
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            avatar: null,
            hasUploadedAvatar: false,
            user: {},
        };
    },
    computed: mapState({
        userInfor: (state) => state.user,
    }),
    mounted() {
        this.getInfor()
    },
    methods: {
        // getInfor() {
        //     AuthApi.profile(
        //         (response) => {
        //             this.user = response.data.data
        //             this.avatar = this.user.avatar ? this.user.avatar : null
        //         },
        //     );
        // },
        getInfor() {
            this.user = {
                ...this.userInfor
            }
            this.hasUploadedAvatar = false
        },
        ...mapActions(['commitSetUserInfo']),
        async update() {
            if(this.avatar) {
                var downloadURL = ''
                if(this.avatar instanceof File) {
                    var storageRef = ref(
                    storage,
                    `avatars/` +
                        Math.random().toString(36).slice(2, 8) +
                        `${this.avatar.name}`
                    );
                    await uploadBytes(storageRef, this.avatar);
                    downloadURL = await getDownloadURL(storageRef);
                } else {
                    downloadURL = this.avatar
                }
            }
            AuthApi.updateProfile(
                {
                    avatar: downloadURL,
                    name: this.user.name,
                    tax_code: this.user.tax_code,
                },
                () => {
                    Notification.success({
                        title: "Thành công",
                        message: "Đã cập nhật thông tin cá nhân thành công!",
                    });
                    this.user.avatar = downloadURL
                    this.commitSetUserInfo(this.user)
                    this.getInfor()
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
            // Đặt lại input để cho phép chọn lại cùng một tệp
            this.$refs.fileInput.value = '';
        },
        imagePreview(file) {
            if(file instanceof File) {
                return URL.createObjectURL(file)
            }
        },
        deleteAvatar() {
            this.avatar = null
            this.user.avatar = null
        }
    },
    watch: {
        avatar(val) {
            if(!val) {
                this.hasUploadedAvatar = false;
            }
        }
    }
}
</script>

<style scoped>
.profile {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
}

.avatar{
    width: 30%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
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

.custom-file-input {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
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

.delete-avatar-icon{
    position: absolute;
    right: -7px;
    top: -7px;
}

</style>