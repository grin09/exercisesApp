<template>
  <div id="app">
    <router-view :sets="sets"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      sets: [
        {
          id: 1,
          title: "Set 1",
          exercises: [
            {
              id: 1,
              title: "exersice 1",
              description: "description 1"
            },
            {
              id: 2,
              title: "exersice 2",
              description: "description 2"
            }
          ]
        },
        {
          id: 2,
          title: "Set 2",
          exercises: [
            {
              id: 3,
              title: "exersice 3",
              description: "description 3"
            },
            {
              id: 4,
              title: "exersice 4",
              description: "description 4"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" src="@/assets/styles/common.scss">
</style>
