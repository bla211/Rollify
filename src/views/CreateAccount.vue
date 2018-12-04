<template>
  <div id="createAccount">
    <h1>Move your funds easily, Join Rollify now!</h1>
    <div id="createAccount__form">
      <div id="createAccount__form--accessCodeCheck" v-if="store.hasAccessCode === null">
        <div class="accessCodeToggle" @click="handleHasAccessCode(true)">
          Claim Account with Access Code
        </div>
        <div class="accessCodeToggle" @click="handleHasAccessCode(false)">
          Create New Account
        </div>
      </div>
      <div id="form" v-if="store.hasAccessCode !== null">
        <template v-if="store.hasAccessCode">
          <div class="changeHasAccessCode" @click="handleHasAccessCode(false)">Dont have an access code? Click here to continue creating a new account.</div>
          <input class="fullWidth" type="text" placeholder="Access Code" v-model="accessCode"/>
        </template>
        <template v-else>
          <div class="changeHasAccessCode" @click="handleHasAccessCode(true)">Have an access code? Click here to continue with an access code.</div>
        </template>
        <input class="halfWidth" type="text" placeholder="First Name" v-model="firstName"/>
        <input class="halfWidth" type="text" placeholder="Last Name" v-model="lastName"/>
        <input class="fullWidth" type="text" placeholder="Email" v-model="email"/>
        <input class="fullWidth" type="text" placeholder="Confirm Email" v-model="emailConfirm"/>
        <input class="fullWidth" type="password" placeholder="Password" v-model="password"/>
        <input class="fullWidth" type="password" placeholder="Confirm Password" v-model="passwordConfirm"/>
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
    accessCode: {
      get(){
        return this.store.accessCode
      },
      set(value){
        this.handleAccessCode(value);
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
    email: {
      get(){
        return this.store.email
      },
      set(value){
        this.handleEmail(value);
      }
    },
    emailConfirm: {
      get(){
        return this.store.emailConfirm
      },
      set(value){
        this.handleEmailConfirm(value);
      }
    },
    password: {
      get(){
        return this.store.password
      },
      set(value){
        this.handlePassword(value);
      }
    },
    passwordConfirm: {
      get(){
        return this.store.passwordConfirm
      },
      set(value){
        this.handlePasswordConfirm(value);
      }
    }
  },
  methods: {
    ...mapActions(
      'module', ['handleHasAccessCode', 'handleAccessCode', 'handleFirstName', 'handleLastName', 'handleEmail', 'handleEmailConfirm', 'handlePassword', 'handlePasswordConfirm']
    ),
  }
}
</script>

<style scoped lang="scss">
 @import "@/styles/app.scss";

 #createAccount{
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

#createAccount__form{
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-flow:row wrap;
  justify-content: center; 
  font-family: $font-family;
  #createAccount__form--accessCodeCheck{
    width: 100%;
    display: flex;
    flex-flow:row wrap;
    justify-content: space-around; 
    .accessCodeToggle{    
      font-size: 2.4rem;
      width: 40%;
      padding: 0 20px;
      height: 200px;
      border-radius: 5px;
      background: #F3F3F3;
      color: #7B8D93;
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-content: center;
      text-align: center;
      cursor: pointer;
      &:hover{
        color: #F3F3F3;
        background: #7B8D93;
      }
    }
  } 
  #form{
    width: 100%;
    max-width: 374px;
    display: flex;
    flex-flow:row wrap;
    justify-content: space-between;
    .changeHasAccessCode{
      font-size: 1.0rem;
      margin: 0 0 6px 0;
      cursor: pointer;
      &:hover{
        text-decoration: underline;
      }
    }
  }
  input{
    @extend %input;
  }
}

</style>
