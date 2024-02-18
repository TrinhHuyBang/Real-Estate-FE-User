<template>
  <div class="manage-list-bookmark-post">
    <div class="manage-post-nav">
      <admin-nav> </admin-nav>
    </div>
    <div class="container">
        <h3>Dashboard</h3>
    </div>
  </div>
</template>

<script>
import AdminNav from "@/layouts/Admin/AdminNav.vue";
export default {
    
    components: {
        "admin-nav": AdminNav,
    },

    methods: {
        
    },
}
</script>

<style scoped>
.manage-list-bookmark-post {
  display: flex;
  flex-direction: row;
}

.container {
  margin: 30px 0 0 30px;
}
</style>