import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "homepage",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/chi-tiet-bai-dang/:id",
    name: "postDetail",
    component: () => import("../views/PostDetailView.vue"),
  },
  {
    path: "/dang-ky",
    name: "dang-ky",
    component: () => import("../components/RegisterView.vue"),
  },
  {
    path: "/dang-nhap",
    name: "dang-nhap",
    component: () => import("../components/LoginForm.vue"),
  },

  {
    path: "/quan-ly-tin-dang",
    name: "managePost",
    component: () => import("../views/ManagePost/ListPost.vue"),
  },

  {
    path: "/quan-ly-tin-luu",
    name: "manageBookmark",
    component: () => import("../views/ManagePost/BookmarkView.vue"),
  },

  {
    path: "/dang-tin",
    name: "dang-tin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CreatePostView.vue"),
  },

  {
    path: "/nha-dat-ban",
    name: "sellPost",
    component: () => import("../views/SellPostView.vue"),
    children: [
      { path: 'can-ho-chung-cu', name: 'ban-can-ho-chung-cu', component: () => import('../views/SellPostView.vue') },
      { path: 'nha-rieng', name: 'ban-nha-rieng', component: () => import('../views/SellPostView.vue') },
      { path: 'nha-biet-thu-lien-ke', name: 'ban-nha-biet-thu-lien-ke', component: () => import('../views/SellPostView.vue') },
      { path: 'nha-mat-pho', name: 'ban-nha-mat-pho', component: () => import('../views/SellPostView.vue') },
      { path: 'nha-pho-thuong-mai', name: 'ban-nha-pho-thuong-mai', component: () => import('../views/SellPostView.vue') },
      { path: 'dat-nen-du-an', name: 'ban-dat-nen-du-an', component: () => import('../views/SellPostView.vue') },
      { path: 'dat', name: 'ban-dat', component: () => import('../views/SellPostView.vue') },
      { path: 'trang-trai-khu-nghi-duong', name: 'ban-trang-trai-khu-nghi-duong', component: () => import('../views/SellPostView.vue') },
      { path: 'condotel', name: 'ban-condotel', component: () => import('../views/SellPostView.vue') },
      { path: 'kho-nha-xuong', name: 'ban-kho-nha-xuong', component: () => import('../views/SellPostView.vue') },
      { path: 'loai-bat-dong-san-khac', name: 'ban-loai-bat-dong-san-khac', component: () => import('../views/SellPostView.vue') },
    ],
  },

  {
    path: "/nha-dat-cho-thue",
    name: "rentPost",
    component: () => import("../views/RentPostView.vue"),
    children: [
      { path: 'can-ho-chung-cu', name: 'cho-thue-can-ho-chung-cu', component: () => import("../views/RentPostView.vue") },
      { path: 'nha-rieng', name: 'cho-thue-nha-rieng', component: () => import("../views/RentPostView.vue") },
      { path: 'nha-biet-thu-lien-ke', name: 'cho-thue-nha-biet-thu-lien-ke', component: () => import("../views/RentPostView.vue") },
      { path: 'nha-mat-pho', name: 'cho-thue-nha-mat-pho', component: () => import("../views/RentPostView.vue") },
      { path: 'nha-thuong-mai', name: 'cho-thue-nha-thuong-mai', component: () => import("../views/RentPostView.vue") },
      { path: 'nha-tro-phong-tro', name: 'cho-thue-nha-tro-phong-tro', component: () => import("../views/RentPostView.vue") },
      { path: 'van-phong', name: 'cho-thue-van-phong', component: () => import("../views/RentPostView.vue") },
      { path: 'sang-nhuong-cua-hang-ki-ot', name: 'cho-thue-sang-nhuong-cua-hang-ki-ot', component: () => import("../views/RentPostView.vue") },
      { path: 'kho-nha-xuong-dat', name: 'cho-thue-kho-nha-xuong-dat', component: () => import("../views/RentPostView.vue") },
      { path: 'loai-bat-dong-san-khac', name: 'cho-thue-loai-bat-dong-san-khac', component: () => import("../views/RentPostView.vue") },
    ],
  },

  {
    path: '/du-an',
    name: 'du-an',
    component: () => import('../views/ProjectView.vue'),
    children: [
      { path: 'can-ho-chung-cu', name: 'can-ho-chung-cu', component: () => import('../views/ProjectView.vue') },
      { path: 'cao-oc-van-phong', name: 'cao-oc-van-phong', component: () => import('../views/ProjectView.vue') },
      { path: 'trung-tam-thuong-mai', name: 'trung-tam-thuong-mai', component: () => import('../views/ProjectView.vue') },
      { path: 'khi-do-thi-moi', name: 'khi-do-thi-moi', component: () => import('../views/ProjectView.vue') },
      { path: 'khu-phuc-hop', name: 'khu-phuc-hop', component: () => import('../views/ProjectView.vue') },
      { path: 'nha-o-xa-hoi', name: 'nha-o-xa-hoi', component: () => import('../views/ProjectView.vue') },
      { path: 'khu-nghi-duong-sinh-thai', name: 'khu-nghi-duong-sinh-thai', component: () => import('../views/ProjectView.vue') },
      { path: 'khu-cong-nghiep', name: 'khu-cong-nghiep', component: () => import('../views/ProjectView.vue') },
      { path: 'biet-thu-lien-ke', name: 'biet-thu-lien-ke', component: () => import('../views/ProjectView.vue') },
      { path: 'shophouse', name: 'shophouse', component: () => import('../views/ProjectView.vue') },
      { path: 'nha-mat-pho', name: 'nha-mat-pho', component: () => import('../views/ProjectView.vue') },
      { path: 'du-an-khac', name: 'du-an-khac', component: () => import('../views/ProjectView.vue') },
    ],
  },

  {
    path: '/tin-tuc',
    name: 'tin-tuc',
    component: () => import('../views/NewsView.vue'),
  },

  {
    path: '/doanh-nghiep',
    name: 'doanh-nghiep',
    component: () => import('../views/PhoneBook/EnterpriseView.vue'),
  },

  {
    path: '/nha-moi-gioi',
    name: 'nha-moi-gioi',
    component: () => import('../views/PhoneBook/BrokerView.vue'),
  },

  {
    path: '/quan-ly-tai-khoan',
    name: 'quan-ly-tai-khoan',
    component: () => import('../views/ManageInfor/ProfileView.vue'),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
