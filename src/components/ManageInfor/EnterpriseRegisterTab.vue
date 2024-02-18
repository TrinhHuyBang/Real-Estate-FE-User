<template>
  <div>
    <h5>Đăng ký tài khoản doanh nghiệp</h5>
    <div class="profile">
        <div class="avatar">
            <div class="custom-file-input">
                <label for="fileInput1" class="upload-icon" v-if="!hasUploadedLogo">
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text avt-text">Tải ảnh</div>
                    <input type="file" id="fileInput1" @change="handleLogoChange" accept="image/*" ref="fileInput1" style="display: none"/>
                </label>
                <span class="el-icon-close delete-avatar-icon" v-if="hasUploadedLogo" @click="handleDeleteLogo"></span>
                <label for="fileInput1" class="upload-icon" v-if="hasUploadedLogo" :style="{ 'background-image': `url('${imagePreview(logo)}')` }">
                    <input type="file" id="fileInput1" @change="handleLogoChange" accept="image/*" ref="fileInput1" style="display: none"/>
                </label>
            </div>
            <label class="label">Logo công ty</label>
            <div class="custom-file-input">
                <label for="fileInput2" class="upload-icon" v-if="!hasUploadedCertificate">
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text avt-text">Tải ảnh</div>
                    <input type="file" id="fileInput2" @change="handleCertificateChange" accept="image/*" ref="fileInput2" style="display: none"/>
                </label>
                <span class="el-icon-close delete-avatar-icon" v-if="hasUploadedCertificate" @click="handleDeleteCertificate"></span>
                <label for="fileInput2" class="upload-icon" v-if="hasUploadedCertificate" :style="{ 'background-image': `url('${imagePreview(certificate)}')` }">
                    <input type="file" id="fileInput2" @change="handleCertificateChange" accept="image/*" ref="fileInput2" style="display: none"/>
                </label>
            </div>
            <label class="label">Giấy đăng kí kinh doanh</label>
        </div>
        <div class="infor">
            <label class="label">Tên công ty</label>
            <el-input v-model="enterprise.name" placeholder="Tên công ty"></el-input>

            <label class="label">Tên viết tắt</label>
            <el-input v-model="enterprise.abbreviation" placeholder="Tên viết tắt"></el-input>

            <label class="label">Mô tả</label>
            <el-input type="textarea" v-model="enterprise.description" :autosize="{ minRows: 5}" placeholder="Mô tả về công ty"></el-input>

            <label class="label">Số điện thoại</label>
            <el-input v-model="enterprise.phone_number" placeholder="SĐT liên hệ"></el-input>

            <label class="label">Email</label>
            <el-input v-model="enterprise.email" placeholder="Email"></el-input>

            <label class="label">Địa chỉ</label>
            <el-input v-model="enterprise.address" placeholder="Địa chỉ"></el-input>

            <label class="label">Website</label>
            <el-input v-model="enterprise.website" placeholder="Website"></el-input>

            <label class="label">Số đăng ký kinh doanh</label>
            <el-input v-model="enterprise.business_number" placeholder="Số đăng ký kinh doanh"></el-input>

            <label class="label">Lĩnh vực chính</label>
            <el-select class="select" v-model="enterprise.main_field" placeholder="Lĩnh vực chính" clearable filterable>
              <el-option v-for="item in field" :key="item" :label="item" :value="item"></el-option>
            </el-select>

            <label class="label">Lĩnh vực phụ</label>
            <el-select class="select" v-model="enterprise.sub_field" placeholder="Lĩnh vực phụ" clearable filterable>
              <el-option v-for="item in field" :key="item" :label="item" :value="item"></el-option>
            </el-select>

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
          logo: null,
          hasUploadedLogo: false,
          certificate: null,
          hasUploadedCertificate: false,
          enterprise: {
            name: "",
            abbreviation : "",
            description : "",
            phone_number : "",
            email: "",
            address: "",
            website: "",
            business_number: "",
            certificate_url: "",
            main_field: "",
            sub_field: "",
          },

          field : [
            "Chủ đầu tư", 
            "Thi công xây dựng", 
            "Tư vấn thiết kế", 
            "Sàn giao dịch bất động sản", 
            "Trang trí nột thất",
            "Vật liệu xậy dựng",
            "Tài chính pháp lý",
            "Các lĩnh vực khác"
          ],
        };
    },
    methods: {
        handleCertificateChange(event) {
            const certificate = event.target.files[0];
                if (certificate) {
                    this.certificate = certificate;
                    this.hasUploadedCertificate = true; // Đánh dấu rằng đã có ảnh
                }
            // Đặt lại input để cho phép chọn lại cùng một tệp
            this.$refs.fileInput2.value = '';
        },
        handleLogoChange(event) {
            const logo = event.target.files[0];
                if (logo) {
                    this.logo = logo;
                    this.hasUploadedLogo = true; // Đánh dấu rằng đã có ảnh
                }
            // Đặt lại input để cho phép chọn lại cùng một tệp
            this.$refs.fileInput1.value = '';
        },
        handleDeleteLogo() {
          this.logo = null
          this.hasUploadedLogo = false
        },
        handleDeleteCertificate() {
          this.hasUploadedCertificate = false
          this.certificate = null
        },
        imagePreview(file) {
            return URL.createObjectURL(file);
        },
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

.select {
  width: 100%;
  height: 35px;
  border: rgb(227, 224, 224) solid 1px;
  border-radius: 5px;
  margin-top: 4px;
  margin-bottom: 10px;
}

.custom-file-input {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  position: relative;
}

.delete-avatar-icon {
  position: absolute;
  right: -15px;
  top: -10px;
}

.upload-icon {
  width: 100px;
  height: 100px;
  border: 1px dashed #ccc;
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

</style>