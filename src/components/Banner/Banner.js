
export default {
  name: 'Banner',
  computed: {
    enroll() {
      return this.$store.state.autoEnrollRequested
    }
  }
}