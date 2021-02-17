<template>
  <div>
    <h1>{{ title }}</h1>

    <ul>
      <li v-for="photo of photos">
        <img :src="photo.url" :alt="photo.title" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Alurapic",
      photos: [
        {
          url:
            "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwV4kVzT5McBdGSgqlVeRzubrNH_mOrrkKseDOGFURq20HmsrelEfMU7It",
          title: "Dog"
        },
        {
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOhmlmzV4-Sifx5BIc2SXeA-1CtZJf8jb8V_vPZyKbXIQJKU-rkxGO6OM",
          title: "Cat"
        }
      ]
    };
  }
};
</script>

<style lang="scss"></style>
