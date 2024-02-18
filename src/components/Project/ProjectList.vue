<template>
    <div class="project-list-single">
        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 10px;">
            <el-breadcrumb-item>Dự án</el-breadcrumb-item>
            <el-breadcrumb-item>Hà nội</el-breadcrumb-item>
            <el-breadcrumb-item>Hai Bà Trưng</el-breadcrumb-item>
            <el-breadcrumb-item>Căn hộ chung cư</el-breadcrumb-item>
        </el-breadcrumb>
        <h3>Dự án toàn quốc</h3>
        <p>Hiện đang có {{ projects.length }} dự án</p>
        
        <div v-for="project in projects" :key="project.id">
            <router-link class="link-to-detail" :to="`/chi-tiet-du-an/${project.id}`">
                <single-project :project="project"/>
            </router-link>
        </div>
        <div class="paginate-page">
            <el-pagination background layout="prev, pager, next" :page-size="perPage" :page-count="totalPage" @current-change="handleChangPage"></el-pagination>
        </div>
    </div>
</template>

<script>
import SingleProject from './SingleProject.vue';
export default {
    props: {
        enterprise: {
          type: Object,
        }
    },

    components: {
        'single-project' : SingleProject,
    },

    data() {
        return {
            currentPage: 1,
            totalPage: 0,
            perPage: 0,
            total: 0,
            projects: [
                {
                    id: 1,
                    name: "Rivera Villas Phú Quốc",
                    image:
                        "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/projects%2F20231026090858-7999_wm.jpg?alt=media&token=d64bea7a-1a85-47c3-be74-289086271a11&_gl=1*jwtivj*_ga*MTU4MTYxNzQ2MS4xNjg3OTI2Njcw*_ga_CW55HF8NVT*MTY5ODgxNTYxOC40MC4xLjE2OTg4MTcxNjYuMzkuMC4w",
                    size: 100,
                    city: "Ha Noi",
                    status: "Sắp mở bán",
                    address: "Đường Nguyễn Chí Thanh, Khu phố 12, Phường Dương Đông, Thành phố Phú Quốc, Kiên Giang.",
                    description: "Dự án Rivera Villas Phú Quốc là khu biệt thự cao cấp với 3 mặt giáp sông và hệ cảnh quan nhiều mảng xanh, do Công ty Cổ phần Tập đoàn Tư vấn Đầu tư Xây dựng Kiên Giang (CIC Group) đầu tư tại trung tâm Dương Đông, Phú Quốc. Khu biệt thự Rivera Villas được phát triển mô hình khu dân cư compound khép kín, gồm 70 căn biệt thự (30 biệt thự đơn lập, 40 biệt thự song lập), là thế giới riêng tư với những đặc quyền dành riêng cho cư dân, thể hiện đẳng cấp sống khác biệt.",
                },
                {
                    id: 2,
                    name: "Rivera Villas Phú Quốc",
                    image:
                        "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/projects%2F20231026090858-7999_wm.jpg?alt=media&token=d64bea7a-1a85-47c3-be74-289086271a11&_gl=1*jwtivj*_ga*MTU4MTYxNzQ2MS4xNjg3OTI2Njcw*_ga_CW55HF8NVT*MTY5ODgxNTYxOC40MC4xLjE2OTg4MTcxNjYuMzkuMC4w",
                    size: 100,
                    city: "Ha Noi",
                    status: "Đang mở bán",
                    address: "Đường Nguyễn Chí Thanh, Khu phố 12, Phường Dương Đông, Thành phố Phú Quốc, Kiên Giang.",
                    description: "Dự án Rivera Villas Phú Quốc là khu biệt thự cao cấp với 3 mặt giáp sông và hệ cảnh quan nhiều mảng xanh, do Công ty Cổ phần Tập đoàn Tư vấn Đầu tư Xây dựng Kiên Giang (CIC Group) đầu tư tại trung tâm Dương Đông, Phú Quốc. Khu biệt thự Rivera Villas được phát triển mô hình khu dân cư compound khép kín, gồm 70 căn biệt thự (30 biệt thự đơn lập, 40 biệt thự song lập), là thế giới riêng tư với những đặc quyền dành riêng cho cư dân, thể hiện đẳng cấp sống khác biệt.",
                },
                {
                    id: 3,
                    name: "Rivera Villas Phú Quốc",
                    image:
                        "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/projects%2F20231026090858-7999_wm.jpg?alt=media&token=d64bea7a-1a85-47c3-be74-289086271a11&_gl=1*jwtivj*_ga*MTU4MTYxNzQ2MS4xNjg3OTI2Njcw*_ga_CW55HF8NVT*MTY5ODgxNTYxOC40MC4xLjE2OTg4MTcxNjYuMzkuMC4w",
                    size: 100,
                    city: "Ha Noi",
                    status: "Đã bàn giao",
                    address: "Đường Nguyễn Chí Thanh, Khu phố 12, Phường Dương Đông, Thành phố Phú Quốc, Kiên Giang.",
                    description: "Dự án Rivera Villas Phú Quốc là khu biệt thự cao cấp với 3 mặt giáp sông và hệ cảnh quan nhiều mảng xanh, do Công ty Cổ phần Tập đoàn Tư vấn Đầu tư Xây dựng Kiên Giang (CIC Group) đầu tư tại trung tâm Dương Đông, Phú Quốc. Khu biệt thự Rivera Villas được phát triển mô hình khu dân cư compound khép kín, gồm 70 căn biệt thự (30 biệt thự đơn lập, 40 biệt thự song lập), là thế giới riêng tư với những đặc quyền dành riêng cho cư dân, thể hiện đẳng cấp sống khác biệt.",
                },
            ]
        }
    },

    methods: {
        getStatusClass(project) {
            return {
                'status-pending': project.status === 'Sắp mở bán',
                'status-completed': project.status === 'Đang mở bán',
                'status-handed': project.status === 'Đã bàn giao',
                'status-in-progress': project.status == ''
            };
        }
    }
}
</script>

<style scoped>

.project-list-single {
    width: 80%;
}

.paginate-page{
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
}
</style>