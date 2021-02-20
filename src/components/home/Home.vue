<template>
  <div>
    <h1 class="centered">{{ title }}</h1>

    <p v-show="message" class="centered">{{ message }}</p>

    <input
      type="search"
      class="filter"
      @input="filter = $event.target.value"
      placeholder="Filter by photo title"
    />

    <ul class="photos-list">
      <li class="photos-list-item" v-for="photo of photosWithFilter">
        <panel :title="photo.title">
          <responsive-image
            v-transform:rotate.animate="45"
            :url="photo.url"
            :title="photo.title"
          />
          <custom-button
            type="button"
            label="REMOVE"
            @activatedButton="remove(photo)"
            :confirmation="true"
            customStyle="danger"
          />
        </panel>
      </li>
    </ul>
  </div>
</template>

<script>
import Panel from "../shared/panel/Panel.vue";
import ResponsiveImage from "../shared/responsive-image/ResponsiveImage.vue";
import Button from "../shared/button/Button.vue";
import Transform from '../../directives/Transform';
import PhotoService from '../../domain/photo/PhotoService';

export default {
  components: {
    panel: Panel,
    "responsive-image": ResponsiveImage,
    "custom-button": Button
  },

  directives: {
    'transform': Transform
  },

  data() {
    return {
      title: "Alurapic",
      photos: [],
      filter: "",
      message: "",
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

  methods: {
    remove(photo) {
      this.service.delete(photo._id)
        .then(
          () => {
            // remove deleted photo from photos list
            let index = this.photos.indexOf(photo);
            this.photos.splice(index, 1);
            this.message = `${photo.title} photo deleted!`;
          },
          err => {
            console.log(err);
            this.message = `Couldn't delete ${photo.title} photo!`;
          }
        );
    }
  },

  // load photos after component create
  created() {
    this.service = new PhotoService(this.$resource);

    this.service.list()
      .then(
        photos => (this.photos = photos),
        err => console.log(err)
      );
  }
};
</script>

<style lang="scss">
.centered {
  text-align: center;
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
