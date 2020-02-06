<template>
  <div class="set">
    <h1 class="title with-description">
      <ArrowLeft @click="goToMainpage" class="title-icon" />{{ set.title }}
      <ButtonIcon
        :iconType="'restore'"
        v-on:click.native.prevent.stop="restoreSet(set)"
      />
    </h1>
    <!-- <span class="set__description">{{ set.description }}</span> -->
    <div class="box">
      <SetItem
        v-for="setItem in set.set"
        :key="setItem.id"
        :setItem="setItem"
      />
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
.set {
  // &__description {
  //   display: block;
  //   font-size: 14px;
  //   color: #4a4a4a;
  //   margin: 0 0 15px;
  // }
  .title {
    margin: 0 0 15px;
    &-icon {
      width: 36px;
      min-width: 36px;
      height: 36px;
      font-size: 26px;
      & > svg {
        bottom: 50%;
        transform: translateY(50%);
      }
    }
  }
}
</style>
