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
          <input class="fullWidth" type="text" placeholder="Access Code" />
        </template>
        <template v-else>
          <div class="changeHasAccessCode" @click="handleHasAccessCode(true)">Have an access code? Click here to continue with an access code.</div>
        </template>
        <input class="halfWidth" type="text" placeholder="First Name" />
        <input class="halfWidth" type="text" placeholder="Last Name" />
        <input class="fullWidth" type="text" placeholder="Email" />
        <input class="fullWidth" type="text" placeholder="Confirm Email" />
        <input class="fullWidth" type="text" placeholder="Password" />
        <input class="fullWidth" type="text" placeholder="Confirm Password" />
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
  },
  methods: {
    ...mapActions(
      'module', ['handleHasAccessCode']
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
