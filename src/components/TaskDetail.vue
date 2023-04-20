<template>
    <div id="detail">
        <h1>{{ todo }}</h1>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            todo: this.$route.params.name,
        }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>