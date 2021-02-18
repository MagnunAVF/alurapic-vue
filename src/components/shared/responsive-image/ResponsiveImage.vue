<template>
  <img class="responsive-image" :src="url" :alt="title" />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.responsive-image {
  width: 100%;
}
</style>
