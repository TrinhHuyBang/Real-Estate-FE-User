<template>
    <div class="news-detail">
        <h1>{{ news.title }}</h1>
        <div class="author-time">
            <div>
                <img v-if="news.author.avatar" :src="news.author.avatar" alt="avatar" class="author-avatar">
                <div v-else class="avatar-placeholder">
                    <span class="avatar-letter">{{ showName() }}</span>
                </div>
            </div>
            <div class="author-name-time">
                <div> Được đăng bởi <a class="author-name" href="">{{news.author.name}}</a> </div>
                <span>Cập nhật lần cuối vào {{ news.updated_at }} - Đoc trong khoảng 6 phút</span>
            </div>
        </div>

        <div class="row">
            <div class="col-xl-8 col-lg-8 col-md-12 col-12">
                <p class="news-sub-title">{{ news.sub_title }}</p>
                <img :src="news.avatar" alt="">
                <p class="news-content"> {{ news.content }}</p>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-12 col-12">
                <most-viewed-news/>
            </div>
        </div>
    </div>
</template>

<script>
import MostViewedNews from '@/components/News/MostViewedNews.vue';
export default {
    data() {
        return {
            news: {
                title: "Vì Sao Nên Đầu Tư Vào Dự Án Phương Đông Vân Đồn Thời Điểm Hiện Tại?",
                sub_title: "Khu đô thị Phương Đông Vân Đồn là khu đô thị phức hợp gồm nhiều tiện ích đồng bộ: bãi tắm, trung tâm thương mại, khách sạn lưu trú, khu vui chơi, quảng trường biển, liền kề, biệt thự,… Được mệnh danh là thành phố đặc khu bên Vịnh kỳ quan tọa lạc tại Vân Đồn Quảng Ninh. Với tiềm năng tăng giá và sinh lời bền vững, Phương Đông Vân Đồn là dự án được các nhà đầu tư quan tâm và săn đón bậc nhất tại Quảng Ninh.",
                created_at: "20/12/2023 07:50",
                updated_at: "20/12/2023 07:50",
                author: {
                    id: "1",
                    name: "Ban nội dung",
                    avatar: "https://cdn-assets-angel.batdongsan.com.vn/assets/images/authorDefaultPhoto.png"
                },
                avatar: "https://img.iproperty.com.my/angel/750x1000-fit/wp-content/uploads/sites/7/2023/12/du-an-phuong-dong-van-don-quang-ninh.jpg",
                content: "Vị Trí Đắc Địa, Trái Tim Của Đặc Khu Kinh Tế Vân Đồn Dự án Phương Đông Vân Đồn sở hữu vị trí chiến lược nằm tại cửa ngõ đặc khu kinh tế Vân Đồn là một trong hai khu vực được miễn Visa thị thực cho khách nước ngoài. Được chính phủ đầu tư mạnh về cơ sở hạ tầng phát triển kinh tế mũi nhọn của cả nước. Tọa lạc trên trục đường tỉnh lộ 334 cắt ngang trục đường 58m – trục đường xương sống tại huyện đảo Vân Đồn. Đặc biệt 3 mặt dự án tiếp xúc trực tiếp mặt vịnh Bái Tử Long, 1 trong 2 Vịnh đẹp nhất Quảng Ninh.",
            }
        }
    },

    components: {
        'most-viewed-news' : MostViewedNews,
    },

    methods: {
        showName() {
            return this.news.author.name ? this.news.author.name.split(" ")[this.news.author.name.split(" ").length - 1][0] : ""
        },
    }
}
</script>

<style scoped>
.news-detail {
    margin: 8% 10% 0 10%;
}

.author-time {
    display: flex;
    flex-direction: row;
    margin-top: 30px;
}

.author-name {
    text-decoration: none;
    color: black;
    font-weight: 500;
}

.author-avatar {
    width: 48px;
    height: 48px;
    border: 1px solid #c8c9c7;
    border-radius: 50%;
}

.avatar-placeholder {
  width: 48px;
  height: 48px;
  background-color: #3498db;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
}

.author-name-time {
    margin-left: 15px;
}

.news-sub-title {
    margin: 20px 0px 30px 0px;
    font-weight: 500;
}

.news-content {
    margin: 20px 0px 30px 0px;
}

</style>