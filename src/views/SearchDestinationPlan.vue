<template>
  <div id="destinationPlan">
    <ProgressBar progress="1"/>
    <h1>Select the provider where you want to rollover your funds.</h1>
    <div id="destinationPlan__search">
      <div id="destinationPlan__search--commonProviders">
        <div id="selectProvider">        
          <!--<h2>Common Providers</h2>-->
          <div class="tile"></div>
          <div class="tile"></div>
          <div class="tile"></div>
          <div class="tile"></div>
          <div class="tile"></div>
          <div class="tile"></div>
          <div class="tile"></div>
          <div class="tile"></div>
        </div>
      </div>
      <span class="or">or</span>
      <div id="destinationPlan__search--searchProviders">
        <div class="inputLabelWrapper fullWidth">
          <input type="text" placeholder="Search Provider..."/>
        </div>      
        <router-link to="confirm-destination-plan"><button>Confirm Destination Plan</button></router-link>
      </div>
    </div>
    <div id="contact-support">
      <img id="logo" src="../assets/support-logo.png"/>
    </div>
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

 #destinationPlan{
  display: flex;
  flex-flow:row wrap;
  justify-content: center;
  align-content: flex-start;
  width: 100%;
  padding: 0 0 100px 0;
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

#destinationPlan__search{
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-flow:row wrap;
  justify-content: center; 
  font-family: $font-family;
}
#destinationPlan__search--commonProviders{
  h2{
    width: 100%;
    margin-bottom: 10px;
    font-family: $font-family;
    color: $grey-5;
    font-size: 1.8rem;
    text-align: center;
    font-weight: 400;
  }
  width: 100%;
  max-width: 1100px;
  padding: 0 20px;
  display: flex;
  flex-flow:row wrap;
  justify-content: center;
  #selectProvider{
    width: 100%;
    padding: 20px 20px 0 20px;
    background: $grey-2;
    display: flex;
    flex-flow:row wrap;
    justify-content: space-between; 
    border-radius: 4px;
    .tile{
      width: calc(25% - 15px);
      height: 100px;
      background: #FFFFFF;
      margin-bottom: 20px;
      cursor: pointer;
      opacity: 1;
      border-radius: 4px;
      @include transition(opacity .1s ease-in-out);
      &:hover{
        opacity: .75;
      }
    }
  }
}
#destinationPlan__search--searchProviders{
  width: 100%;
  max-width: 1100px;
  padding: 0 20px;
  display: flex;
  flex-flow:row wrap;
  justify-content: center;
  .inputLabelWrapper{
    width: 100%;
    max-width: 420px;
    position: relative;
    margin: 0 0 40px 0;
    input{
      @include appearance(none);
      border: none;
      border-bottom: 1px solid $rollify-blue;
      padding: 10px 0 6px 0;
      outline: none;
      font-family: $font-family;
      background: transparent;
      width: 100%;
      font-size: 1.4rem;
      color: $grey-9;
      @include placeholder{
        @include appearance(none);
        font-family: $font-family;
        font-size: 1.4rem;
        font-weight: 500;
        color: $grey-9;
        opacity: .5;
      }
    }
  }  
}
.or{
  font-size: 2.2rem;
  font-family: $font-family;
  color: $grey-6;
  padding: 20px;
  width: 100%;
  text-align: center;
}

a{
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  padding: 10px 20px;
  background: $grey-0;
}
button{
  @include appearance(none);
  border: none;
  background: $rollify-blue;;
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
