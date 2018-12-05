<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Header from '@/components/SignUp/Header.vue';

export default {
  components: {
    Header
  },
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
</style>
