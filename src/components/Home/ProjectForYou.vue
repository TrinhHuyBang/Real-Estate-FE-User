<template>
  <div>
    <div class="container">
      <h3>Dự án bất động sản nổi bật</h3>
      <div class="row">
        <div class="col-6 col-md-4 col-lg-3 post-card" v-for="project in displayedProjects" :key="project.id">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="project.imageUrl" class="image" />
            <div style="padding: 14px">
              <p>{{ project.status }}</p>
              <p class="">{{ project.name }}</p>
              <p>{{ project.size + "ha" }}</p>
              <p>{{ project.district + ", " + project.city }}</p>
              <!-- <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">Operating</el-button>
              </div> -->
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          name: "Card 1",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/projects%2F20231026090858-7999_wm.jpg?alt=media&token=d64bea7a-1a85-47c3-be74-289086271a11&_gl=1*jwtivj*_ga*MTU4MTYxNzQ2MS4xNjg3OTI2Njcw*_ga_CW55HF8NVT*MTY5ODgxNTYxOC40MC4xLjE2OTg4MTcxNjYuMzkuMC4w",
          size: 100,
          city: "Ha Noi",
          status: "Sắp mở bán",
          district: "Hai Ba Trung",
        },
        {
          id: 2,
          name: "Card 2",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/projects%2F20231026113735-5218_wm.jpg?alt=media&token=1056c8fd-7a09-41fd-a41e-cbc942ff57bf&_gl=1*1160p0l*_ga*MTU4MTYxNzQ2MS4xNjg3OTI2Njcw*_ga_CW55HF8NVT*MTY5ODgxNTYxOC40MC4xLjE2OTg4MTcxOTUuMTAuMC4w",
          size: 100,
          city: "Ha Noi",
          status: "Sắp mở bán",
          district: "Hai Ba Trung",
        },
        {
          id: 3,
          name: "Card 3",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/projects%2FDanko_1.jpg?alt=media&token=facb0bd9-69e2-4a5e-be04-f0e4ec55c46d&_gl=1*thij4b*_ga*MTU4MTYxNzQ2MS4xNjg3OTI2Njcw*_ga_CW55HF8NVT*MTY5ODgxNTYxOC40MC4xLjE2OTg4MTcyMDkuNTguMC4w",
          size: 100,
          city: "Ha Noi",
          status: "Sắp mở bán",
          district: "Hai Ba Trung",
          type: "ban",
        },
        {
          id: 4,
          name: "Card 4",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/projects%2Fhoalac_1.jpg?alt=media&token=3d4d890a-d2be-4bde-9294-91843840f470&_gl=1*5ws1h*_ga*MTU4MTYxNzQ2MS4xNjg3OTI2Njcw*_ga_CW55HF8NVT*MTY5ODgxNTYxOC40MC4xLjE2OTg4MTcyMjQuNDMuMC4w",
          size: 100,
          city: "Ha Noi",
          status: "Sắp mở bán",
          district: "Hai Ba Trung",
        },
        {
          id: 5,
          name: "Card 1",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/Moc4.jpg?alt=media&token=332cfb56-5143-4049-a63a-dd9002b70edc",
          size: 100,
          city: "Ha Noi",
          status: "Sắp mở bán",
          district: "Hai Ba Trung",
        },
        {
          id: 6,
          name: "Card 2",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/Moc4.jpg?alt=media&token=332cfb56-5143-4049-a63a-dd9002b70edc",
          size: 100,
          city: "Ha Noi",
          status: "Sắp mở bán",
          district: "Hai Ba Trung",
        },
        {
          id: 7,
          name: "Card 3",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/Moc4.jpg?alt=media&token=332cfb56-5143-4049-a63a-dd9002b70edc",
          price: 2000,
          unit: "VND/m2",
          size: 100,
          city: "Ha Noi",
          status: "Sắp mở bán",
          district: "Hai Ba Trung",
        },
        {
          id: 8,
          name: "Card 4",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/Moc4.jpg?alt=media&token=332cfb56-5143-4049-a63a-dd9002b70edc",
          size: 100,
          city: "Ha Noi",
          status: "Sắp mở bán",
          district: "Hai Ba Trung",
        },
      ],
      currentIndex: 0,
      cardsPerSlide: 4,
    };
  },
  computed: {
    totalSlides() {
      return Math.ceil(this.projects.length / this.cardsPerSlide);
    },
    displayedProjects() {
      const start = this.currentIndex * this.cardsPerSlide;
      const end = start + this.cardsPerSlide;
      return this.projects.slice(start, end);
    },
  },
  methods: {
    slideLeft() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    slideRight() {
      if (this.currentIndex < this.totalSlides - 1) {
        this.currentIndex++;
      }
    },
  },
};
</script>

<style>
h3 {
  margin: 30px 0 10px 0;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  height: 200px;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.navigation {
  margin-top: 10px;
}
</style>