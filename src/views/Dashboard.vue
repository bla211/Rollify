<template>
  <div id="dashboard">
    <div id="sidebar">
      <div class="sidebar__tile">
        Dashboard
      </div>
      <div class="sidebar__tile">
        Alerts
      </div>
      <div class="sidebar__tile" id="settings-tile">
        Settings
      </div>
    </div>
    <div id="dashboard__tiles">
      <div id="dashboard__tiles--wrapper">   
        <div class="tile" id="average-time">        
          <div class="tile-value">12 Days</div>
          <div class="tile-title">Average Transfer</div>
        </div>
        <div class="tile" id="savings">
          <div class="tile-value">$1.3 M</div>
          <div class="tile-title">Savings</div>
        </div>
        <div class="tile" id="advisory">
          <div class="tile-value">15 Need</div>
          <div class="tile-title">Advisory Services</div>
        </div>
        <div class="tile" id="average-time">        
        </div>
      </div>

      <ul id="status__list">
        <li class="status__list--item" id="status__list--header">
          <div class="value value-date">Date</div>
          <div class="value value-from">From</div>     
          <div class="value value-to">To</div>
          <div class="value value-status">Status</div>
          <div class="value value-time">Rollover Time</div>
        </li>   
        <li class="status__list--item">
          <div class="value value-date">12/01/2018</div>
          <div class="value value-from">Vanguard</div>     
          <div class="value value-to">Fidelity</div>
          <div class="value value-status">Pending</div>
          <div class="value value-time">10 Days</div>
        </li>
        <li class="status__list--item">
          <div class="value value-date">12/03/2018</div>
          <div class="value value-from">Vanguard</div>     
          <div class="value value-to">Fidelity</div>
          <div class="value value-status">Pending</div>
          <div class="value value-time">7 Days</div>
        </li>  
        <li class="status__list--item">
          <div class="value value-date">12/03/2018</div>
          <div class="value value-from">Vanguard</div>     
          <div class="value value-to">Fidelity</div>
          <div class="value value-status">Pending</div>
          <div class="value value-time">7 Days</div>
        </li>  
        <li class="status__list--item">
          <div class="value value-date">12/08/2018</div>
          <div class="value value-from">Vanguard</div>     
          <div class="value value-to">Fidelity</div>
          <div class="value value-status">Pending</div>
          <div class="value value-time">2 Days</div>
        </li>
        <li class="status__list--item">
          <div class="value value-date">12/08/2018</div>
          <div class="value value-from">Vanguard</div>     
          <div class="value value-to">Fidelity</div>
          <div class="value value-status">Pending</div>
          <div class="value value-time">2 Days</div>
        </li>
        <li class="status__list--item">
          <div class="value value-date">12/08/2018</div>
          <div class="value value-from">Vanguard</div>     
          <div class="value value-to">Fidelity</div>
          <div class="value value-status">Pending</div>
          <div class="value value-time">2 Days</div>
        </li>
        <li class="status__list--item">
          <div class="value value-date">12/08/2018</div>
          <div class="value value-from">Vanguard</div>     
          <div class="value value-to">Fidelity</div>
          <div class="value value-status">Pending</div>
          <div class="value value-time">2 Days</div>
        </li>
        <li class="status__list--item">
          <div class="value value-date">12/08/2018</div>
          <div class="value value-from">Vanguard</div>     
          <div class="value value-to">Fidelity</div>
          <div class="value value-status">Pending</div>
          <div class="value value-time">2 Days</div>
        </li>
        <li class="status__list--item">
          <div class="value value-date">12/08/2018</div>
          <div class="value value-from">Vanguard</div>     
          <div class="value value-to">Fidelity</div>
          <div class="value value-status">Pending</div>
          <div class="value value-time">2 Days</div>
        </li>
        <li class="status__list--item">
          <div class="value value-date">12/08/2018</div>
          <div class="value value-from">Vanguard</div>     
          <div class="value value-to">Fidelity</div>
          <div class="value value-status">Pending</div>
          <div class="value value-time">2 Days</div>
        </li>
        <li class="status__list--item">
          <div class="value value-date">12/08/2018</div>
          <div class="value value-from">Vanguard</div>     
          <div class="value value-to">Fidelity</div>
          <div class="value value-status">Pending</div>
          <div class="value value-time">2 Days</div>
        </li>   
      </ul>
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

 #dashboard{
  display: flex;
  flex-flow:row wrap;
  justify-content: flex-start;
  width: 100%;
  height: calc(100vh - 59px);
}
#sidebar{
  width: 200px;
  height: calc(100vh - 59px);
  background: $grey-0;
  display: flex;
  flex-flow:row wrap;
  justify-content: flex-start;
  align-content: flex-start;
  .sidebar__tile{
    padding: 20px;
    width: 100%;
    font-size: 1.8rem;
    font-family: $font-family;
    cursor: pointer;
    @include transition(background .2s ease-in-out);
    &:hover{
      background: $grey-3;
    }
  }
}
#dashboard__tiles{
  display: flex;
  flex-flow:row wrap;
  justify-content: flex-start;
  align-content: flex-start;
  width: calc(100% - 200px);
}
#dashboard__tiles--wrapper{
  display: flex;
  flex-flow:row wrap;
  justify-content: space-between;
  align-content: flex-start;
  align-items: flex-start;
  width: 100%; 
  padding: 20px;
  #advisory{
    background: #C62828;
  }
  #savings{
    background: #43a047;
  }
  #average-time{
    background: #C0CA33;
  }
  .tile{
    display: flex;
    flex-flow:row wrap;
    justify-content: flex-start;
    align-content: flex-start;
    width: 24%;
    background: $grey-1;
    font-size: 1.4rem;
    font-family: $font-family;
    border-radius: 4px;
    cursor: pointer;
    .tile-title{
      font-size: 1.2rem;
      font-weight: 500;
      padding: 4px;
      width: 100%; 
      text-align: center;
      padding: 4px;
      background: $grey-2;
      color: $grey-8;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    .tile-value{
      width: 100%;
      padding: 20px;
      text-align: center;
      font-size: 2.4rem;
      color: white;
    }
  }
}
#status__list{
  display: flex;
  flex-flow:row wrap;
  justify-content: flex-start;
  align-content: flex-start;
  width: 100%;
  margin-top: 40px;
}
#status__list--header{
  background: $grey-6;
  color: white;
  font-weight: 500;
  font-size: 1.3rem;
  .value{
    padding: 4px 20px;
  }
}
.status__list--item{
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: 1.6rem;
  font-family: $font-family;
  cursor: pointer;
  @include transition(background .2s ease-in-out);
  &:nth-child(odd){
    background: $grey-1;
  }
  &:hover{
    background: $grey-4;
  }
  .value{
    padding: 10px 20px;
  }
  .value-date{
    flex-basis: 200px;
  }
  .value-from{
    flex-basis: 200px;
  }
  .value-to{
    flex-basis: 200px;
  }
  .value-status{
    flex-basis: 200px;
  }
  .value-time{
    flex-basis: 200px;
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
