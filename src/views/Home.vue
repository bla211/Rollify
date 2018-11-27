<template>
  <div>
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
