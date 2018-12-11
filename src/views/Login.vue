<template>
  <div id="login">
    <h1>Welcome to Rollify! Retirement Rollovers, made easy.</h1>
    <div id="login__modal">
      <div id="login__modal--header">
        <div class="block">
        </div>
        <div id="avatar">
        </div>
        <div class="block">
        </div>
      </div>
      <div id="login__modal--body">
        <input class="fullWidth" type="text" placeholder="username"/> 
        <input class="fullWidth" type="text" placeholder="password"/>
        <button>Login</button> 
        <router-link to="create-account">Create Account</router-link >
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
      'module', []
    ),
  }
}
</script>

<style scoped lang="scss">
 @import "@/styles/app.scss";

#login{
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
#login__modal{
  max-width: 374px;
  width: 100%;
  background: #CFD8DC;
  margin-top: 60px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
#login__modal--header{
  height: 65px;
  width: 100%;
  background: #788B91;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 22px 14px;
  .block{
    height: 20px;
    width: 20px;
    background: #CFD8DC;
  }
  #avatar{
    width: 65px;
    height: 65px;
    border-radius: 100%;
    background: #FFFFFF;
    top: 10px;
    position: relative;
  }
}
#login__modal--body{
  width: 100%;
  padding: 80px 14px 20px 14px;
  display: flex;
  flex-flow:column wrap;
  justify-content: center;
  align-content: center;
  flex-direction: row;

  input{
    width: 100%;
    @extend %input;
  }

  button{
    @include appearance(none);
    border: none;
    margin: 30px 0 14px 0;
    background: #7B8D93;
    color: #FFFFFF;
    padding: 10px 50px;
    border-radius: 5px;
    font-family: $font-family;
    font-size: 1.4rem;
  }
  a{
    width: 100%;
    text-align: center;
    font-size: 1.4rem;
    font-family: $font-family;
    color: #7B8D93;
    text-decoration: none;
    &:active{
      color: #7B8D93;
      text-decoration: none;
    }
  }
}

</style>
