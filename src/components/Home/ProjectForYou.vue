<template>
  <div>
    <div class="container">
      <h4>Dự án bất động sản nổi bật</h4>
      <div class="row">
        <div class="col-6 col-md-4 col-lg-3" v-for="project in displayedProjects" :key="project.id">
          <router-link :to="`/chi-tiet-du-an/${project.id}`" class="link-to-detail">
            <el-card class="project-card" :body-style="{ padding: '0px' }">
              <img :src="project.imageUrl" class="image" />
              <div style="padding: 14px">
                <span v-if="project.status" :class="getStatusClass(project)">{{ project.status }}</span>
                <span v-else class="status-in-progress">Đang cập nhật</span>
                <span class="project-name-show">{{ project.name }}</span>
                <div class="project-size-location">
                  <div class="project-size">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="25px" height="25px" viewBox="0 0 111.000000 93.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,93.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                        <path d="M40 800 l0 -70 30 0 c23 0 30 4 30 20 0 20 7 20 320 20 313 0 320 0 320 -20 0 -16 7 -20 30 -20 l30 0 0 70 0 70 -30 0 c-23 0 -30 -4 -30 -20 0 -20 -7 -20 -320 -20 -313 0 -320 0 -320 20 0 16 -7 20 -30 20 l-30 0 0 -70z"/>
                        <path d="M103 640 c-64 -39 -68 -53 -68 -265 0 -212 4 -226 68 -265 30 -19 52 -20 317 -20 265 0 287 1 317 20 64 39 68 53 68 265 0 212 -4 226 -68 265 -30 19 -52 20 -317 20 -265 0 -287 -1 -317 -20z m608 -69 c24 -19 24 -22 24 -196 0 -174 0 -177 -24 -196 -22 -18 -42 -19 -291 -19 -249 0 -269 1 -291 19 -24 19 -24 22 -24 196 0 174 0 177 24 196 22 18 42 19 291 19 249 0 269 -1 291 -19z"/>
                        <path d="M920 626 c0 -18 6 -25 23 -28 22 -3 22 -3 25 -225 l2 -223 -25 0 c-20 0 -25 -5 -25 -25 0 -24 2 -25 75 -25 73 0 75 1 75 24 0 18 -6 25 -22 28 l-23 3 0 220 0 220 23 3 c16 3 22 10 22 28 0 23 -2 24 -75 24 -73 0 -75 -1 -75 -24z"/>
                        </g>
                    </svg>
                    <span> {{ project.size + " m&sup2;"}}</span>
                  </div>
                  <div class="project-location">
                      <i class="el-icon-location-outline"></i> {{ project.district + ", " + project.city }}
                  </div>
                </div>
              </div>
            </el-card>
          </router-link>
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
          name: "Eurowindow Garden City Thanh Hóa",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/projects%2F20231026090858-7999_wm.jpg?alt=media&token=d64bea7a-1a85-47c3-be74-289086271a11&_gl=1*jwtivj*_ga*MTU4MTYxNzQ2MS4xNjg3OTI2Njcw*_ga_CW55HF8NVT*MTY5ODgxNTYxOC40MC4xLjE2OTg4MTcxNjYuMzkuMC4w",
          size: 100,
          city: "Ha Noi",
          status: "Sắp mở bán",
          district: "Hai Ba Trung",
        },
        {
          id: 2,
          name: "Meypearl Harmony Phú Quốc",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/projects%2F20231026113735-5218_wm.jpg?alt=media&token=1056c8fd-7a09-41fd-a41e-cbc942ff57bf&_gl=1*1160p0l*_ga*MTU4MTYxNzQ2MS4xNjg3OTI2Njcw*_ga_CW55HF8NVT*MTY5ODgxNTYxOC40MC4xLjE2OTg4MTcxOTUuMTAuMC4w",
          size: 100,
          city: "Ha Noi",
          status: "Đang mở bán",
          district: "Hai Ba Trung",
        },
        {
          id: 3,
          name: "Ikigai Onsen Village Đại Lải",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/projects%2FDanko_1.jpg?alt=media&token=facb0bd9-69e2-4a5e-be04-f0e4ec55c46d&_gl=1*thij4b*_ga*MTU4MTYxNzQ2MS4xNjg3OTI2Njcw*_ga_CW55HF8NVT*MTY5ODgxNTYxOC40MC4xLjE2OTg4MTcyMDkuNTguMC4w",
          size: 100,
          city: "Ha Noi",
          status: "Đã bàn giao",
          district: "Hai Ba Trung",
          type: "ban",
        },
        {
          id: 4,
          name: "Chung cư Gia Phú",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/projects%2Fhoalac_1.jpg?alt=media&token=3d4d890a-d2be-4bde-9294-91843840f470&_gl=1*5ws1h*_ga*MTU4MTYxNzQ2MS4xNjg3OTI2Njcw*_ga_CW55HF8NVT*MTY5ODgxNTYxOC40MC4xLjE2OTg4MTcyMjQuNDMuMC4w",
          size: 100,
          city: "Ha Noi",
          status: '',
          district: "Hai Ba Trung",
        },
        {
          id: 5,
          name: "Card 1",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/Moc4.jpg?alt=media&token=332cfb56-5143-4049-a63a-dd9002b70edc",
          size: 100,
          city: "Ha Noi",
          status: "Đang mở bán",
          district: "Hai Ba Trung",
        },
        {
          id: 6,
          name: "Card 2",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/Moc4.jpg?alt=media&token=332cfb56-5143-4049-a63a-dd9002b70edc",
          size: 100,
          city: "Ha Noi",
          status: "Đã bàn giao",
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
          status: null,
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
    getStatusClass(project) {
      return {
        'status-pending': project.status === 'Sắp mở bán',
        'status-completed': project.status === 'Đang mở bán',
        'status-handed': project.status === 'Đã bàn giao',
      };
    }
  },
};
</script>

<style scoped>
h4 {
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

.project-name-show {
  font-size: 15px;
  font-weight: 700;
  color: #0E58A0;;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 10px 0px 5px 0px;
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