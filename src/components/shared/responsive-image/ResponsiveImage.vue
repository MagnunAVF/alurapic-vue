<template>
  <img class="responsive-image" :src="url" :alt="title" />
</template>

<script>
export default {
  props: ["url", "title"]
};
</script>

<style scoped lang="scss">
.responsive-image {
  width: 100%;
}
</style>
