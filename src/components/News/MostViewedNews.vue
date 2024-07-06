<template>
    <div class="most-viewed-news">
        <h6>Tin tức được xem nhiều nhất </h6>
        <div v-if="loading">
            <div v-for="index in 5" :key="index">
                <hr>
                <div class="single-most-viewed-news">
                    <el-skeleton style="width: 100%" animated>
                        <template slot="template">
                            <div>
                                <el-skeleton-item variant="h3" style="width: 90%;" />
                            </div>
                        </template>
                    </el-skeleton>
                </div>
            </div>
        </div>
        <div v-for="(item, index) in newsList" :key="item.id">
            <hr>
            <div class="single-most-viewed-news">
                <span class="top-viewed-news">
                    {{ index + 1}}
                </span>
                <router-link class="link-to-detail" :to="isPreview ? '' : `/tin-tuc/${item.id}`">
                    <span class="most-viewed-news-title">{{ item.title }}</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import NewsApi from "@/api/news"
export default {
    props: {
        isPreview: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            newsList: [],
            loading: false,
        }
    },
    created() {
        this.listNews()
    },
    methods: {
        listNews() {
            this.loading = true
            NewsApi.listHeadline(
                {
                    'type': 'headline',
                },
                (response) => {
                    this.newsList = response.data
                    this.loading = false
                },
                () => {
                    this.loading = false
                }
            )
        },
    },
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