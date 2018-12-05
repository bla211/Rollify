<template>
  <div id="originPlan">
    <h1>We're excited about your new endeavor.<br>Please confirm we have corretcly captured your retirement fund data.</h1>
    <div id="originPlan__form">
      <div id="form">
        <div class="multipleInputWrap">
          <div class="inputLabelWrapper thirdWidth">
            <label v-if="store.planInfo.planSponsor != null">Plan Sponsor</label>
            <input type="text" v-model="planSponsor" placeholder="Plan Sponsor"/>
          </div>
          <div class="inputLabelWrapper twoThirdsWidth">
            <label v-if="store.planName != null">Plan Name</label>           
            <input type="text" v-model="planName" placeholder="Plan Name"/>
          </div>
          <div class="inputLabelWrapper thirdWidth">
            <label v-if="store.planAccountNumber != null">Plan Account No.</label>           
            <input type="text" v-model="planAccountNumber" placeholder="Plan Account No."/>
          </div>
          <div class="inputLabelWrapper thirdWidth">
            <label v-if="store.afiliateNo != null">Affiliate No.</label>           
            <input type="text" v-model="afiliateNo" placeholder="Affiliate No."/>
          </div>
          <div class="inputLabelWrapper thirdWidth">
            <label v-if="store.division != null">Division</label>           
            <input type="text" v-model="division" placeholder="Division"/>
          </div>       
        </div>
        <div id="originPlan__form--personalInfo" class="multipleInputWrap">
          <div class="inputLabelWrapper thirdWidth">
            <label v-if="store.socialSecurity != null">Social Security No.</label>           
            <input type="text" v-model="socialSecurity" placeholder="Social Security No."/>
          </div>
          <div class="inputLabelWrapper twoThirdsWidth">
            <label v-if="store.firstAndLast != null">First and Last Name</label>           
            <input type="text" v-model="firstAndLast" placeholder="First and Last Name"/>
          </div>
          <div class="inputLabelWrapper halfWidth">
            <label v-if="store.mailingAddress != null">Mailing Address</label>           
            <input type="text" v-model="mailingAddress" placeholder="Mailing Address"/>
          </div>
          <div class="inputLabelWrapper halfWidth">
            <label v-if="store.mailingAddress2 != null">Mailing Address 2</label>           
            <input type="text" v-model="mailingAddress2" placeholder="Mailing Address 2"/>
          </div>
          <div class="inputLabelWrapper thirdWidth">
            <label v-if="store.city != null">City</label>           
            <input type="text" v-model="city" placeholder="City"/>
          </div>
          <div class="inputLabelWrapper thirdWidth">
            <label v-if="store.state != null">State</label>           
            <input type="text" v-model="state" placeholder="State"/>
          </div>
          <div class="inputLabelWrapper thirdWidth">
            <label v-if="store.zipCode != null">Zip Code</label>           
            <input type="text" v-model="zipCode" placeholder="Zip Code"/>
          </div>
          <div class="inputLabelWrapper halfWidth">
            <label v-if="store.email != null">Email</label>           
            <input type="text" v-model="email" placeholder="Email"/>
          </div>
          <div class="inputLabelWrapper halfWidth">
            <label v-if="store.division != null">Phone Number</label>           
            <input type="text" v-model="phoneNumber"/>
          </div>
        </div>
      </div>
    </div>
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
    },
    planSponsor: {
      get(){
        return this.store.planInfo.planSponsor
      },
      set(value){
        this.handlePlanSponsor(value);
      }
    }
  },
  methods: {
    ...mapActions(
      'module', ['handlePlanSponsor']
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
      width: 100%;
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
      margin: 20px 0 0 0;
      width: 100%;
      cursor: pointer;
      @include transition(opacity .1s ease-in-out);
      &:hover{
        opacity: .75;
      }
    }
  }
}

</style>
