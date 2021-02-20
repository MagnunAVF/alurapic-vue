<template>
  <div>
    <h1 class="centered">Photo Register</h1>
    <h2 class="centered"></h2>

    <form>
      <div class="control">
        <label for="title">Title</label>
        <input id="title" autocomplete="off" />
      </div>

      <div class="control">
        <label for="url">URL</label>
        <input id="url" autocomplete="off" />
        <responsive-image title="" url=""/>
      </div>

      <div class="control">
        <label for="description">Description</label>
        <textarea id="description" autocomplete="off"></textarea>
      </div>

      <div class="centered">
        <custom-button label="Save" type="submit"/>
        <router-link to="/"
          ><custom-button label="return" type="button"
        /></router-link>
      </div>
    </form>
  </div>
</template>

<script>
import ResponsiveImage from "../shared/responsive-image/ResponsiveImage.vue";
import Button from "../shared/button/Button.vue";

export default {
  components: {
    "responsive-image": ResponsiveImage,
    "custom-button": Button
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
