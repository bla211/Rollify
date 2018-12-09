<template>
  <div id="signOff">
    <ProgressBar progress="3"/>
    <h1>Sign and start fund transfer.</h1>
    <div id="signOff__sign">
      <div id="signOff__sign--signature">
        <div id="docusign">
          Sign Here...
        </div>
        <label>DocuSign</label> 
      </div>
      <div id="signOff__sign--disclaimers">
        <div class="disclaimer-wrap">
          <input type="checkbox" :checked="true"/>
          <label>Terms and Conditions agreement</label>
        </div>
        <div class="disclaimer-wrap">
          <input type="checkbox" :checked="true"/>
          <label>Agree to grant Power of Attorney to Rollify</label>
        </div>
        <div class="disclaimer-wrap">
          <input type="checkbox" :checked="true"/>
          <label>Send me updates when funds are transferred</label>
        </div>
      </div>     
      <router-link to="success"><button>Complete Transfer</button></router-link>
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

 #signOff{
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

#signOff__sign{
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-flow:row wrap;
  justify-content: center; 
  font-family: $font-family;
}
#signOff__sign--signature{
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-flow:row wrap;
  justify-content: flex-end; 
  #docusign{
    width: 100%;
    border: 2px solid $grey-4;
    border-radius: 4px;
    padding: 30px 20px;
    font-size: 2.4rem;
    color: $grey-4;
    font-weight: 400;
    font-family: $font-family;
    cursor: pointer;
  }
  label{
    font-size: 1.4rem;
    color: $grey-4;
    padding: 4px 0;
  }
}
#signOff__sign--disclaimers{
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-flow:row wrap;
  justify-content: flex-start;
  margin: 20px 0 0 0; 
  .disclaimer-wrap{
    width: 100%;
    display: flex;
    flex-flow:row wrap;
    justify-content: flex-start;
    margin: 0 0 10px 0;
    label{
      font-size: 1.5rem;
      margin: 0 0 0 10px;
    }
  }
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
  background: #20B11D;
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
