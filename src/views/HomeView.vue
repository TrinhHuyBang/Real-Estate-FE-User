<template>
  <div>
    <div class="search">
      <p>Hệ thống quản lý và quảng bá bất động sản</p>
    </div>
    <div class="home">
      <div class="news">
        <el-tabs v-model="activeName">
          <el-tab-pane v-for="tab in tabNews" :key="tab.name" :name="tab.name">
            <span class="tabs-item-custom" slot="label"> {{ tab.label }}</span>
            <headline-news :newsList="newsList" :loading="loading"/>
          </el-tab-pane>
        </el-tabs>
        <el-button @click="gotoPage('tin-tuc')" class="btn-view-more" type="text">Xem thêm <i class="el-icon-right"></i></el-button>
      </div>
      <el-dialog width="300px" :show-close="false" :visible.sync="dialogProfileVisible" class="dialog-profile">
        <span slot="title" class="title-item text-center d-block"> complete_profile </span>
        <el-row :gutter="20">
            <el-col :span="12">
                <div>
                    <span>First name</span>
                    <el-input class="custom-input-focus" v-model="first_name" placeholder="Type here"></el-input>
                </div>
            </el-col>
            <el-col :span="12">
                <div>
                    <span>Last name</span>
                    <el-input v-model="last_name" placeholder="Type here" class="custom-input-focus"></el-input>
                </div>
            </el-col>
        </el-row>
        <div>
            <div>Gender</div>
            <el-select v-model="gender" placeholder="Select your gender" class="gender-select">
    <el-option v-for="item in genders" :key="item.value" :label="item.label" :value="item.value">
      <template #default>
        <span>
          <svg :width="item.svg.width" :height="item.svg.height" :viewBox="item.svg.viewBox" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g v-html="item.svg.content"></g>
          </svg>
          {{ item.label }}
        </span>
      </template>
    </el-option>
    <template #prefix>
      <span v-if="selectedOption">
        <svg style="margin-top: 10px; margin-left: 10px" :width="selectedOption.svg.width" :height="selectedOption.svg.height" :viewBox="selectedOption.svg.viewBox" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g v-html="selectedOption.svg.content"></g>
        </svg>
      </span>
    </template>
  </el-select>
        </div>
        <div>
            <div style="display: flex; justify-content: space-between;">
              <span>Date of birth</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.66406 1.66699V4.16699" stroke="#8A8A8A" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.3359 1.66699V4.16699" stroke="#8A8A8A" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.1667 17.8333C16.6394 17.8333 17.8333 16.6394 17.8333 15.1667C17.8333 13.6939 16.6394 12.5 15.1667 12.5C13.6939 12.5 12.5 13.6939 12.5 15.1667C12.5 16.6394 13.6939 17.8333 15.1667 17.8333Z" stroke="#8A8A8A" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.3333 18.3333L17.5 17.5" stroke="#8A8A8A" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.91406 7.5752H17.0807" stroke="#8A8A8A" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.1417 18.3337H6.66667C3.75 18.3337 2.5 16.667 2.5 14.167V7.08366C2.5 4.58366 3.75 2.91699 6.66667 2.91699H13.3333C16.25 2.91699 17.5 4.58366 17.5 7.08366V10.8337" stroke="#8A8A8A" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.99803 11.4172H10.0055" stroke="#8A8A8A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.91209 11.4172H6.91957" stroke="#8A8A8A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.91209 13.9172H6.91957" stroke="#8A8A8A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <el-row :gutter="20">
              <el-col :span="6">
                      <el-input v-model="first_name" placeholder="dd"></el-input>
              </el-col>
              <el-col :span="6">
                      <el-input v-model="first_name" placeholder="mm"></el-input>
              </el-col>
              <el-col :span="12">
                      <el-input v-model="last_name" placeholder="yyyy"></el-input>
              </el-col>
          </el-row>
        </div>
        <div>
          <div><span>Phone number</span></div>
          <el-row :gutter="20">
              <el-col :span="6">
                <el-input v-model="first_name" placeholder="dd"></el-input>
              </el-col>
              <el-col :span="18">
                <el-input v-model="first_name" placeholder="mm"></el-input>
              </el-col>
          </el-row>
        </div>
        <!-- <span>{{ textEarning.complete_profile_dialog }}</span> -->
        <span slot="footer" class="dialog-footer">
            <el-button class="bon-btn">Reset</el-button>
            <el-button class="bon-btn bon-btn-primary">Complete</el-button>
        </span>
      </el-dialog>
      <RealEstateForYou />
      <ProjectForYou />
      <LocationRealEstateVue />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RealEstateForYou from "@/components/Home/RealEstateForYou.vue"
import ProjectForYou from "@/components/Home/ProjectForYou.vue"
import LocationRealEstateVue from '@/components/Home/LocationRealEstate.vue'
import HeadlineNews from '@/components/Home/HeadlineNews.vue'
import NewsApi from "@/api/news"

export default {
  computed: {
    selectedOption() {
      return this.genders.find(option => option.value === this.gender);
    }
  },
  data() {
    return {
      dialogProfileVisible: true,
      first_name: "",
      last_name: "",
      gender: "",
      genders: [
        {
          label: 'Male',
          value: 'male',
          svg: {
            width: '20',
            height: '20',
            viewBox: '0 0 20 20',
            content: `<g clip-path="url(#clip0_5110_46358)">
                        <path d="M9.15321 9.1786L10.8281 10.8535L19.5859 2.09578L17.9109 0.420862L9.15321 9.1786Z" fill="#4BBAED"/>
                        <path d="M6.41664 7.1665C2.87281 7.1665 0 10.0394 0 13.5831C0 17.127 2.87281 19.9998 6.41664 19.9998C9.96047 19.9998 12.8333 17.127 12.8333 13.5831C12.8333 10.0394 9.96043 7.1665 6.41664 7.1665ZM6.41664 17.631C4.18109 17.631 2.36879 15.8187 2.36879 13.5831C2.36879 11.3476 4.18109 9.53529 6.41664 9.53529C8.65223 9.53529 10.4645 11.3476 10.4645 13.5831C10.4645 15.8187 8.65219 17.631 6.41664 17.631Z" fill="#93D6F4"/>
                        <path d="M5.91047 9.5682C5.74559 9.54777 5.57766 9.53711 5.40723 9.53711C3.17168 9.53711 1.35938 11.3494 1.35938 13.585C1.35938 15.8205 3.17168 17.6328 5.40723 17.6328C5.57766 17.6328 5.74555 17.6221 5.91047 17.6017C3.91238 17.3539 2.36586 15.6501 2.36586 13.585C2.36586 11.5198 3.91242 9.81598 5.91047 9.5682Z" fill="#4BBAED"/>
                        <path d="M6.41336 7.16797C6.24398 7.16797 6.07621 7.17465 5.91016 7.18754C9.21875 7.44422 11.8236 10.2102 11.8236 13.5846C11.8236 16.9591 9.21875 19.725 5.91016 19.9817C6.07621 19.9946 6.24402 20.0013 6.41336 20.0013C9.95719 20.0013 12.83 17.1284 12.83 13.5846C12.83 10.0408 9.95715 7.16797 6.41336 7.16797Z" fill="#4BBAED"/>
                        <path d="M19.2391 2.43619V1.75408L18.2462 0.76123H17.5641L15.1953 3.13002H16.5513C16.7275 3.13002 16.8703 3.27283 16.8703 3.449V4.80502L19.2391 2.43619Z" fill="#40A2E2"/>
                        <path d="M17.635 0H13.6237C13.4475 0 13.3047 0.142813 13.3047 0.318984V2.0498C13.3047 2.22598 13.4475 2.36879 13.6237 2.36879H17.316C17.4922 2.36879 17.635 2.5116 17.635 2.68777V6.38012C17.635 6.55629 17.7778 6.6991 17.954 6.6991H19.6848C19.861 6.6991 20.0038 6.55629 20.0038 6.38012V2.36879V0.318984C20.0038 0.142813 19.861 0 19.6848 0H17.635Z" fill="#93D6F4"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_5110_46358">
                          <rect width="20" height="20" fill="white"/>
                        </clipPath>
                      </defs>`
          }
        },
        {
          label: 'Female',
          value: 'female',
          svg: {
            width: '20',
            height: '20',
            viewBox: '0 0 20 20',
            content: `<g clip-path="url(#clip0_5110_46369)">
                        <path d="M12.9995 15.5459H11.4972C11.3197 15.5459 11.1758 15.402 11.1758 15.2244V11.5234H8.82882V15.2244C8.82882 15.402 8.68491 15.5459 8.50738 15.5459H7.00504C6.8275 15.5459 6.68359 15.6898 6.68359 15.8673V17.5714C6.68359 17.749 6.8275 17.8929 7.00504 17.8929H8.50738C8.68491 17.8929 8.82882 18.0368 8.82882 18.2143V19.679C8.82882 19.8565 8.97273 20.0004 9.15026 20.0004H10.8544C11.0319 20.0004 11.1758 19.8565 11.1758 19.679V18.2143C11.1758 18.0368 11.3197 17.8929 11.4972 17.8929H12.9996C13.1771 17.8929 13.321 17.749 13.321 17.5714V15.8673C13.321 15.6898 13.1771 15.5459 12.9995 15.5459Z" fill="#EF687E"/>
                        <path d="M8.82812 11.5229V13.6738C9.21035 13.7346 9.60222 13.7667 10.0016 13.7667C10.4009 13.7667 10.7928 13.7347 11.175 13.6738V11.5229H8.82812Z" fill="#E63952"/>
                        <path d="M9.99806 0C6.48698 0 3.64062 2.84632 3.64062 6.35744C3.64062 9.86856 6.48698 12.7149 9.99806 12.7149C13.5091 12.7149 16.3555 9.86859 16.3555 6.35748C16.3555 2.84636 13.5092 0 9.99806 0ZM9.99806 10.368C7.78315 10.368 5.98757 8.57239 5.98757 6.35748C5.98757 4.14256 7.78315 2.34694 9.99806 2.34694C12.213 2.34694 14.0086 4.14252 14.0086 6.35744C14.0086 8.57235 12.213 10.368 9.99806 10.368Z" fill="#F996B1"/>
                        <path d="M9.40026 2.39088C9.20674 2.36221 9.00881 2.34717 8.80737 2.34717C6.59245 2.34717 4.79688 4.14275 4.79688 6.35766C4.79688 8.57257 6.59245 10.3682 8.80737 10.3682C9.00885 10.3682 9.20678 10.3531 9.40026 10.3244C7.46651 10.0378 5.98265 8.37113 5.98265 6.35766C5.98265 4.34419 7.46647 2.67744 9.40026 2.39088Z" fill="#F28598"/>
                        <path d="M9.99523 0C9.79527 0 9.59758 0.00968746 9.40234 0.0277343C12.6354 0.326796 15.1669 3.04628 15.1669 6.35744C15.1669 9.6686 12.6355 12.3881 9.40238 12.6871C9.59762 12.7052 9.79531 12.7149 9.99527 12.7149C13.5064 12.7149 16.3527 9.86856 16.3527 6.35744C16.3527 2.84632 13.5064 0 9.99523 0Z" fill="#F28598"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_5110_46369">
                          <rect width="20" height="20" fill="white"/>
                        </clipPath>
                      </defs>`
          }
        },
        {
          label: 'Others',
          value: 'others',
          svg: {
            width: '20',
            height: '20',
            viewBox: '0 0 20 20',
            content: `<path d="M12.2514 11.415L12.1825 11.4014C11.6527 11.9313 10.9293 12.2677 10.1332 12.2993C9.23648 12.335 8.41863 11.9852 7.83481 11.4014L7.76441 11.4165L6.66867 12.5122L6.65625 12.5799C7.22563 13.1493 7.94043 13.573 8.73746 13.7952C8.99707 13.8675 9.17527 14.1059 9.17527 14.3754V19.5972C9.17527 19.8195 9.35543 19.9996 9.5777 19.9996H10.4395C10.6618 19.9996 10.842 19.8195 10.842 19.5972V14.3755C10.842 14.1061 11.0202 13.8677 11.2798 13.7954C12.0769 13.5732 12.7916 13.1492 13.361 12.5799L13.3487 12.5123L12.2514 11.415Z" fill="#FE73C5"/>
                      <path d="M12.7309 11.9492C12.6684 12.0199 12.6045 12.0896 12.5369 12.1572L12.5349 12.1552C11.9655 12.7246 11.2529 13.1506 10.4558 13.3727C10.1962 13.445 10.0179 13.6834 10.0179 13.9529V18.7722C10.0179 18.9944 9.83777 19.1746 9.61551 19.1746H9.17578V19.5971C9.17578 19.8193 9.35594 19.9995 9.5782 19.9995H10.44C10.6623 19.9995 10.8425 19.8194 10.8425 19.5971V14.3754C10.8425 14.1059 11.0207 13.8676 11.2803 13.7952C12.0774 13.5731 12.7921 13.1491 13.3615 12.5798L12.7309 11.9492Z" fill="#FE4FB7"/>
                      <path d="M10.0497 4.55848L10.0107 4.48875C9.29633 4.48824 8.58191 4.6482 7.92641 4.96742C7.6932 5.08098 7.41414 5.03742 7.23074 4.85398L6.71742 4.34066L7.88301 3.17508C8.04016 3.01793 8.04016 2.76312 7.88301 2.60598L7.27359 1.99656C7.11645 1.83941 6.86164 1.83941 6.70449 1.99656L5.53891 3.16215L4.00273 1.62598H3.06566C2.93254 1.62598 2.82422 1.7343 2.82422 1.86742V2.80449L4.36039 4.34066L3.1948 5.50625C3.03766 5.6634 3.03766 5.9182 3.1948 6.07535L3.80422 6.68477C3.96137 6.84191 4.21617 6.84191 4.37332 6.68477L5.53891 5.51918L5.93504 5.91531C6.13516 6.11543 6.17 6.42816 6.01707 6.66633C4.83883 8.50102 5.05113 10.9764 6.65453 12.5798L7.83305 11.4013C6.63438 10.2026 6.63438 8.25227 7.83305 7.05359C8.43336 6.45328 9.22215 6.15371 10.0107 6.15469L10.0498 6.07148V4.55848H10.0497Z" fill="#BD80E1"/>
                      <path d="M14.0759 5.91531L17.1867 2.80449V1.86742C17.1867 1.7343 17.0784 1.62598 16.9452 1.62598H16.0082L12.7803 4.85387C12.5966 5.03758 12.3171 5.08066 12.0836 4.96691C11.4307 4.64883 10.7193 4.4893 10.0078 4.48875V6.15469C10.7938 6.15566 11.5795 6.45523 12.1779 7.05359C13.3765 8.25227 13.3765 10.2026 12.1779 11.4013L13.3564 12.5798C14.9598 10.9764 15.1721 8.50098 13.9938 6.66629C13.8409 6.42816 13.8757 6.11543 14.0759 5.91531Z" fill="#8AC9FE"/>
                      <path d="M17.0707 1.6665L13.2091 5.52818C12.9327 5.80455 12.8791 6.23357 13.08 6.56889C14.116 8.29857 14.1022 10.3917 12.7188 11.9501L13.349 12.5803C14.9524 10.9769 15.1647 8.5015 13.9864 6.66682C13.8335 6.42869 13.8684 6.11596 14.0685 5.9158L17.1793 2.80498V1.86795C17.1793 1.78373 17.1361 1.70971 17.0707 1.6665Z" fill="#60B7FF"/>
                      <path d="M18.4028 4.56744H17.541C17.3187 4.56744 17.1386 4.38729 17.1386 4.16502V1.86838C17.1386 1.75725 17.0485 1.66717 16.9373 1.66717H14.6407C14.4184 1.66717 14.2383 1.48701 14.2383 1.26475V0.40291C14.2383 0.180645 14.4184 0.000488281 14.6407 0.000488281H18.4028C18.6251 0.000488281 18.8052 0.180645 18.8052 0.40291V4.16502C18.8052 4.38725 18.625 4.56744 18.4028 4.56744Z" fill="#B3DAFE"/>
                      <path d="M18.4049 0H17.966V3.31992C17.966 3.54219 17.7859 3.72234 17.5636 3.72234H17.1406V4.16453C17.1406 4.3868 17.3208 4.56695 17.543 4.56695H18.4049C18.6271 4.56695 18.8073 4.3868 18.8073 4.16453V0.402422C18.8073 0.180156 18.6271 0 18.4049 0Z" fill="#8AC9FE"/>
                      <path d="M12.487 17.631H7.52352C7.30125 17.631 7.12109 17.4509 7.12109 17.2286V16.3668C7.12109 16.1445 7.30125 15.9644 7.52352 15.9644H12.487C12.7092 15.9644 12.8894 16.1445 12.8894 16.3668V17.2286C12.8894 17.4508 12.7092 17.631 12.487 17.631Z" fill="#FEAEE1"/>
                      <path d="M12.483 15.9639H11.8259V16.4387C11.8259 16.6609 11.6458 16.8411 11.4235 16.8411H7.11719V17.2281C7.11719 17.4504 7.29734 17.6305 7.51961 17.6305H12.483C12.7053 17.6305 12.8855 17.4504 12.8855 17.2281V16.3663C12.8855 16.144 12.7053 15.9639 12.483 15.9639Z" fill="#FE93D3"/>
                      <path d="M2.45566 4.56695H1.59383C1.37156 4.56695 1.19141 4.3868 1.19141 4.16453V0.402422C1.19141 0.180156 1.3716 0 1.59383 0H5.35594C5.5782 0 5.75836 0.180156 5.75836 0.402422V1.26426C5.75836 1.48652 5.5782 1.66668 5.35594 1.66668H3.0593C2.94816 1.66668 2.85809 1.75676 2.85809 1.86789V4.16453C2.85809 4.38676 2.67793 4.56695 2.45566 4.56695Z" fill="#D9B1EE"/>
                      <path d="M5.35594 0H4.93008V0.419648C4.93008 0.641914 4.74992 0.82207 4.52766 0.82207H2.43223C2.20996 0.82207 2.0298 1.00223 2.0298 1.22449V3.31992C2.0298 3.54219 1.84965 3.72234 1.62738 3.72234H1.19141V4.16453C1.19141 4.3868 1.37156 4.56695 1.59383 4.56695H2.45566C2.67793 4.56695 2.85809 4.3868 2.85809 4.16453V1.86789C2.85809 1.75676 2.94816 1.66668 3.0593 1.66668H5.35594C5.5782 1.66668 5.75836 1.48652 5.75836 1.26426V0.402422C5.75836 0.180156 5.5782 0 5.35594 0Z" fill="#CB97E7"/>`
          }
        }
      ],
      selectedType: "",
      searchForm: {
        searchKey: '',
      },
      tabNews: [
        {
          label: "Tin nổi bật",
          name: "headline",
        },
        {
          label: "Tin tức",
          name: "all",
        },
        {
          label: "BĐS TPHCM",
          name: "hcm",
        },
        {
          label: "BĐS Hà Nội",
          name: "hn",
        },
      ],
      activeName: "headline",
      newsList: [],
      loading: false,
    };
  },
  components: {
    RealEstateForYou,
    ProjectForYou,
    LocationRealEstateVue,
    HeadlineNews,
  },

  created() {
    this.listNews()
  },

  methods: {
    listNews() {
      this.loading = true
      NewsApi.listHeadline(
        {
          'type': this.activeName,
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
  watch: {
    activeName() {
      this.listNews()
    },
  }
};
</script>

<style scoped>
.custom-input-focus input {
  border-radius: 10px !important;
}
.custom-input-focus input:focus {
  border-color: linear-gradient(97.99deg, rgba(237, 102, 178, 0.8) 18.85%, rgba(134, 70, 156, 0.8) 116.55%) !important; /* Thay đổi màu khung khi focus vào */
  outline: none; /* Bỏ viền outline mặc định */
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.5); /* Thêm hiệu ứng bóng mờ nếu muốn */
}
.gender-select {
  width: 100%;
}
.gender-select .el-input__inner {
  display: flex;
  align-items: center;
}
.gender-select >>> .el-input--prefix >>> .el-input__inner {
  padding-left: 40px !important;
}
.gender-select .el-input__inner span {
  display: flex;
  align-items: center;
}
.gender-select .el-input__inner span svg {
  margin-right: 8px;
}
@media screen and (min-width:1260px){
  .home {
    margin: 3% 10% 0 10%;
  }
}

@media screen and (max-width:1260px){
  .home {
    margin: 5% 20px 0 20px;
  }
}

.news {
  position: relative;
  margin: 0px 20px 0 20px;
}

.btn-view-more {
  position: absolute;
  right: 20px;
  top: 0px;
}

.tabs-item-custom {
  height: 45px;
  font-size: 20px;
  font-weight: 500;
}

.search {
  padding: 13rem;
  background-image: url(https://lavenderstudio.com.vn/wp-content/uploads/2017/08/chup-hinh-noi-that-9-1024x683.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search > p {
  display: flex;
  justify-content: center;
  background-color: #409EFF;
  align-items: center;
  color: #ffffff;
  font-weight: 700;
  font-size: 45px;
  padding: 20px;
  border-radius: 20px;
}

.input-form {
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 10px;
  height: 50px;
  width: 80%;
  padding:7px 10px 7px 0;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
  width: 20%;
}

.search-btn {
  margin: 4px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
}
</style>
