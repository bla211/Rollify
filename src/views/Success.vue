<template>
  <div id="success">
    <ProgressBar progress="4"/>
    <div id="big-check">
      <div id="check">
        <span>&#10003;</span>
      </div>
    </div>
    <h1>Success!<br>Your fund transfer has started.<br>Login or subscribe to our notifications for status updates.</h1>
    <router-link to="dashboard"><button>Dashboard</button></router-link>
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

 #success{
  display: flex;
  flex-flow:row wrap;
  justify-content: center;
  align-content: flex-start;
  width: 100%;
  padding: 0 0 100px 0;
  #big-check{
    display: flex;
    flex-flow:row wrap;
    justify-content: center;
    width: 100%;
    margin: 60px 0 0 0;
    #check{
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      width: 130px;
      height: 130px;
      background: $rollify-blue;
      color: white;
      font-size: 8rem;
    }
  }
  h1{
    flex-basis: 100%;
    margin-top: 40px;
    text-align: center;
    font-family: Tahoma, sans-serif;
    font-size: 2.6rem;
    font-weight: 100;
    color: #888888;
  }
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
