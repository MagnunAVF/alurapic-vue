export default {
  bind(el, binding, vnode) {
    // deg origin reference
    let current = 0;

    el.addEventListener('dblclick', function() {
      let effect;
      let increment = binding.value || 90;

      if (!binding.arg || binding.arg === 'rotate') {
        if (binding.modifiers.reverse) {
          current -= increment;
        } else {
          current += increment;
        }

        effect = `rotate(${current}deg)`;
      } else if (binding.arg === 'scale') {
        effect = `scale(${increment})`;
      }

      el.style.transform = effect;

      if (binding.modifiers.animate) el.style.transition = 'transform 0.5s';
    });
  }
}
