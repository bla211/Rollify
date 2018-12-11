<template>
  <div id="originPlan">
    <ProgressBar progress="0"/>
    <h1>We're excited about your new endeavor.<br>Please confirm we have correctly captured your retirement fund data.</h1>
    <div id="originPlan__form">
      <div id="form">
        <div class="multipleInputWrap">
          <div class="inputLabelWrapper thirdWidth">
            <label v-if="store.originPlanInfo.sponsor.length">Plan Sponsor</label>
            <input type="text" v-model="originPlanSponsor" placeholder="Plan Sponsor"/>
          </div>
          <div class="inputLabelWrapper twoThirdsWidth">
            <label v-if="store.originPlanInfo.name.length">Plan Name</label>           
            <input type="text" v-model="originPlanName" placeholder="Plan Name"/>
          </div>
          <div class="inputLabelWrapper thirdWidth">
            <label v-if="store.originPlanInfo.accountNumber.length">Plan Account No.</label>           
            <input type="text" v-model="originPlanAccountNumber" placeholder="Plan Account No."/>
          </div>
          <div class="inputLabelWrapper thirdWidth">
            <label v-if="store.originPlanInfo.affiliateNumber.length">Affiliate No.</label>           
            <input type="text" v-model="originPlanAffiliateNumber" placeholder="Affiliate No."/>
          </div>
          <div class="inputLabelWrapper thirdWidth">
            <label v-if="store.originPlanInfo.division.length">Division</label>           
            <input type="text" v-model="originPlanDivision" placeholder="Division"/>
          </div>       
        </div>
        <div id="originPlan__form--personalInfo" class="multipleInputWrap">
          <div class="inputLabelWrapper thirdWidth">
            <label v-if="store.socialSecurityNumber.length">Social Security No.</label>           
            <input type="text" v-model="socialSecurityNumber" placeholder="Social Security No."/>
          </div>
          <div class="inputLabelWrapper thirdWidth">
            <label v-if="store.firstName.length">First Name</label>           
            <input type="text" v-model="firstName" placeholder="First Name"/>
          </div>
          <div class="inputLabelWrapper thirdWidth">
            <label v-if="store.lastName.length">Last Name</label>           
            <input type="text" v-model="lastName" placeholder="Last Name"/>
          </div>
          <div class="inputLabelWrapper halfWidth">
            <label v-if="store.mailingAddress.length">Mailing Address</label>           
            <input type="text" v-model="mailingAddress" placeholder="Mailing Address"/>
          </div>
          <div class="inputLabelWrapper halfWidth">
            <label v-if="store.mailingAddress2.length">Mailing Address 2</label>           
            <input type="text" v-model="mailingAddress2" placeholder="Mailing Address 2"/>
          </div>
          <div class="inputLabelWrapper thirdWidth">
            <label v-if="store.city.length">City</label>           
            <input type="text" v-model="city" placeholder="City"/>
          </div>
          <div class="inputLabelWrapper thirdWidth">
            <label v-if="store.state.length">State</label>           
            <input type="text" v-model="state" placeholder="State"/>
          </div>
          <div class="inputLabelWrapper thirdWidth">
            <label v-if="store.zipCode.length">Zip Code</label>           
            <input type="text" v-model="zipCode" placeholder="Zip Code"/>
          </div>
          <div class="inputLabelWrapper halfWidth">
            <label v-if="store.email.length">Email</label>           
            <input type="text" v-model="email" placeholder="Email"/>
          </div>
          <div class="inputLabelWrapper halfWidth">
            <label v-if="store.phoneNumber !== ''">Phone Number</label>           
            <input type="text" v-model="phoneNumber" placeholder="Phone Number"/>
          </div>
        </div>
        <router-link to="search-destination-plan"><button>Select Destination Plan</button></router-link>
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
    originPlanSponsor: {
      get(){
        return this.store.originPlanInfo.sponsor
      },
      set(value){
        this.handleOriginPlanSponsor(value);
      }
    },
    originPlanName: {
      get(){
        return this.store.originPlanInfo.name
      },
      set(value){
        this.handleOriginPlanName(value);
      }
    },
    originPlanAccountNumber: {
      get(){
        return this.store.originPlanInfo.accountNumber
      },
      set(value){
        this.handleOriginPlanAccountNumber(value);
      }
    },
    originPlanAffiliateNumber: {
      get(){
        return this.store.originPlanInfo.affiliateNumber
      },
      set(value){
        this.handleOriginPlanAffiliateNumber(value);
      }
    },
    originPlanDivision: {
      get(){
        return this.store.originPlanInfo.division
      },
      set(value){
        this.handleOriginPlanDivision(value);
      }
    },
    mailingAddress: {
      get(){
        return this.store.mailingAddress
      },
      set(value){
        this.handleMailingAddress(value);
      }
    },
    mailingAddress2: {
      get(){
        return this.store.mailingAddress2
      },
      set(value){
        this.handleMailingAddress2(value);
      }
    },
    city: {
      get(){
        return this.store.city
      },
      set(value){
        this.handleCity(value);
      }
    },
    state: {
      get(){
        return this.store.state
      },
      set(value){
        this.handleState(value);
      }
    },
    zipCode: {
      get(){
        return this.store.zipCode
      },
      set(value){
        this.handleZipCode(value);
      }
    },
    phoneNumber: {
      get(){
        return this.store.phoneNumber
      },
      set(value){
        this.handlePhoneNumber(value);
      }
    },
    email: {
      get(){
        return this.store.email
      },
      set(value){
        this.handleEmail(value);
      }
    },
    socialSecurityNumber: {
      get(){
        return this.store.socialSecurityNumber
      },
      set(value){
        this.handleSocialSecurityNumber(value);
      }
    },
    firstName: {
      get(){
        return this.store.firstName
      },
      set(value){
        this.handleFirstName(value);
      }
    },
    lastName: {
      get(){
        return this.store.lastName
      },
      set(value){
        this.handleLastName(value);
      }
    },
  },
  methods: {
    ...mapActions(
      'module', ['handleOriginPlanSponsor', 'handleOriginPlanName', 'handleOriginPlanAccountNumber', 'handleOriginPlanAffiliateNumber', 'handleOriginPlanDivision', 'handleMailingAddress', 'handleMailingAddress2', 'handleCity', 'handleState', 'handleZipCode', 'handlePhoneNumber', 'handleEmail', 'handleSocialSecurityNumber', 'handleFirstName', 'handleLastName']
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
      margin: 30px 0 0 0;
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
