<template>
    <div class="most-viewed-news">
        <h6>Tin tức được xem nhiều nhất </h6>
        <div v-for="(item, index) in newsList" :key="item.id">
            <hr>
            <div class="single-most-viewed-news">
                <span class="top-viewed-news">
                    {{ index + 1}}
                </span>
                <router-link class="link-to-detail" :to="`/tin-tuc/${item.id}`">
                    <span class="most-viewed-news-title">{{ item.title }}</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newsList: [
                {
                    id: 1,
                    title: "Lãi Suất Vay Ngân Hàng Tháng 1/2024 Mới Nhất",
                    image: "https://img.iproperty.com.my/angel/520x300-crop/wp-content/uploads/sites/7/2023/12/chung-cu-mini-1.jpg",
                },
                {
                    id: 2,
                    title: "Dự Báo Hướng Đi Của Thị Trường Đất Nền Năm 2024",
                    image: "https://img.iproperty.com.my/angel/520x300-crop/wp-content/uploads/sites/7/2023/12/quan-5-gan-quan-nao-ava.jpg",
                },
                {
                    id: 3,
                    title: "Sắp Diễn Ra Diễn Đàn “Thị Trường Bất Động Sản Năm 2024 - Nhận Diện Thách Thức Và Cơ Hội Phục Hồi”",
                    image: "https://batdongsan.com.vn/tin-tuc/diem-sang-cuoi-nam-cua-thi-truong-bat-dong-san-2023-790704",
                },
                {
                    id: 4,
                    title: "Loạt Chính Sách Bán Hàng Khủng Kích Cầu Người Mua Cuối Năm",
                    image: "https://img.iproperty.com.my/angel/520x300-crop/wp-content/uploads/sites/7/2023/12/bds-2-1.jpg",
                },
                {
                    id: 5,
                    title: "Dự Báo Thị Trường BĐS 2024: Những Chuyển Biến Đầy Khởi Sắc?",
                    image: "https://img.iproperty.com.my/angel/520x300-crop/wp-content/uploads/sites/7/2023/12/bds-1-1-2.jpg",
                },
            ],
        }
    }
}
</script>

<style scoped>
.most-viewed-news {
    padding: 20px 20px;
    width: 100%;
    border-radius: 10px;
    border: 0.5px solid #f2f2f2;
    margin: 10px 0 10px 10px;
}

.single-most-viewed-news {
    display: flex;
    flex-direction: row;
}

.most-viewed-news-title {
  color: black;
  margin: 0px 0px 5px 0px;
}

.top-viewed-news {
    min-width: 24px;
    height: 24px;
    color: white;
    background-color: rgb(137, 85, 85);
    border-radius: 50%;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>