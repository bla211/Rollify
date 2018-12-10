<template>
  <div id="status">
    <div id="sidebar">
    </div>
    <ul id="status__list">
      <li class="status__list--item" id="status__list--header">
        <div class="value value-id">ID</div>
        <div class="value value-action">Action</div>     
        <div class="value value-daysActive">Days Active</div>
      </li>   
      <li class="status__list--item">
        <div class="value value-id">5362</div>
        <div class="value value-action">Awaiting transfer</div>     
        <div class="value value-daysActive">4</div>
      </li>   
    </ul>
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

 #status{
  display: flex;
  flex-flow:row wrap;
  justify-content: flex-start;
  width: 100%;
  padding: 0 0 100px 0;
}
#sidebar{
  width: 200px;
  height: 100vh;
  background: $grey-0;
}
#status__list{
  display: flex;
  flex-flow:row wrap;
  justify-content: flex-start;
  align-content: flex-start;
  flex-grow: 1;
}
#status__list--header{
  background: $grey-2;
}
.status__list--item{
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: 1.6rem;
  font-family: $font-family;
  .value{
    padding: 10px 20px;
  }
  .value-id{
    flex-basis: 100px;
  }
  .value-action{
    flex-basis: 200px;
  }
  .value-daysActive{
  }
}
a{
  width: 100%;
  display: flex;
  justify-content: center;
  text-decoration: none;
  margin: 80px 0 0 0;
}
button{
  @include appearance(none);
  border: none;
  background: $rollify-blue;
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
