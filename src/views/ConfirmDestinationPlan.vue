<template>
  <div id="originPlan">
    <ProgressBar progress="2"/>
    <h1>Please confirm destination plan details.</h1>
    <div id="originPlan__form">
      <div id="form">
        <div class="multipleInputWrap">
          <div class="inputLabelWrapper thirdWidth">
            <label v-if="store.destinationPlanInfo.sponsor.length">Plan Sponsor</label>
            <input type="text" v-model="destinationPlanSponsor" placeholder="Plan Sponsor"/>
          </div>
          <div class="inputLabelWrapper twoThirdsWidth">
            <label v-if="store.destinationPlanInfo.name.length">Plan Name</label>           
            <input type="text" v-model="destinationPlanName" placeholder="Plan Name"/>
          </div>
          <div class="inputLabelWrapper thirdWidth">
            <label v-if="store.destinationPlanInfo.accountNumber.length">Plan Account No.</label>           
            <input type="text" v-model="destinationPlanAccountNumber" placeholder="Plan Account No."/>
          </div>
          <div class="inputLabelWrapper thirdWidth">
            <label v-if="store.destinationPlanInfo.affiliateNumber.length">Affiliate No.</label>           
            <input type="text" v-model="destinationPlanAffiliateNumber" placeholder="Affiliate No."/>
          </div>
          <div class="inputLabelWrapper thirdWidth">
            <label v-if="store.destinationPlanInfo.division.length">Division</label>           
            <input type="text" v-model="destinationPlanDivision" placeholder="Division"/>
          </div>       
        </div>
          
        <router-link to="sign-off"><button>Document Signoff</button></router-link>
      </div>
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
    destinationPlanSponsor: {
      get(){
        return this.store.destinationPlanInfo.sponsor
      },
      set(value){
        this.handleDestinationPlanSponsor(value);
      }
    },
    destinationPlanName: {
      get(){
        return this.store.destinationPlanInfo.name
      },
      set(value){
        this.handleDestinationPlanName(value);
      }
    },
    destinationPlanAccountNumber: {
      get(){
        return this.store.destinationPlanInfo.accountNumber
      },
      set(value){
        this.handleDestinationPlanAccountNumber(value);
      }
    },
    destinationPlanAffiliateNumber: {
      get(){
        return this.store.destinationPlanInfo.affiliateNumber
      },
      set(value){
        this.handleDestinationPlanAffiliateNumber(value);
      }
    },
    destinationPlanDivision: {
      get(){
        return this.store.destinationPlanInfo.division
      },
      set(value){
        this.handleDestinationPlanDivision(value);
      }
    }
  },
  methods: {
    ...mapActions(
      'module', ['handleDestinationPlanSponsor', 'handleDestinationPlanName', 'handleDestinationPlanAccountNumber', 'handleDestinationPlanAffiliateNumber', 'handleDestinationPlanDivision',]
    ),
  }
}
</script>

<style scoped lang="scss">
 @import "@/styles/app.scss";

 #originPlan{
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

#originPlan__form{
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-flow:row wrap;
  justify-content: center; 
  font-family: $font-family;
  #form{
    width: 100%;
    max-width: 1100px;
    padding: 0 20px;
    display: flex;
    flex-flow:row wrap;
    justify-content: center;
    #originPlan__form--personalInfo{
      margin-top: 30px;
    }
    .inputLabelWrapper{
      position: relative;
      padding: 10px 0 0 0;
      margin: 0 0 16px 0;
      label{
        position:absolute;
        top: 0px;
        left: 0px;
        font-size: 1.2rem;
        color: $grey-5;
      }
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
          color: #7B8D93;
          opacity: .5;
        }
      }
    }
    .disclaimer{
      width: 100%;
      font-family: $font-family;
      font-size: 1.3rem;
      color: #7B8D93;
      font-weight: 500;
      margin: 30px 0 0 0;
      text-align: center;
      cursor: pointer;
      &:hover{
        text-decoration: underline;
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
  }
}

</style>
