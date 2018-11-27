<template>
  <h1 v-if="headingType === 'h1'"><slot></slot></h1>
  <h2 v-else-if="headingType === 'h2'"><slot></slot></h2>
  <h3 v-else-if="headingType === 'h3'"><slot></slot></h3>
  <h4 v-else-if="headingType === 'h4'"><slot></slot></h4>
</template>

<script>
export default {
  props: {
    headingType: String,
    message: String
  }
}
</script>


<style scoped lang="scss">
 @import "@/styles/app.scss";

h1{
    font-family: $font-family;
}
h2{
    float: left;
    font-family: $font-family;
    font-weight: 400;
    font-size: 2.4rem;
    margin-bottom: 20px;
}
h3{
    font-family: $font-family;
}
h4{
    font-family: $font-family;
}
</style>
