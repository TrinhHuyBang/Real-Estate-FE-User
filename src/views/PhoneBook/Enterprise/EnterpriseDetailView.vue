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
                    <h2 class="enterprise-name">{{ showEnterpriseName(enterprise) }}</h2>
                    <div v-if="enterprise.main_field === 'Chủ đầu tư'">
                        <div class="number-project">
                            <h6>Dự án sắp mở</h6>
                            <h2>{{ enterprise.count_preparing_sale_project }}</h2>
                        </div>
                        <div class="number-project">
                            <h6>Đang mở bán</h6>
                            <h2>{{ enterprise.count_on_sale_project }}</h2>
                        </div>
                        <div class="number-project">
                            <h6>Đã bàn giao</h6>
                            <h2>{{ enterprise.count_handed_over_project }}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" style="min-width:900px;">
                <div class="col-8" style="min-width:600px;">
                    <h4 class="list_titles">Giới thiệu</h4>
                    <div>
                        <div v-if="enterprise.address" class="column">
                            <label>Địa chỉ</label>
                            <span>{{ enterprise.address }}</span>
                            <hr>
                        </div>
                        <div v-if="enterprise.main_field" class="column">
                            <label>Lĩnh vực chính</label>
                            <span>{{ enterprise.main_field }}</span>
                            <hr>
                        </div>
                        <div v-if="enterprise.sub_fields" class="column">
                            <label>Lĩnh vực phụ</label>
                            <span>{{ enterprise.sub_fields }}</span>
                            <hr>
                        </div>
                        <div v-if="enterprise.email" class="column">
                            <label>Email</label>
                            <span>{{ enterprise.email }}</span>
                            <hr>
                        </div>
                        <div v-if="enterprise.website" class="column">
                            <label>Website</label>
                            <a class="link-to-detail" :href="enterprise.website" target="_blank">{{ enterprise.website }}</a>
                            <hr>
                        </div>
                    </div>
                    <h6 v-if="enterprise.description">{{ enterprise.name }}</h6>
                    <p>{{ enterprise.description }}</p>
                    <project-list v-if="enterprise.projects && enterprise.projects.length" :enterprise_name="showEnterpriseName(enterprise)" :projects="enterprise.projects"/>
                </div>
                <div class="col-4">
                    <div class="project-contact">
                        <h6>Thông tin liên hệ</h6>
                        <p>Để biết thêm các thông tin chi tiết, vui lòng liên hệ với doanh nghiệp qua các phương thức liên hệ dưới đây</p>
                        <el-button @click="coppyClipboard(enterprise.phone_number)" type="primary">
                            <svg data-v-167ecec1="" width="16" height="16" viewBox="0 0 30 30" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><path data-v-167ecec1="" d="M6.85116 2.49006C6.74047 2.34768 6.60075 2.23047 6.44129 2.14624C6.28182 2.062 6.10626 2.01265 5.92625 2.00148C5.74625 1.99031 5.56593 2.01756 5.39727 2.08144C5.22862 2.14531 5.07548 2.24433 4.94803 2.37194L3.00928 4.31256C2.10366 5.22006 1.76991 6.50444 2.16553 7.63132C3.80754 12.2955 6.47858 16.5302 9.98053 20.0213C13.4716 23.5232 17.7063 26.1942 22.3705 27.8363C23.4974 28.2319 24.7818 27.8982 25.6893 26.9926L27.628 25.0538C27.7556 24.9264 27.8547 24.7732 27.9185 24.6046C27.9824 24.4359 28.0097 24.2556 27.9985 24.0756C27.9873 23.8956 27.938 23.72 27.8537 23.5606C27.7695 23.4011 27.6523 23.2614 27.5099 23.1507L23.1843 19.7869C23.0322 19.669 22.8552 19.5871 22.6669 19.5474C22.4785 19.5078 22.2835 19.5115 22.0968 19.5582L17.9905 20.5838C17.4424 20.7208 16.8682 20.7135 16.3237 20.5627C15.7793 20.4119 15.2832 20.1227 14.8837 19.7232L10.2787 15.1163C9.87885 14.717 9.58927 14.221 9.43812 13.6765C9.28697 13.132 9.2794 12.5577 9.41616 12.0094L10.4437 7.90319C10.4904 7.71643 10.494 7.52151 10.4544 7.33312C10.4148 7.14473 10.3329 6.96781 10.2149 6.81569L6.85116 2.49006ZM3.53241 0.95819C3.86052 0.62997 4.25471 0.375309 4.68879 0.211117C5.12288 0.046925 5.58692 -0.0230412 6.05012 0.00586428C6.51332 0.0347698 6.96507 0.161886 7.37537 0.378771C7.78567 0.595657 8.14514 0.897349 8.42991 1.26381L11.7937 5.58756C12.4105 6.38069 12.628 7.41382 12.3843 8.38881L11.3587 12.4951C11.3056 12.7077 11.3085 12.9305 11.367 13.1418C11.4255 13.353 11.5376 13.5456 11.6924 13.7007L16.2993 18.3076C16.4546 18.4627 16.6475 18.575 16.8591 18.6335C17.0707 18.692 17.2938 18.6947 17.5068 18.6413L21.6112 17.6157C22.0923 17.4954 22.5945 17.486 23.0798 17.5884C23.5651 17.6907 24.0208 17.902 24.4124 18.2063L28.7362 21.5701C30.2905 22.7794 30.433 25.0763 29.0418 26.4657L27.103 28.4044C25.7155 29.7919 23.6418 30.4013 21.7087 29.7207C16.7609 27.9798 12.2685 25.1473 8.56491 21.4332C4.85107 17.7301 2.01855 13.2384 0.277406 8.29132C-0.401344 6.36006 0.208031 4.28444 1.59553 2.89694L3.53428 0.95819H3.53241Z" fill="#ffffff"></path></svg> 
                            {{ enterprise.phone_number }}
                        </el-button>
                        <el-button @click="handleOpenDialogContact()" type="info">
                            <svg data-v-167ecec1="" width="16" height="18" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-167ecec1="" d="M0 4.5C0 3.50544 0.395088 2.55161 1.09835 1.84835C1.80161 1.14509 2.75544 0.75 3.75 0.75H26.25C27.2446 0.75 28.1984 1.14509 28.9016 1.84835C29.6049 2.55161 30 3.50544 30 4.5V19.5C30 20.4946 29.6049 21.4484 28.9016 22.1516C28.1984 22.8549 27.2446 23.25 26.25 23.25H3.75C2.75544 23.25 1.80161 22.8549 1.09835 22.1516C0.395088 21.4484 0 20.4946 0 19.5V4.5ZM3.75 2.625C3.25272 2.625 2.77581 2.82254 2.42417 3.17417C2.07254 3.52581 1.875 4.00272 1.875 4.5V4.90688L15 12.7819L28.125 4.90688V4.5C28.125 4.00272 27.9275 3.52581 27.5758 3.17417C27.2242 2.82254 26.7473 2.625 26.25 2.625H3.75ZM28.125 7.09312L19.2975 12.39L28.125 17.8219V7.09312ZM28.0612 19.9856L17.4862 13.4775L15 14.9681L12.5138 13.4775L1.93875 19.9838C2.0453 20.3827 2.28059 20.7354 2.60811 20.987C2.93562 21.2385 3.33702 21.3749 3.75 21.375H26.25C26.6627 21.3751 27.0639 21.2389 27.3914 20.9877C27.7189 20.7365 27.9544 20.3843 28.0612 19.9856ZM1.875 17.8219L10.7025 12.39L1.875 7.09312V17.8219Z" fill="#ffffff"></path></svg>
                            Yêu cầu liên hệ lại
                        </el-button> 
                    </div>
                    <ContactModal :isActive="dialogContact" :email="enterprise?.email" :type="'enterprise'" @closeContactModal="dialogContact = !dialogContact" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ContactModal from '@/components/Global/ContactModal.vue'
import ProjectList from '@/components/PhoneBook/Enterprise/ProjectList.vue'
import EnterpriseApi from '@/api/enterprise'
export default {
    created() {
        this.getDetail()
    },
    data() {
        return {
            enterprise: {},
            dialogContact: false,
            loading: null,
        }
    },
    components: {
        'project-list': ProjectList,
        ContactModal,
    },
    methods: {
        getDetail() {
            this.loading = this.pageLoading()
            EnterpriseApi.detail(
                this.$route.params.id,
                (response) => {
                    this.enterprise = response.data
                    this.loading.close()
                },
                () => {
                    this.loading.close()
                }
            )
        },

        handleOpenDialogContact() {
            this.dialogContact = true
        }
    }
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

.el-button+.el-button {
  margin-left: 0px;
}

</style>