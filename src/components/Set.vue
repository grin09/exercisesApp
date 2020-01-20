<template>
  <div class="set">{{ set.title }}</div>
</template>

<script>
export default {
  props: {
    sets: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      set: {}
    };
  },
  methods: {
    init: function() {
      this.set = this.sets.find(set => {
        return set.id == this.$route.params.id;
      });
    }
  },
  mounted: function() {
    this.init();
  }
};
</script>

<style lang="scss" scoped>
</style>