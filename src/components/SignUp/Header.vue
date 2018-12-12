<template>
  <div id="header">
    <img id="logo" src="../../assets/Rollify_logo_Blue.png"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  components: {
  },
  created(){
  },
  computed: {
    store(){
      return this.$store.state.store.state;
    }
  },
  methods: {
    ...mapActions(
      'module', []
    ),
  }
}
</script>

<style scoped lang="scss">
 @import "@/styles/app.scss";
  #header{
    width: 100%;
    padding: 10px 20px; 
    background: #F3F3F3;
  }
  #logo{
    width: 100px;
  }

</style>
