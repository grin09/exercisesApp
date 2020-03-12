<template>
  <div id="app">
    <router-view :sets="sets"></router-view>
  </div>
</template>

<script>
import sets from "./data/defaultData";
export default {
  name: "app",
  data: function() {
    return {
      sets: []
    };
  },
  methods: {
    init: function() {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js").then(function() {
          console.log("Service Worker Registered");
        });
      }
      let userdata = localStorage.getItem("userdata");
      if (userdata) {
        this.sets = JSON.parse(userdata);
      } else {
        this.sets = sets;
      }
    },
    save: function() {
      localStorage.setItem("userdata", JSON.stringify(this.sets));
    }
  },
  mounted: function() {
    this.init();
    this.$root.$on("remove", set_id => {
      this.sets = this.sets.filter(set => set.id != set_id);
      this.save();
    });
    this.$root.$on("removeSetItem", set => {
      this.sets.forEach(_set => {
        if (_set.id == set.external_id) {
          _set.set = _set.set.filter(setItem => setItem.id != set.internal_id);
        }
      });
      this.save();
    });
    this.$root.$on("restoreSet", set => {
      this.sets = this.sets.map(_set => {
        if (_set.id == set.id) {
          _set.set = _set.set.map(setItem => {
            setItem.is_checked = false;
            return setItem;
          });
        }
        return _set;
      });
      this.save();
    });
    this.$root.$on("saveList", ({ title, description }) => {
      let maxId = 0;
      this.sets.forEach(set => {
        if (set.id > maxId) maxId = set.id;
      });
      this.sets.push({
        id: ++maxId,
        title,
        description,
        set: []
      });
      this.save();
    });
    this.$root.$on("saveItem", ({ title, setid }) => {
      this.sets.forEach(set => {
        if (set.id == setid) {
          let maxId = 0;
          set.set.forEach(item => {
            if (item.id > maxId) maxId = item.id;
          });
          set.set.push({
            id: ++maxId,
            title,
            description: "",
            is_checked: false
          });
        }
      });
      this.save();
    });
  }
};
</script>

<style lang="scss" src="@/assets/styles/common.scss"></style>
