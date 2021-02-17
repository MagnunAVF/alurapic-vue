<template>
  <div class="body">
    <h1 class="title">{{ title }}</h1>

    <input
      type="search"
      class="filter"
      v-on:input="filter = $event.target.value"
      placeholder="Filter by photo title"
    />

    <ul class="photos-list">
      <li class="photos-list-item" v-for="photo of photosWithFilter">
        <panel :title="photo.title">
          <img
            slot="image"
            class="responsive-image"
            :src="photo.url"
            :alt="photo.title"
          />
        </panel>
      </li>
    </ul>
  </div>
</template>

<script>
import Panel from "./components/shared/panel/Panel.vue";

export default {
  components: {
    panel: Panel
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
      if(this.filter) {
        let regex = new RegExp(this.filter.trim(), 'i');
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

.responsive-image {
  width: 100%;
}

.filter {
  display: block;
  width: 100%;
}
</style>
