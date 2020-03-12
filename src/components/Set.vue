<template>
  <div class="set">
    <h1 class="title not-mainpage with-description">
      <ArrowLeft @click="goToMainpage" class="title-icon" />
      {{ set.title }}
      <ButtonIcon :iconType="'restore'" v-on:click.native.prevent.stop="restoreSet(set)" />
    </h1>
    <!-- <span class="set__description">{{ set.description }}</span> -->
    <div class="box">
      <SetItem v-for="setItem in set.set" :key="setItem.id" :setItem="setItem" />
    </div>
    <div class="footer">
      <router-link class="btn-std" :to="{name: 'set-add'}">Add new item</router-link>
    </div>
  </div>
</template>

<script>
import ArrowLeft from "vue-material-design-icons/ArrowLeft.vue";
import SetItem from "./includes/SetItem.vue";
import ButtonIcon from "./includes/ButtonIcon.vue";
export default {
  components: {
    SetItem,
    ArrowLeft,
    ButtonIcon
  },
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
    },
    goToMainpage: function() {
      this.$router.push({ name: "index" });
    },
    restoreSet: function(set) {
      this.$root.$emit("restoreSet", set);
    }
  },
  mounted: function() {
    this.init();
  }
};
</script>

<style lang="scss" scoped>
</style>
