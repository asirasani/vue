<template>
  <div class="home container">
    <p class="textprimary">Confirmation Page</p>
    <LoyaltyRewards :auto-enrollment-status='autoEnrollStatus'/>
  </div>
</template>

<script>
import LoyaltyRewards from '@/components/Banner/LoyaltyRewards.vue';

export default {
  name: 'Home',
  components: {
    LoyaltyRewards
  },
  computed: {    
    autoEnrollStatus() {
      return this.$store.state.autoEnrollStatus;
    }
  }
}
</script>

<style scoped lang="scss">
   h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .textprimary{
    text-align:left;
    margin:10px 0;
  }
</style>