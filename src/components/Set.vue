<template>
  <div class="set">
    <h1 class="title with-description">
      <ArrowLeft @click="goToMainpage" class="title-icon" />{{ set.title }}
    </h1>
    <span class="set__description">{{ set.description }}</span>
    <div class="box">
      <ExerciseBox
        v-for="exercise in set.exercises"
        :key="exercise.id"
        :exercise="exercise"
      />
    </div>
  </div>
</template>

<script>
import ArrowLeft from "vue-material-design-icons/ArrowLeft.vue";
import ExerciseBox from "./includes/ExerciseBox.vue";
export default {
  components: {
    ExerciseBox,
    ArrowLeft
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
    }
  },
  mounted: function() {
    this.init();
  }
};
</script>

<style lang="scss" scoped>
.set {
  &__description {
    display: block;
    font-size: 14px;
    color: #4a4a4a;
    margin: 0 0 15px;
  }
  .title {
    &-icon {
      width: 36px;
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
