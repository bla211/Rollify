<template>
  <button class="submit-btn" @click="action(data, method)" :class="colorClass" :disabled="disabled">
    <slot>
      <span class="btn-title">{{title}}</span>
    </slot>
  </button>
</template>

<script>
export default {
  props: {
    title: String,
    data: Object,
    action: Function,
    colorClass: String,
    disabled: Boolean,
    method: String
  }
}
</script>


<style scoped lang="scss">
 @import "@/styles/app.scss";

 %submit-btn-shared{
   @include appearance(none);

   font-family: $font-family;
   color: $grey-9;
   font-weight: 400;
   text-align: center;
   width: 100%;
   padding: 10px;
   float: left;
   margin-top: 6px;
   border: none; 
   cursor: pointer;
   font-size: 1.6rem;
   &:disabled{
     opacity: .5;
     cursor: not-allowed;
   }
 }

 .green_btn{
   @extend %submit-btn-shared;
   background: $informa-green;
 }
 .light_blue_btn{
   @extend %submit-btn-shared;
   background: $light-blue;
 }
 .med_blue_btn{
   @extend %submit-btn-shared;
   background: $med-blue;
 }

 .absolute_bottom{
   position: absolute;
   bottom: 0;
   left: 0;
 }

 .small{
   width: 200px;
 }
</style>
