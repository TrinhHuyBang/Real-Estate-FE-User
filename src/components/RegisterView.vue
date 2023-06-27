<template>
  <div>
    <b-form @submit="handleSubmit">
      <b-form-group id="name-group" label="Họ và Tên" label-for="name">
        <b-form-input v-model="name" id="name" required></b-form-input>
      </b-form-group>

      <b-form-group id="email-group" label="Email" label-for="email">
        <b-form-input v-model="email" id="email" type="email" required></b-form-input>
      </b-form-group>

      <b-form-group id="password-group" label="Mật khẩu" label-for="password">
        <b-form-input v-model="password" id="password" type="password" required></b-form-input>
      </b-form-group>

      <b-form-group id="confirm-password-group" label="Xác nhận mật khẩu" label-for="confirm-password">
        <b-form-input v-model="confirmPassword" id="confirm-password" type="password" required></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Đăng ký</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    handleSubmit() {
      // Xử lý logic đăng ký tại đây
    }
  }
}
</script>