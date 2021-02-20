import Vue from 'vue';

Vue.directive('transform', {
  bind(el, binding, vnode) {
    // deg origin reference
    let current = 0;

    el.addEventListener('dblclick', function() {
      let increment = 90;
      let animate = false;

      if (binding.value) {
        increment = binding.value.increment;
        animate = binding.value.animate;
      }

      current += increment;
      el.style.transform = `rotate(${current}deg)`;

      if (animate) el.style.transition = 'transform 0.5s';
    });
  }
});
