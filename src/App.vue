<template>
  <div class="body">
    <h1 class="title">{{ title }}</h1>

    <input
      type="search"
      class="filter"
      @input="filter = $event.target.value"
      placeholder="Filter by photo title"
    />

    <ul class="photos-list">
      <li class="photos-list-item" v-for="photo of photosWithFilter">
        <panel :title="photo.title">
          <responsive-image :url="photo.url" :title="photo.title"></responsive-image>
        </panel>
      </li>
    </ul>
  </div>
</template>

<script>
import Panel from "./components/shared/panel/Panel.vue";
import ResponsiveImage from "./components/shared/responsive-image/ResponsiveImage.vue";

export default {
  components: {
    panel: Panel,
    "responsive-image": ResponsiveImage
  },

  data() {
    return {
      title: "Alurapic",
      photos: [],
      filter: ""
    };
  },

  computed: {
    photosWithFilter() {
      if (this.filter) {
        let regex = new RegExp(this.filter.trim(), "i");
        return this.photos.filter(photo => regex.test(photo.title));
      } else {
        return this.photos;
      }
    }
  },

  created() {
    this.$http
      .get("http://localhost:3000/v1/photos")
      .then(res => res.json())
      .then(
        photos => (this.photos = photos),
        err => console.log(err)
      );
  }
};
</script>

<style lang="scss">
.title {
  text-align: center;
}

.body {
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
  width: 96%;
}

.photos-list {
  list-style: none;
}

.photos-list .photos-list-item {
  display: inline-block;
}

.filter {
  display: block;
  width: 100%;
}
</style>
