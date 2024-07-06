<template>
  <div class="skeleton-column-container">
    <el-skeleton style="border: 1px solid lightgrey; border-radius: 5px; width: 100%" v-for="index in 4" :key="index" class="col-6 col-md-3 col-lg-3" animated :count="1">
      <template slot="template">
        <div style="display: flex; flex-diretion: row;">
            <div>
                <el-skeleton-item
                    variant="image"
                    style="height: 185px; width: 232px;"
                />
            </div>
            <div style="padding: 14px;">
                <el-skeleton-item variant="h3" style="width: 90%;" />
                <el-skeleton-item variant="text" style="width: 90%;" />
                <el-skeleton-item variant="text" style="width: 90%;" />
                <el-skeleton-item variant="text" style="width: 90%;" />
            </div>
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
.skeleton-column-container {
  display: flex;
  flex-wrap: wrap; /* This ensures that items will wrap to the next line if they don't fit */
  gap: 20px; /* This adds space between the items */
}
</style>