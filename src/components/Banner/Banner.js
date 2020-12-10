import { myVar } from './mock'
console.log(myVar);
export default {
  // let a: any = myVar;
  name: 'Banner',
  // data : myVar,
  // mounted() {
  //   const a = myVar;
  // },
  computed: {
    enroll() {
      return this.$store.state.autoEnrollRequested
    }
  }
}