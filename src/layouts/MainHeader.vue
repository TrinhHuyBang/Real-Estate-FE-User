<template>
  <header class="header">
    <div class="logo">
      <a href="/"><img
          src="https://firebasestorage.googleapis.com/v0/b/tensile-nebula-390307.appspot.com/o/Logo.png?alt=media&token=9b017c07-2675-4894-b819-7e563e371299"
          alt="Logo" /></a>
    </div>
    <nav class="navigation col-sm-9">
      <ul>
        <div class="dropdown">
          <a href="/" class="dropdown-trigger">Nhà đất bán</a>
          <div class="dropdown-menu">
            <b-dropdown-item>Bán căn hộ chung cư</b-dropdown-item>
            <b-dropdown-item>Bán nhà riêng</b-dropdown-item>
            <b-dropdown-item>Bán nhà biệt thự liền kề</b-dropdown-item>
            <b-dropdown-item>Bán nhà mặt phố</b-dropdown-item>
            <b-dropdown-item>Bán nhà phố thương mại</b-dropdown-item>
            <b-dropdown-item>Bán đất nền dự án</b-dropdown-item>
            <b-dropdown-item>Bán đất</b-dropdown-item>
            <b-dropdown-item>Bán trang trại, khu nghỉ dưỡng</b-dropdown-item>
            <b-dropdown-item>Bán condotel</b-dropdown-item>
            <b-dropdown-item>Bán kho, nhà xưởng</b-dropdown-item>
            <b-dropdown-item>Bán loại bất động sản khác</b-dropdown-item>
          </div>
        </div>
        <div class="dropdown">
          <a href="/" class="dropdown-trigger">Nhà đất cho thuê</a>
          <div class="dropdown-menu">
            <b-dropdown-item>Cho thuê căn hộ chung cư</b-dropdown-item>
            <b-dropdown-item>Cho thuê nhà riêng</b-dropdown-item>
            <b-dropdown-item>Cho thuê nhà biệt thự, liền kề</b-dropdown-item>
            <b-dropdown-item>Cho thuê nhà mặt phố</b-dropdown-item>
            <b-dropdown-item>Cho thuê nhà thương mại</b-dropdown-item>
            <b-dropdown-item>Cho thuê nhà trọ, phòng trọ</b-dropdown-item>
            <b-dropdown-item>Cho thuê văn phòng</b-dropdown-item>
            <b-dropdown-item>Cho thuê, sang nhượng, cửa hàng, ki ốt</b-dropdown-item>
            <b-dropdown-item>Cho thuê kho, nhà xưởng, đất</b-dropdown-item>
            <b-dropdown-item>Cho thuê loại bất động sản khác</b-dropdown-item>
          </div>
        </div>
        <div class="dropdown">
          <a href="/" class="dropdown-trigger">Dự án</a>
          <div class="dropdown-menu">
            <b-dropdown-item>Căn hộ chung cư</b-dropdown-item>
            <b-dropdown-item>Cao ốc văn phòng</b-dropdown-item>
            <b-dropdown-item>Trung tâm thương mại</b-dropdown-item>
            <b-dropdown-item>Khi đô thị mới</b-dropdown-item>
            <b-dropdown-item>Khu phức hợp</b-dropdown-item>
            <b-dropdown-item>Nhà ở xã hội</b-dropdown-item>
            <b-dropdown-item>Khu nghỉ dưỡng, Sinh thái</b-dropdown-item>
            <b-dropdown-item>Khu công nghiệp</b-dropdown-item>
            <b-dropdown-item>Biệt thự, liền kề</b-dropdown-item>
            <b-dropdown-item>Shophouse</b-dropdown-item>
            <b-dropdown-item>Nhà mặt phố</b-dropdown-item>
            <b-dropdown-item>Dự án khác</b-dropdown-item>
          </div>
        </div>
        <li><a href="/about">Tin tức</a></li>
        <div class="dropdown">
          <a href="/" class="dropdown-trigger">Danh bạ</a>
          <div class="dropdown-menu">
            <b-dropdown-item>Doanh nghiệp</b-dropdown-item>
            <b-dropdown-item>Nhà môi giới</b-dropdown-item>
          </div>
        </div>
      </ul>
    </nav>
    <div class="auth">
      <button class="btn" style=" font-weight: bold;" >Đăng nhập</button>
      <button class="btn" style="font-weight: bold;" >Đăng ký</button>
    </div>
  </header>
</template>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
}

.logo img {
  width: 120%;
  height: 70px;
  vertical-align: middle;
}

.navigation ul {
  list-style: none;
  display: flex;
}

.navigation li {
  margin-right: 20px;
  vertical-align: middle;
}

.navigation a {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.navigation a:hover {
  text-decoration: underline;
  text-decoration-color: red;
  text-decoration-thickness: 2px;
}

.auth .btn {
  margin-right: 30px;
  vertical-align: middle;
  background: #b3acac;
}

.dropdown {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin-right: 20px;
}

.dropdown .dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  padding: 10px;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown .dropdown-trigger {
  color: #333;
}

.dropdown .dropdown-menu a {
  display: block;
  padding: 5px;
  color: #333;
  text-decoration: none;
}

.dropdown .dropdown-menu a:hover {
  background-color: #f0f0f0;
}

</style>