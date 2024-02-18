<template>
    <div>
        <div class="header-enterprise-detail-page">
            <img :src="enterprise.logo" alt="">
            <div class="header-blur"></div>
        </div>
        <div class="enterprise-detail-content">
            <div class="row enterprise-logo-name">
                <div class="col-4 enterprise-logo">
                    <img :src="enterprise.logo" alt="">
                </div>
                <div class="col-8 enterprise-name-project"> 
                    <h2 class="enterprise-name">{{ enterprise.name }}</h2>
                    <div v-if="enterprise.main_field === 'Chủ đầu tư'">
                        <div class="number-project">
                            <h6>Dự án sắp mở</h6>
                            <h2>0</h2>
                        </div>
                        <div class="number-project">
                            <h6>Đang mở bán</h6>
                            <h2>0</h2>
                        </div>
                        <div class="number-project">
                            <h6>Đã bàn giao</h6>
                            <h2>0</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" style="min-width:900px;">
                <div class="col-8" style="min-width:600px;">
                    <h4 class="list_titles">Giới thiệu</h4>
                    <div>
                        <div class="column">
                            <label>Địa chỉ</label>
                            <span>{{ enterprise.address }}</span>
                            <hr>
                        </div>
                        <div class="column">
                            <label>Lĩnh vực chính</label>
                            <span>{{ enterprise.main_field }}</span>
                            <hr>
                        </div>
                        <div class="column">
                            <label>Lĩnh vực phụ</label>
                            <span>{{ enterprise.sub_field }}</span>
                            <hr>
                        </div>
                        <div class="column">
                            <label>Email</label>
                            <span>{{ enterprise.email }}</span>
                            <hr>
                        </div>
                        <div class="column">
                            <label>Website</label>
                            <span>{{ enterprise.website }}</span>
                            <hr>
                        </div>
                    </div>
                    <h6>{{ enterprise.name }}</h6>
                    <p>{{ enterprise.description }}</p>
                    <project-list :enterprise="enterprise"/>
                </div>
                <div class="col-4">
                    <div class="project-contact">
                        <h6>Thông tin liên hệ</h6>
                        <p>Để biết thêm các thông tin chi tiết, vui lòng liên hệ với các doanh nghiệp qua các phương thức liên hệ dưới đây</p>
                        <el-button type="primary"><i class="el-icon-phone-outline"></i> 0973733651 </el-button>
                        <!-- <el-button ><i class="el-icon-message"></i> Hỏi thêm thông tin </el-button> -->
                    </div>
                </div>
            </div>
            <similar-enterprise/>
        </div>
    </div>
</template>

<script>
import SimilarEnterprise from '@/components/PhoneBook/Enterprise/SimilarEnterprise.vue'
import ProjectList from '@/components/PhoneBook/Enterprise/ProjectList.vue'
export default {
    data() {
        return {
            enterprise: {
                logo: "https://file4.batdongsan.com.vn/2017/08/30/hmcVYWuR/20170830161956-84f8.jpg",
                name: "Công ty CP Đầu tư & Phát triển Bất động sản TNR Holdings Việt Nam (TNR Holdings)",
                address: "Tầng 26, TNR Tower, Nguyễn Chí Thanh, Đống Đa, Hà Nội, Việt Nam",
                main_field: "Chủ đầu tư",
                sub_field: "Thi công xây dựng, Các lĩnh vực khác",
                description: "Công ty CP Đầu tư & Phát triển Bất động sản TNR Holdings Việt Nam (TNR Holdings) là thành viên của Tập đoàn Đầu tư TNG - một trong những tập đoàn kinh tế tư nhân đa ngành hàng đầu Việt Nam với hơn 20 năm hoạt động trên những lĩnh vực đầu tư phát triển khu công nghiệp. Với danh mục hoạt động đa dạng gồm: dự án thương mại và khu nghỉ dưỡng, dự án khu dân cư, TNR Holdings hướng đến phát triển bền vững và chuyên nghiệp trong lĩnh vực Đầu tư - Quản lý - Phát triển các dự án bất động sản trải rộng khắp Việt Nam.",
                website: "https://kimoanhgroup.vn",
                email: "info@kimoanhgroup.vn"
            }
        }
    },
    components: {
        'similar-enterprise': SimilarEnterprise,
        'project-list': ProjectList,
    },
}
</script>

<style scoped>
.header-enterprise-detail-page {
    position: relative;
    width: 100%;
    margin: auto;
    height: 350px;
    padding: 10px 10% 10px 10%;
    min-width: 935px;
}

.enterprise-detail-content {
  margin: 0 10% 0 10%;
}

.header-enterprise-detail-page img {
    width: 100%;
    height: 340px;
}

.header-blur {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 230px;
    background: linear-gradient(180deg, rgba(44,44,44,0) 0%, #2C2C2C 108.75%);
    mix-blend-mode: multiply;
}

.enterprise-logo-name {
    width: 100%;
    margin: 20px 0px 20px 0px;
    padding: 10px;
    min-width: 935px;
}

.enterprise-name-project {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.enterprise-logo {
    width: 170px;
    height: 170px;
    border: 1px solid #c8c9c7;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.enterprise-logo img {
    width: 150px;
    height: 150px;
}

.enterprise-name {
    margin-left: 24px;
    margin-bottom: 15px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
}

.number-project {
    width: 158px;
    float: left;
    margin-left: 24px;
    border-right: 1px solid rgba(6, 6, 6, 0.6);
}

.number-project:last-child {
    border-right: none;
}

.project-contact {
    background-color: #FAFAFA;
    border-radius: 5px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.project-contact button {
    width: 100%;
    margin-top: 10px;
}

hr {
    color: #c8c9c7;
    margin-top: 10px;
}

label {
    font-weight: 500;
    width: 137px;
}

</style>