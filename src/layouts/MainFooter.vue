<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h5>Hệ thống quản lý và quảng bá BĐS</h5>
          <p>Dữ liệu trên toàn bộ hệ thống có thể gồm các thông tin không đúng sự thật chỉ nhằm để thử nghiệm và phục vụ cho đồ án, ngoài ra không có mục đích nào khác. Một số dữ liệu được tham khảo từ <a style="color: red;" href="https://batdongsan.com.vn/">batdongsan.com.vn</a></p>
        </div>
        <div class="col-md-3">
          <h5>Truy cập nhanh</h5>
          <ul class="list-unstyled">
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/nha-dat-ban">Nhà đất bán</a></li>
            <li><a href="/nha-dat-cho-thue">Nhà đất thuê</a></li>
            <li><a href="/du-an">Dự án</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h5>Liên hệ</h5>
          <ul class="list-unstyled">
            <li>Trịnh Huy Bằng</li>
            <li>huybang.trinh@gmail.com</li>
            <li>0973733651</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.footer {
  background-color: #f2f2f2;
  padding: 20px 0;
  /* margin-top: 20px; */
  text-align: center;
  /* width: 100%; */
}

.footer h5 {    
  font-weight: bold;
}

.footer ul {
  padding: 0;
  list-style: none;
  margin-top: 10px;
}

.footer ul li {
  margin-bottom: 5px;
}

.footer a {
  color: #333;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
</style>