<template>
  <div class="news-view">
    <div class="title-page">
      <h1> Tin tức bất động sản mới nhất </h1>
    </div>
    <div class="row">
      <div class="col-xl-8 col-lg-8 col-md-12 col-12">
        <news-list/>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-12 col-12">
        <most-viewed-news />
        <location-news/>
      </div>
    </div>
  </div>
</template>

<script>
import NewsList from '@/components/News/NewsList.vue';
import MostViewedNews from '@/components/News/MostViewedNews.vue';
import LocationNews from '@/components/News/LocationNews.vue';
export default {
  data() {
    return {
      showNews: {
        title: "",
        image: "",
      },
    };
  },
  components: {
    'news-list': NewsList,
    'most-viewed-news' : MostViewedNews,
    'location-news': LocationNews,
  },
  mounted() {
  },
  methods: {

  },
};
</script>

<style scoped>
.news-view {
  margin: 7% 10% 0 10%;
}

.title-page {
  display: flex;
  justify-content: center;
  margin: 20px 0px;
}

.news-page-content {
  display: flex;
  flex-direction: row;
}
</style>