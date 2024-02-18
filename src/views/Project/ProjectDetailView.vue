<template>
    <div class="container project-detail">
        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 10px;">
            <el-breadcrumb-item>Dự án</el-breadcrumb-item>
            <el-breadcrumb-item>{{ this.showProvince(project) }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ this.showDistrict(project) }}</el-breadcrumb-item>
            <el-breadcrumb-item>Căn hộ chung cư</el-breadcrumb-item>
        </el-breadcrumb>
        <h2>{{ project.name }}</h2>
        <span class="label">{{ project.address }}</span>
        <a class="link-to-detail" href="#project-loaction">Xem bản đồ <i class="el-icon-right"></i></a>

        <el-row class="project-image-list" :gutter="20">
            <el-col v-for="(image,index) in project.images" :key="index" :span="24/project.images.length">
                <img class="project-image" :src="image" alt="">
            </el-col>
        </el-row>

        <div class="row project-info" style="min-width:900px;">
            <div class="col-8" style="min-width:600px;">
                <h4 class="list_titles">Tổng quan {{ project.name }}</h4>
                <div v-for="(item, index) in listProjectInfor" :key="index">
                    <div v-if="project[item.name]">
                        <el-row :gutter="20">
                            <el-col class="label" :span="4"> {{ item.label }}</el-col>
                            <el-col v-if="item.name === 'investor'" :span="20"> <a class="link-to-detail" :href="`/doanh-nghiep/${project.investor.id}`"> <h6>{{ project[item.name].name }}</h6></a></el-col>
                            <el-col v-else-if="item.name === 'apartment'" :span="20">{{ project[item.name] }} căn</el-col>
                            <el-col v-else-if="item.name === 'buiding'" :span="20">{{ project[item.name] }} toà</el-col>
                            <el-col v-else-if="item.name === 'price'" :span="20">{{ showProjectPrice(project) }} </el-col>
                            <el-col v-else-if="item.name === 'size'" :span="20">{{ showProjectSize(project) }}</el-col>
                            <el-col v-else :span="20">{{ project[item.name] }}</el-col>
                        </el-row>
                        <hr>
                    </div>
                </div>
                
                <div class="re__project-main-content">
                    <div class="js__prj-detail-content re__detail-content re__project-editor re__active" style="height: 5361px;"><p><strong>Dự án The Aurora Phú Mỹ Hưng</strong> là dự án căn hộ cao cấp mới nhất của chủ đầu tư Phú Mỹ Hưng tại khu Nam Viên, KĐT Phú Mỹ Hưng, Quận 7. Nổi bật với vị trí đắc địa trên đường Nguyễn Lương Bằng và số lượng sản phẩm khan hiếm chỉ 95 căn hộ, The Aurora Phú Mỹ Hưng hứa hẹn sẽ là điểm sáng trên thị trường bất động sản khu Nam Sài Gòn năm 2024.&nbsp;</p><figure class="image"><img src="https://file4.batdongsan.com.vn/2023/11/21/20231121212654-0e99_wm.jpg"><figcaption><i>Phối cảnh dự án The Aurora Phú Mỹ Hưng, Quận 7</i></figcaption></figure><h3>Vị Trí</h3><p>Dự án chung cư The Aurora Phú Mỹ Hưng tọa lạc trên lô đất ký hiệu S13-2 thuộc khu Nam Viên của KĐT Phú Mỹ Hưng, Quận 7, TP.HCM. Vị trí <a href="https://batdongsan.com.vn/du-an-can-ho-chung-cu-quan-7/the-aurora-phu-my-hung-pj5969">dự án The Aurora Phú Mỹ Hưng</a> nằm trên mặt tiền đường Nguyễn Lương Bằng, phía sau là công viên Nam Viên. &nbsp;</p><ul><li>Cách 600m đến hồ Bán Nguyệt</li></ul><h3>Giá bán</h3><p>Dự án chung cư The Aurora Phú Mỹ Hưng dự kiến sẽ được mở bán đợt 1 trong năm 2024.</p><p>Giá bán căn hộ The Aurora Phú Mỹ Hưng: đang cập nhật.</p><p>Dự án The Aurora Phú Mỹ Hưng có lịch thanh toán kéo dài, được chủ đầu tư hỗ trợ lãi suất trong 24 tháng. Người mua chỉ cần đóng trước 20% giá trị căn hộ cho đến khi nhận bàn giao.</p><h3>Tiện Ích</h3><p>Là dự án căn hộ cao cấp ngay khu Nam Viên - nơi có mật độ cây xanh cao nhất khu đô thị Phú Mỹ Hưng (16m2 cây xanh/người), The Aurora Phú Mỹ Hưng được đầu tư hệ thống tiện ích nội khu sang trọng, đồng thời thừa hưởng hệ sinh thái tiện ích đa dạng, đẳng cấp hàng đầu khu Nam Sài Gòn.</p><h3>Tiện Ích Nội Khu</h3><p>Với mục tiêu nâng tầm trải nghiệm sống cho cư dân, các tiện ích tại dự án The Aurora Phú Mỹ Hưng được chăm chút tỉ mỉ, bố trí xen kẽ nhiều mảng xanh, tạo nên một tổng thể hài hòa. Nơi đây sẽ trở thành một cộng đồng đẳng cấp để mọi cư dân có thể tận hưởng cuộc sống, tạo ra những kỷ niệm đáng nhớ mỗi ngày.</p><p>Một số tiện ích nội khu dự án The Aurora Quận 7:</p><ul><li>Hồ bơi</li><li>Phòng giải trí cộng đồng</li><li>Khu vui chơi trong nhà cho trẻ em</li><li>Phòng tập gym, Yoga</li><li>Bãi đỗ xe</li><li>Sảnh lobby sang trọng</li></ul><figure class="image"><img src="https://file4.batdongsan.com.vn/2023/11/21/20231121212615-90fb_wm.jpg"><figcaption><i>Sảnh lobby sang trọng</i></figcaption></figure><figure class="image"><img src="https://file4.batdongsan.com.vn/2023/11/21/20231121212621-236d_wm.jpg"><figcaption><i>Bãi đỗ xe rộng rãi</i></figcaption></figure><figure class="image"><img src="https://file4.batdongsan.com.vn/2023/11/21/20231121212645-bee2_wm.jpg"><figcaption><i>Phòng tập Yoga</i></figcaption></figure><h3>Tiện Ích Ngoại Khu</h3><p>Tọa lạc tại vị trí trung tâm KĐT Phú Mỹ Hưng - nơi tập trung nhiều dự án bất động sản cao cấp, chung cư The Aurora Phú Mỹ Hưng thừa hưởng vị trí kết nối giao thương và lưu thông đắc địa bậc nhất khu Nam Sài Gòn, với:</p><ul><li>15 cao ốc văn phòng &amp; thương mại</li><li>50 tập đoàn trong và ngoài nước</li><li>10 trung tâm y tế sức khỏe</li><li>15 ngân hàng</li><li>8 trường học</li><li>13 siêu thị</li><li>22 cửa hàng F&amp;B…</li></ul><figure class="image"><img src="https://file4.batdongsan.com.vn/2023/11/21/20231121213602-c5c7_wm.jpg"></figure><p>Chỉ trong bán kính 1km, cư dân The Aurora Nguyễn Lương Bằng có thể kết nối với nhiều tiện ích cao cấp như Trung tâm triển lãm SECC, TTTM Crescent Mall, trung tâm tài chính Nam Sài Gòn, các trường học quốc tế, bệnh viện Pháp Việt,… và tận hưởng nhịp sống hiện đại, tiện nghi trong KĐT Phú Mỹ Hưng Quận 7.</p><h3>Thiết Kế - Mặt Bằng</h3><p>Theo thông tin ban đầu, dự án chung cư The Aurora Phú Mỹ Hưng là 1 tòa tháp cao 13 tầng với số lượng căn hộ giới hạn, chỉ 95 căn. Trong đó:</p><ul><li>29 căn hộ 1 phòng ngủ</li><li>61 căn hộ 2 phòng ngủ</li></ul></div>
                    <!-- <div class="js__box-view-more re__box-view-more re__display-none" style="display: none;">
                        <div class="re__gradient">&nbsp;</div>
                        <div class="re__view-more">
                            <button type="button" class="re__btn re__btn-pr-ghost--sm re__btn-icon-right--sm re__btn-view-more"><span>Xem thêm</span><i class="re__icon-chevron-down--sm"></i></button>
                        </div>
                    </div>
                    <div class="js__box-view-less re__box-view-less re__display-none" style="display: block;">
                        <button type="button" class="re__btn re__btn-pr-ghost--sm re__btn-icon-right--sm re__btn-view-more"><span>Thu gọn</span><i class="re__icon-chevron-up--sm"></i></button>
                    </div> -->
                </div>

                <div id="project-loaction">
                    <h4 class="list_titles">Vị trí dự án {{ project.name }}</h4>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.247274130735!2d106.72601367485603!3d10.715401189429684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175250035d50c45%3A0xb8ec6c61056ad0c7!2zVGhlIEF1cm9yYSBQaMO6IE3hu7kgSMawbmc!5e0!3m2!1svi!2s!4v1704270322667!5m2!1svi!2s" width="100%" height="450" style="border:0;" :allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div class="col-4 project-contact-information-animation">
                <div class="project-contact-information">
                    <div class="investor-information">
                        <router-link class="link-to-detail" :to="`/doanh-nghiep/${project.investor.id}`">
                            <img :src="project.investor.logo" alt="">
                            <h5 style="color: #000;">{{ project.investor.name }}</h5>
                        </router-link>
                        <div>
                            <span class="label"> Số dự án : </span>
                            <span :span="16">1 sắp mở 4 đang mở bán 12 đã bàn giao</span>
                        </div>

                        <div>
                            <span class="label"> Thành lập : </span>
                            <span :span="16"> Đang cập nhật </span>
                        </div>

                        <el-button type="primary"><i class="el-icon-phone-outline"></i> {{ project.investor.phone }} </el-button>
                    </div>

                    <div class="project-contact">
                        <h6>Thông tin liên hệ</h6>
                        <p>Để biết thêm các thông tin chi tiết, vui lòng liên hệ với các doanh nghiệp qua các phương thức liên hệ dưới đây</p>
                        <el-button type="primary"><i class="el-icon-phone-outline"></i> 0973733651 </el-button>
                        <!-- <el-button ><i class="el-icon-message"></i> Hỏi thêm thông tin </el-button> -->
                    </div>
                </div>
            </div>
        </div>
        <div>
            <project-for-you />
        </div>
    </div>
</template>

<script>
import ListProjectInfor from "@/data/listProjectInfor"
import ProjectForYou from '@/components/Home/ProjectForYou.vue'
export default {
    components: {
        'project-for-you': ProjectForYou,
    },

    data() {
        return {
            listProjectInfor: ListProjectInfor,
            project: {
                name: "The Aurora Phú Mỹ Hưng",
                address: "Lô đất S13-2, khu Nam Viên, KĐT Phú Mỹ Hưng, đường Nguyễn Lương Bằng, phường Tân Phú, Quận 7, Hồ Chí Minh. ",
                price: 130,
                size: 20000,
                buiding: 1,
                size_unit: 'ha',
                apartment: 95,
                status: "Sắp mở bán",
                province: "Thành phố Hồ Chí Minh",
                district: "Quận 7",
                project_type: "",
                images: ['https://file4.batdongsan.com.vn/crop/609x360/2023/11/21/20231121212810-61c4_wm.jpg', 
                'https://file4.batdongsan.com.vn/crop/609x360/2023/11/21/20231121212804-49f5_wm.jpg',
                'https://file4.batdongsan.com.vn/crop/609x360/2023/11/21/20231121212759-362a_wm.jpg'],
                investor: {
                    id: 2,
                    name: 'Công ty TNHH Phát Triển Phú Mỹ Hưng',
                    logo: "https://file4.batdongsan.com.vn/2021/08/29/20210829014105-0e76.jpg",
                    phone: "0854118888",
                    project: {
                        1 : 2,
                        2 : 4,
                        3 : 5,
                    }
                },
                description: "",
                legal_documents : "Sổ hồng lâu dài",
                builders: "Cty TNHH một thành viên",
            },
        }
    },

    methods: {
        showProjectPrice(project) {
            return project.price / 1000 >= 1
                ? (project.price / 1000).toFixed(2) + " tỷ" + "/m²"
                : project.price + " triệu" + "/m²"
        },

        showProjectSize(project) {
            return project.size + ' ' + project.size_unit
        },
    },
}
</script>

<style scoped>
.project-detail {
    margin: 7% 10% 0 10%;
}

.project-info {
    width: 95%;
    margin-top: 30px;
}

.project-image-list {
    margin-top: 20px;
    width: 95%;
    border-radius: 10px;
}

.project-image {
    width: 100%;
    height: 360px;
}

.image {
    width: 100%;
}

#project-loaction {
    width: 100%;
}

.label {
  font-weight: 600;
}
</style>