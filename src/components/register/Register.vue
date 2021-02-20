<template>
  <div>
    <h1 class="centered">Photo Register</h1>
    <h2 class="centered">{{ photo.title }}</h2>

    <p v-show="message" class="centered">{{ message }}</p>

    <form @submit.prevent="save()">
      <div class="control">
        <label for="title">Title</label>
        <input
          id="title"
          autocomplete="off"
          v-model.lazy="photo.title"
        />
      </div>

      <div class="control">
        <label for="url">URL</label>
        <input
          id="url"
          autocomplete="off"
          v-model.lazy="photo.url"
        />
        <responsive-image v-show="photo.url" :title="photo.title" :url="photo.url" />
      </div>

      <div class="control">
        <label for="description">Description</label>
        <textarea
          id="description"
          autocomplete="off"
          v-model="photo.description"
        ></textarea>
      </div>

      <div class="centered">
        <custom-button label="Save" type="submit" />
        <router-link :to="{ name: 'home' }"
          ><custom-button label="return" type="button"
        /></router-link>
      </div>
    </form>
  </div>
</template>

<script>
import ResponsiveImage from "../shared/responsive-image/ResponsiveImage.vue";
import Button from "../shared/button/Button.vue";
import Photo from "../../domain/photo/Photo";
import PhotoService from "../../domain/photo/PhotoService";

export default {
  components: {
    "responsive-image": ResponsiveImage,
    "custom-button": Button
  },

  data() {
    return {
      photo: new Photo(),
      message: "",
    }
  },

  methods: {
    save() {
      this.service.register(this.photo)
        .then(
          () => {
            this.photo = new Photo();
            this.message = "Image added with success!";
          },
          err => {
            console.log(err);
            this.message = "Couldn't add photo!"
          }
        );
    }
  },

  created() {
    this.service = new PhotoService(this.$resource);
  }
};
</script>

<style scoped>
.centered {
  text-align: center;
}
.control {
  font-size: 1.2em;
  margin-bottom: 20px;
}
.control label {
  display: block;
  font-weight: bold;
}

.control label + input,
.control textarea {
  width: 100%;
  font-size: inherit;
  border-radius: 5px;
}

.centered {
  text-align: center;
}
</style>
