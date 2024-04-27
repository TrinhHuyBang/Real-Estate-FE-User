<template>
  <div>
    <div v-if="displayTitle">
      <h4>Danh sách yêu cầu tư vấn</h4>
      <p>Hiện có {{ requests.length }} yêu cầu</p>
    </div>
    <div v-if="requests && requests.length">
      <div class="d-flex flex-wrap">
        <div
          class="col-md-12 col-lg-6 request-single-card"
          v-for="request in requests"
          :key="request.id"
        >
          <div
            @click="toggeDialog(request)"
            class="request-single-card-content"
          >
            <div>
              <span class="advice-request-card-title">{{ request.title }}</span>
              <div>
                <span>Yêu cầu tư vấn về: </span>
                <span class="request-address">{{
                  changeTypePost(postType[request.type_id])
                }}</span>
              </div>
              <div>
                <span class="advice-request-description">{{
                  request.description
                }}</span>
              </div>
              <span> Tài chính </span>
              <span style="color: red; font-weight: 600">
                {{
                  request.data.size
                    ? showPrice(request.data.price) + " ・ " + request.data.size
                    : showPrice(request.data.price)
                }}
              </span>
              <span v-if="request.data.bedroom">
                {{ " ・ " + request.data.bedroom }}
                <i class="el-icon fa fa-bed"></i>
              </span>
              <div class="post-location">
                <i class="el-icon-location-outline"></i>
                {{ showAddress(request) }}
              </div>
              <div
                class="published_at rent-sell-post-published"
              >
                Đăng vào {{ showTime(request.created_at) }}
              </div>
            </div>
          </div>
        </div>
        <el-dialog
          title="Thông tin yêu cầu tư vấn"
          width="600px"
          :visible.sync="openDialog"
          :before-close="closeDialog"
        >
          <el-card class="post-infor card">
            <h4 style="color: #0e58a0">{{ selectedRequest.title }}</h4>
            <div>
              <span>Tài chính: </span>
              <span class="request-address">{{
                showPrice(selectedRequest.data.price)
              }}</span>
            </div>
            <div>
              <span>Yêu cầu tư vấn về: </span>
              <span class="request-address">{{
                changeTypePost(postType[selectedRequest.type_id])
              }}</span>
            </div>
            <div class="request-address">
              <i class="el-icon-location-outline"></i>
              {{ showAddress(selectedRequest) }}
            </div>

            <h5 class="sub-title">Các yêu cầu về bất động sản</h5>
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="label-infor">Diện tích</div>
              </el-col>
              <el-col :span="6"
                ><div>{{ selectedRequest.data.size }}</div></el-col
              >
              <el-col :span="6">
                <div class="label-infor">Tài chính</div>
              </el-col>
              <el-col :span="6"
                ><div>{{ showPrice(selectedRequest.data.price) }}</div></el-col
              >
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="label-infor">Số phòng khách</div>
              </el-col>
              <el-col :span="6"
                ><div>
                  {{
                    selectedRequest.data.livingRoom
                      ? selectedRequest.data.livingRoom + " phòng"
                      : "N/A"
                  }}
                </div></el-col
              >
              <el-col :span="6">
                <div class="label-infor">Số phòng ngủ</div>
              </el-col>
              <el-col :span="6"
                ><div>
                  {{
                    selectedRequest.data.bedroom
                      ? selectedRequest.data.bedroom + " phòng"
                      : "N/A"
                  }}
                </div></el-col
              >
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="label-infor">Số tầng</div>
              </el-col>
              <el-col :span="6"
                ><div>
                  {{
                    selectedRequest.data.floor ? selectedRequest.data.floor + " tầng" : "N/A"
                  }}
                </div></el-col
              >
            </el-row>
            <h5 v-if="selectedRequest.description" class="sub-title">
              Thông tin mô tả thêm
            </h5>
            <p>{{ selectedRequest.description }}</p>
          </el-card>
          <span slot="footer" class="dialog-footer">
            <el-button @click="closeDialog">Huỷ</el-button>
            <el-button @click="handleApplyRequest(selectedRequest.id)" type="primary">Đăng ký</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
    <list-post-error v-else />
  </div>
</template>

<script>
import AdviceRequestApi from "@/api/adviceRequest";
import { Notification } from "element-ui";
import ListPostError from "@/components/NoneToDisplay/ListPostError.vue";
import postType from '@/data/postType';
export default {
  props: {
    requests: {
      type: Array,
      default: () => []
    },
    displayTitle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      openDialog: false,
      selectedRequest: {
        created_at: null,
        data: {
            bedroom: null,
            floor: null,
            livingRoom: null,
            price: null,
            size: null,
        },
        description: null,
        district: '-',
        id: null,
        project_id: null,
        province: '-',
        title: null,
        type_id: null,
      },
      postType: postType
    };
  },
  components: {
    ListPostError,
  },
  methods: {
    toggeDialog(request) {
      this.openDialog = true
      this.selectedRequest = {
        ...request
      }
    },
    closeDialog() {
        this.openDialog = false
    },
    handleApplyRequest(request_id) {
      AdviceRequestApi.applyRequest(
        {
          request_id: request_id,
        },
        () => {
          Notification.success({
            title: "Thành công",
            message: "Bạn đã đăng ký thành công vào yêu cầu tư vấn!",
          });
          this.$emit('applied')
          this.openDialog = false
        }
      );
    },
    showPrice(price) {
      return price / 1000 >= 1
        ? (price / 1000).toFixed(2) + " tỷ"
        : price + " triệu";
    },
  },
};
</script>

<style scoped>
.card {
  margin: 0px 10px;
  /* padding: 20px; */
}

.request-address {
    margin-top: 5px;
  font-size: 16px;
  font-weight: 600;
}
</style>