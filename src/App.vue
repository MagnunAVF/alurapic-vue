<template>
  <div class="body">

    <nav-menu :routes="routes"></nav-menu>

    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { routes } from './routes';
import Menu from './components/shared/menu/Menu.vue';

export default {
  components: {
    'nav-menu': Menu
  },

  data() {
    return {
      routes
    }
  },
};
</script>

<style lang="scss">
.body {
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
  width: 96%;
}

.page-enter, .page-leave-active {
  opacity: 0
}

.page-enter-active, .page-leave-active {
  transition: opacity .4s
}
</style>
