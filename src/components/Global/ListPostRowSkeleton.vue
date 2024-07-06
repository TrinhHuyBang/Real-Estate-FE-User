<template>
  <div class="skeleton-row-container">
    <el-skeleton style="border: 1px solid lightgrey; border-radius: 5px; max-width: 270px;" v-for="index in 4" :key="index" class="col-6 col-md-3 col-lg-3" :loading="loading" animated :count="1">
      <template slot="template">
        <el-skeleton-item
          variant="image"
          style="height: 240px;"
        />
        <div style="padding: 14px;">
            <el-skeleton-item variant="h3" style="width: 100%;" />
            <el-skeleton-item variant="h4" style="width: 90%;" />
            <el-skeleton-item variant="text" style="width: 50%;" />
            <el-skeleton-item variant="text" style="width: 80%;" />
        </div>
      </template>
    </el-skeleton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    };
  }
};
</script>

<style scoped>
.skeleton-row-container {
  display: flex;
  flex-wrap: wrap; /* This ensures that items will wrap to the next line if they don't fit */
  gap: 20px; /* This adds space between the items */
}
</style>