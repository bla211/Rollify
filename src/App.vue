<template>
  <div id="app">
    <img id="logo" src="../src/assets/Rollify_logo_Blue.png"/>
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
  #app{
    display: flex;
    flex-flow:row wrap;
    justify-content: center;
  }
  #logo{
    width: 100px;
    height: 37px;
    margin: 20px 0 0 20px;
  }
</style>
