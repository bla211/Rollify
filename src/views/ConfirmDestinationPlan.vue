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
        <div id="originPlan__form--dropdowns" class="multipleInputWrap">
          <div class="inputLabelWrapper halfWidth">
            <label v-if="store.reasonForRollover !== null">Reason for Rollover</label>
            <input type="text" :value="store.reasonForRolloverOptions[store.reasonForRollover]" placeholder="Reason for Rollover" @click="handleDropdown(0, 'dropdown__0')" id="dropdown__0"/>
            <div class="destinationDropdown" v-if="store.destinationDropdownOpen === 0">
              <div v-for="(reason, reasonIndex) in store.reasonForRolloverOptions" :key="reasonIndex" class="destinationDropdown__option" @click="handleDropdownSelect([0, reasonIndex])">{{ reason }}</div>
            </div>
          </div>
          <div class="inputLabelWrapper halfWidth">
            <label v-if="store.typeOfRollover !== null">Type of Rollover</label>
            <input type="text" :value="store.typeOfRolloverOptions[store.typeOfRollover]" placeholder="Type of Rollover" @click="handleDropdown(1, 'dropdown__1')" id="dropdown__1"/>
            <div class="destinationDropdown" v-if="store.destinationDropdownOpen === 1">
              <div v-for="(typeOfRollover, typeOfRolloverIndex) in store.typeOfRolloverOptions" :key="typeOfRolloverIndex" class="destinationDropdown__option" @click="handleDropdownSelect([1, typeOfRolloverIndex])">{{ typeOfRollover }}</div>
            </div>
          </div>
          <div class="inputLabelWrapper halfWidth">           
            <label v-if="store.getFunds !== null">Fund Distributions to Patricipant</label>
            <input type="text" :value="store.getFundsOptions[store.getFunds]" placeholder="Fund Distributions to Patricipant" @click="handleDropdown(2, 'dropdown__2')" id="dropdown__2"/>
            <div class="destinationDropdown" v-if="store.destinationDropdownOpen === 2">
              <div v-for="(getFundsOption, getFundsOptionIndex) in store.getFundsOptions" :key="getFundsOptionIndex" class="destinationDropdown__option" @click="handleDropdownSelect([2, getFundsOptionIndex])">{{ getFundsOption }}</div>
            </div>
          </div>
          <div class="inputLabelWrapper halfWidth">
            <label v-if="store.fundTransfer !== null">Fund Transfer</label>
            <input type="text" :value="store.fundTransferOptions[store.fundTransfer]" placeholder="Fund Transfer" @click="handleDropdown(3, 'dropdown__3')" id="dropdown__3"/>
            <div class="destinationDropdown" v-if="store.destinationDropdownOpen === 3">
              <div v-for="(fundTransferOption, fundTransferOptionIndex) in store.fundTransferOptions" :key="fundTransferOptionIndex" class="destinationDropdown__option" @click="handleDropdownSelect([3, fundTransferOptionIndex])">{{ fundTransferOption }}</div>
            </div>
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
      'module', ['handleDestinationPlanSponsor', 'handleDestinationPlanName', 'handleDestinationPlanAccountNumber', 'handleDestinationPlanAffiliateNumber', 'handleDestinationPlanDivision', 'handleDestinationDropdown', 'handleDropdownSelect']
    ), 
    handleDropdown(dropdownIndex, id){
      document.getElementById(id).blur();
      this.handleDestinationDropdown(dropdownIndex);
    }
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
      .destinationDropdown{
        width: 100%;
        position: absolute;
        top: 44px;
        z-index: 100;
        .destinationDropdown__option{
          padding: 10px;
          background: $grey-0;
          font-size: 1.2rem;
          font-family: $font-family;
          margin: 0 0 1px 0;    
          cursor: pointer;
          @include transition(background .2s ease-in-out);
          &:hover{
            background: $grey-2;
          }      
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
  #originPlan__form--dropdowns{
    margin: 30px 0 0 0;
    input{
      cursor: pointer;
    }
  }
}

</style>
