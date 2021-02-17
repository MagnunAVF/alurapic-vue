<template>
  <div class="body">
    <h1 class="title">{{ title }}</h1>

    <ul class="photos-list">
      <li class="photos-list-item" v-for="photo of photos">
        <div class="panel">
          <h2 class="panel-title">{{ photo.title }}</h2>
          <div class="panel-content">
            <img class="responsive-image" :src="photo.url" :alt="photo.title" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Alurapic",
      photos: []
    };
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

.panel {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
}

.panel .panel-title {
  text-align: center;
  border: solid 2px;
  background: lightblue;
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
}
</style>
