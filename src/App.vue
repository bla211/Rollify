<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    store(){
      return this.$store.state.store.state;
    },
  },
  mounted(){
  },
  methods: {
    ...mapActions(
      'module', []
    ),
  }
}
</script>

<style lang="scss">
  @import "@/styles/app.scss";
</style>
