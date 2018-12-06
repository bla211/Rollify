<template>
  <div id="progressBar">
    <div id="progressBar__bar">
      <router-link to="origin-plan"><div :class="['progressBar__bar--dot', (progress > -1) ? 'active' : '']"></div></router-link>
      <div :class="['progressBar__bar--line', (progress > 0) ? 'active' : '']"></div>
      <div :class="['progressBar__bar--dot', (progress > 0) ? 'active' : '']"></div>
      <div :class="['progressBar__bar--line', (progress > 1) ? 'active' : '']"></div>
      <div :class="['progressBar__bar--dot', (progress > 1) ? 'active' : '']"></div>
      <div :class="['progressBar__bar--line', (progress > 2) ? 'active' : '']"></div>
      <div :class="['progressBar__bar--dot', (progress > 2) ? 'active' : '']"></div>
      <div :class="['progressBar__bar--line', (progress > 3) ? 'active' : '']"></div>
      <div :class="['progressBar__bar--dot', (progress > 3) ? 'active' : '']"></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    progress: Number,
  },
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
  #progressBar{
    width: calc(100% - 40px);
    padding: 20px;
  }
  #progressBar__bar{
    width: 100%;
    display: flex;
  }
  .progressBar__bar--dot{
    height: 18px;
    width: 18px;
    background: #E5E5E8;
    border-radius: 100%;
  }
  .progressBar__bar--line{  
    height: 6px;
    background: #E5E5E8;
    width: calc(25% - 22.5px);
    margin: 6px 0 0 0;
  }
  .active{
    background: $rollify-blue;
  }

</style>
