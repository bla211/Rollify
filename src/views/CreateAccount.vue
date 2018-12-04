<template>
  <div>
    Create Account
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
  flex-flow:column wrap;
  justify-content: center;
  align-content: flex-start;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  h1{
    flex-basis: 100%;
    margin-top: 80px;
    text-align: center;
    font-family: Tahoma, sans-serif;
    font-size: 2.6rem;
    font-weight: 100;
    color: #888888;
  }
}
#login__modal{
  width: 374px;
  background: #CFD8DC;
  margin-top: 40px;
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
    @include appearance(none);
    border: none;
    padding: 10px 14px;
    margin: 0 0 14px 0;
    outline: none;
    font-family: $font-family;
    @include placeholder{
      @include appearance(none);
      font-family: $font-family;
      font-size: 1.8rem;
      line-height: 2.3rem;
      color: #9DA6A9;
      text-transform: lowercase;
    }
  }
  button{
    @include appearance(none);
    border: none;
    padding: 10px 14px;
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
  }
}

</style>
