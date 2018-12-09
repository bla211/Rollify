<template>
  <div id="dashboard">
    <router-link to="dashboard"><button>Rollover Another Fund</button></router-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import ProgressBar from '@/components/SignUp/ProgressBar.vue';
export default {
  components: {
    ProgressBar
  },
  created(){
  },
  computed: {
    store(){
      return this.$store.state.store.state;
    },
    planSponsor: {
      get(){
        return this.store.planInfo.sponsor
      },
      set(value){
        this.handlePlanSponsor(value);
      }
    },
    planName: {
      get(){
        return this.store.planInfo.name
      },
      set(value){
        this.handlePlanName(value);
      }
    }
  },
  methods: {
    ...mapActions(
      'module', ['handlePlanSponsor', 'handlePlanName']
    ),
  }
}
</script>

<style scoped lang="scss">
 @import "@/styles/app.scss";

 #dashboard{
  display: flex;
  flex-flow:row wrap;
  justify-content: center;
  align-content: flex-start;
  width: 100%;
  padding: 0 0 100px 0;
}
a{
  width: 100%;
  display: flex;
  justify-content: center;
  text-decoration: none;
  margin: 80px 0 0 0;
}
button{
  @include appearance(none);
  border: none;
  background: $rollify-blue;
  color: #FFFFFF;
  font-family: $font-family;
  font-size: 1.3rem;
  padding: 16px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  border-radius: 4px;
  @include transition(opacity .1s ease-in-out);
  &:hover{
    opacity: .75;
  }
}

</style>
