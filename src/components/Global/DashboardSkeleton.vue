<template>
  <div class="skeleton-row-container">
    <el-skeleton style="border: 1px solid lightgrey; border-radius: 5px; max-width: 370px;" v-for="index in 6" :key="index" class="col-4 col-md-4 col-lg-4" :loading="loading" animated :count="1">
        <template slot="template">
            <el-skeleton-item variant="p" style="width: 100%; height: 150px;" />
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