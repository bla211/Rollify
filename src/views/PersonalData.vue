<template>
  <div id="personalInfo">
    <h1>Hi {{store.firstName}}! Please confirm some personal info for us.</h1>
    <div id="personalInfo__form">
      <div id="form">
        <div class="multipleInputWrap">
          <input class="thirdWidth" type="text" placeholder="First Name" v-model="firstName"/> 
          <input class="thirdWidth" type="text" placeholder="Middle Name" v-model="middleName"/>
          <input class="thirdWidth" type="text" placeholder="Last Name" v-model="lastName"/>     
          <input class="twoThirdsWidth" type="text" placeholder="Email" v-model="email"/>
        </div>
        <div class="multipleInputWrap" id="personalInfo__form--address">        
          <input class="fullWidth" type="text" placeholder="Mailing Address" v-model="mailingAddress"/>
          <input class="fullWidth" type="text" placeholder="Mailing Address 2" v-model="mailingAddress2"/>
          <input class="thirdWidth" type="text" placeholder="City" v-model="city"/>
          <input class="thirdWidth" type="text" placeholder="State" v-model="state"/>
          <input class="thirdWidth" type="text" placeholder="Zip Code" v-model="zipCode"/>
          <input class="twoThirdsWidth" type="text" placeholder="Phone Number" v-model="phoneNumber"/>      
        </div>
        <router-link to="origin-plan"><button>Continue</button></router-link>
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
    firstName: {
      get(){
        return this.store.firstName
      },
      set(value){
        this.handleFirstName(value);
      }
    },
    middleName: {
      get(){
        return this.store.middleName
      },
      set(value){
        this.handlemiddleName(value);
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
    email: {
      get(){
        return this.store.email
      },
      set(value){
        this.handleEmail(value);
      }
    },
  },
  methods: {
    ...mapActions(
      'module', ['handleFirstName', 'handleMiddleName', 'handleLastName', 'handleEmail']
    ),
  }
}
</script>

<style scoped lang="scss">
 @import "@/styles/app.scss";

 #personalInfo{
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

#personalInfo__form{
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-flow:row wrap;
  justify-content: center; 
  font-family: $font-family;
  padding: 0 0 100px 0;
  #form{
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-flow:row wrap;
    justify-content: center;
    .changeHasAccessCode{
      font-size: 1.0rem;
      margin: 0 0 6px 0;
      cursor: pointer;
      width: 100%;
      &:hover{
        text-decoration: underline;
      }
    }
    .halfWidthWrapper{
      display: flex;
      flex-flow:row wrap;
      justify-content: space-between;
      width: 100%;
    }
    #personalInfo__form--address{
      margin-top: 30px;
    }
    input{
      @extend %input;
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
