<template>
  <div>
    <h1>{{ title }}</h1>
    <img :src="photo.url" :alt="photo.title">
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Alurapic',
      photo: {
        url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwV4kVzT5McBdGSgqlVeRzubrNH_mOrrkKseDOGFURq20HmsrelEfMU7It',
        title: 'Dog',
      }
    };
  }
};
</script>

<style lang="scss"></style>
