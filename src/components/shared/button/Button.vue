<template>
  <button class="button" :class="buttonStyle" @click="executeAction()" :type="type">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    confirmation: {
      type: Boolean,
      required: false
    },
    customStyle: {
      type: String,
      required: false
    }
  },

  methods: {
    executeAction() {
      if(this.confirmation) {
        if (confirm("Confirm action ?")) {
          this.$emit('activatedButton');
        }
        return;
      }

      this.$emit('activatedButton');
    }
  },

  computed: {
    buttonStyle() {
      if (this.customStyle === 'default' || !this.customStyle)
        return 'default-button';
      if (this.customStyle === 'danger') return 'danger-button';
    }
  }
};
</script>

<style>
.button {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}

.danger-button {
  background: firebrick;
  color: white;
}

.default-button {
  background: darkcyan;
  color: white;
}
</style>
