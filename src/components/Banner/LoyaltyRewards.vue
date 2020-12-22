<template>
<!-- need to make this as reusable component which accpets title and message?? -->
  <div class="Banner">
    <div class="message-container">
      <div class="key-icon">
          <KeyIcon/>
      </div>
      <div>
          <div v-if="autoEnrollmentStatus == 'autoEnrollRequested' " class="header">
              The Key Rewards
          </div>
          <div v-else class="header">
              Welcome to The Key Rewards!
          </div>
          <div v-if="autoEnrollmentStatus == 'autoEnrollRequested' " class="headerContent">
            <p>You're almost done. We received your request and will create your rewards account. We will send you an email shortly to complete your enrollment and access your rewards online.</p>
          </div>
          <div v-if="autoEnrollmentStatus == 'confirmedUserAutoEnroll' " class="headerContent">
             <p>Every time you shop in stores and online, use your registered phone number to earn rewards. <br/>You can now access your <a href='#'>rewards</a> online.</p>
          </div>
          <div v-if="autoEnrollmentStatus == 'guestUserAutoEnroll' " class="headerContent">
             <p>You're almost done. Check your email to complete your enrollment and access your rewards online.</p>
          </div>
          <div v-if="autoEnrollmentStatus == 'nonConfirmUserAutoEnroll' " class="headerContent">
             <p>You're almost done. Check your email to complete your enrollment and access your rewards online.</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import KeyIcon from '@/assets/icons/Key.vue';
export default {
  name: 'LoyaltyRewards',
  components: {
    KeyIcon
  },
 props: ['autoEnrollmentStatus']
}
</script>

<style lang="scss">
  @import "@/assets/styles/global"; 

  .key-icon {
    display: flex;
    align-self: center;
    padding-right: 12px;
  }
  .message-container{
    display: inline-flex;
  }
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
