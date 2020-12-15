<template>
<!-- need to make this as reusable component which accpets title and message?? -->
  <div class="Banner">
    <div class="row">
      <div class="col-sm-1">
          <KeyIcon/>
      </div>
      <div class="col-sm-11">
          <div class="header">
              Welcome to The Key Rewards!
          </div>
          <div v-if="enroll == 'autoEnrollRequested' " class="headerContent">
            <p>{{this.mockData.loyaltyLookupResponseMessage.autoEnrollRequested}}</p>
          </div>
          <div v-else-if="enroll == 'confirmedUserAutoEnroll' " class="headerContent">
             <p v-html="this.mockData.loyaltyLookupResponseMessage.confirmedUserAutoEnroll"></p>
          </div>
          <div v-else class="headerContent">
             <p>{{this.mockData.loyaltyLookupResponseMessage.guestUserAutoEnroll}}</p>
          </div>
          
      </div>
    </div>
  </div>
</template>

<script>
import KeyIcon from '@/assets/icons/Key.vue';
import { mockBanner } from '@/assets/mock/mockBanner'
export default {
  name: 'Banner',
  components: {
    KeyIcon
  },
  computed: {
    mockData() {
        return mockBanner;
    },
    enroll() {
      console.log(this.$store.state.autoEnrollRequested);
      return this.$store.state.autoEnrollRequested;
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/styles/global"; 
  .Banner{ 
    background-color: $black;
    color: $white;
    padding: 12px;
  }
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
  .header {
    font-size: 24px;
    font-weight: 500;
    text-align: left;
  }
  .headerContent {
    font-size: 16px;
    text-align: left;
  }
</style>
