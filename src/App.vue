<template>
  <div class="body">
    <nav>
      <ul>
          <li v-for="route in routes">
            <router-link :to="route.path ? route.path : '/'">
              {{ route.title }}
            </router-link>
          </li>
      </ul>
    </nav>

    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { routes } from './routes';

export default {
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
