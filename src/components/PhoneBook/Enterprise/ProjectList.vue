<template>
    <div>
        <h4 class="list_titles">Dự án thuộc {{ enterprise.name }}</h4>
        <div>
            <div v-for="project in projects" :key="project.id">
                <router-link class="link-to-detail" :to="`/chi-tiet-du-an/${project.id}`">
                    <single-project :project="project"/>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import SingleProject from '@/components/Project/SingleProject.vue';
export default {
    props: {
        enterprise: {
          type: Object,
        }
    },

    components: {
        "single-project": SingleProject,
    },

    data() {
        return {
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
    }
}
</script>

<style scoped>

</style>