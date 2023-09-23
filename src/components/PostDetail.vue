<template>
  <div class="post-detail">
    <img class="image-detail" :src="post.imageUrl" alt="Anh" />
    <h4 class="post-title">{{ post.title }}</h4>
    <table>
      <tr>
        <td style="width: 80%">
          <p class="post-address">
            {{
              post.street +
              ", " +
              post.commune +
              ", " +
              post.district +
              ", " +
              post.city
            }}
          </p>
        </td>
        <td style="width: 10%">
          <b-icon class="icon-show" icon="share"></b-icon>
        </td>
        <td style="width: 10%">
          <b-icon class="icon-show" icon="exclamation-triangle"></b-icon>
        </td>
        <td style="width: 10%">
          <b-icon class="icon-show" icon="heart"></b-icon>
        </td>
      </tr>
    </table>
    <hr />
    <table>
      <tr class="lable-detail">
        <td style="width: 30%; color: gray">Mức giá</td>
        <td style="width: 20%; color: gray">Diện tích</td>
        <td style="width: 40%; color: gray">Ngày đăng</td>
      </tr>
      <tr class="notice-detail">
        <td>{{ showPrice() }}</td>
        <td>{{ post.size + " m&sup2;" }}</td>
        <td>{{ post.date_submmit }}</td>
      </tr>
      <tr></tr>
    </table>
    <hr />
    <h5>Loại tin đăng</h5>
    <p>{{ post.type }}</p>
    <hr />
    <h5 >Thông tin mô tả</h5>
    <p>{{ post.description }}</p>
    <hr />
    <h5 >Đặc điểm bất động sản</h5>
    <table style="border:2px;" class="table-custom">
      <tbody>
        <tr>
        <td class="label-infor"> <i class="fa fa-size"></i> Diện tích</td>
        <td>{{ post.size + " m&sup2;" }}</td>
        <td class="label-infor">Mức giá</td>
        <td>{{ showPrice() }}</td>
        </tr>
        <tr>
          <td class="label-infor">Số tầng</td>
          <td> {{ showFloor() }} </td>
          <td class="label-infor">Số phòng ngủ</td>
          <td>{{ showBedroom() }}</td>
        </tr>
        <tr>
          <td class="label-infor">Số toilet</td>
          <td>{{ showToilet() }}</td>
          <td class="label-infor">Nội thất</td>
          <td>{{ showFurniture() }}</td>
        </tr>
        <tr>
          <td class="label-infor">Giấy tờ</td>
          <td>{{ showLegalDocuments() }}</td>
        </tr>
      </tbody>
    </table>
    <h5>Xem trên bản đồ</h5>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        id: 1,
        title:
          "CHUYÊN QUẢN LÝ CHO THUÊ CĂN HỘ ECO GREEN SG Q7, 2PN 70M2, GIÁ 12TR/TH, XEM NHÀ 24/7, LH 0932 139 ***",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/Moc4.jpg?alt=media&token=332cfb56-5143-4049-a63a-dd9002b70edc",
        price: 2134,
        unit: "VND",
        size: 100,
        city: "Ha Noi",
        description:
          "Cần bán gấp toà nhà văn phòng mặt phố Khuất Duy Tiến. Diện tích: 90m² xây 9 tầng, 8 tầng nổi, 1 tầng hầm.",
        district: "Hai Ba Trung",
        commune: "Dong Tam",
        street: "Giai Phong",
        bookmark: 0,
        legal_documents: "",
        furniture: "",
        floor: 3,
        toilet: 3,
        bedroom: null,
        type: "ban",
        date_submmit: "12:00:00 2023/17/07",
      },
    };
  },
  methods: {
    showPrice() {
      if (this.post.unit == "Thỏa Thuận") {
        return "Giá Thoả thuận";
      } else {
        if (this.post.type == "ban") {
          return this.post.price / 1000 >= 1
            ? (this.post.price / 1000).toFixed(2) + " tỷ " + this.post.unit
            : this.post.price + " triệu" + this.post.unit;
        } else {
          return this.post.price / 1000 >= 1
            ? (this.post.price / 1000).toFixed(2) +
                " tỷ " +
                this.post.unit +
                "/tháng"
            : this.post.price + " triệu" + this.post.unit + "/tháng";
        }
      }
    },
    showDate() {},
    showFloor() {
      if(this.post.floor){
        return this.post.floor + " tầng"
      } else {
        return "N/A"
      }
    },
    showBedroom() {
      if(this.post.bedroom){
        return this.post.bedroom + " phòng"
      } else {
        return "N/A"
      }
    },
    showToilet() {
      if(this.post.toilet){
        return this.post.toilet + " phòng"
      } else {
        return "N/A"
      }
    },
    showLegalDocuments(){
      if(this.post.legal_documents){
        return this.post.legal_documents
      } else {
        return "N/A"
      }
    },
    showFurniture() {
      if(this.post.furniture){
        return this.post.furniture
      } else {
        return "N/A"
      }
    },
  },
};
</script>

<style>
.post-detail {
  padding: 0 25% 0 25%;
}

.image-detail {
  width: 100%;
  margin: 20px 0 20px 0;
}

.icon-show {
  height: 24px;
  width: 24px;
}
.post-address {
  font-size: 18px;
  font-weight: 600;
}
.post-title {
  color: #0e58a0;
}

.notice-detail {
  font-size: 20px;
  font-weight: 600;
  margin: 5px 0 5px 0;
}

hr {
  color: rgb(254, 253, 253);
  margin: 2px 0 2px 0;
}

.table-custom{
  width: 100%;
  margin: 30px 0 40px 0;
}
.label-infor{
  font-weight: 600;
}
</style>