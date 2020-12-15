<template>
<!-- need to make this as reusable component which accpets title and message?? -->
     <div class="envelope">
        <svg width="46px" height="55px" viewBox="0 0 46 55" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Customer-Experience" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Group-33" transform="translate(-77.000000, 0.000000)" fill="#000000">
                    <path d="M122.980106,17.6688355 L123,17.6688355 L123,55 L77,55 L77,17.6688355 L77.0198936,17.6688355 L100.010002,0 L122.980106,17.6688355 Z M105.274009,42.4332511 L102.422626,30.7505048 C104.407482,29.6118465 105.395349,27.2324433 104.825249,24.9652232 C104.255038,22.6980031 102.271061,21.113978 100,21.113978 C97.7289392,21.113978 95.7449621,22.6980031 95.1747514,24.9652232 C94.6046506,27.2324433 95.5925175,29.6118465 97.5773739,30.7505048 L94.7261006,42.4332511 L105.274009,42.4332511 Z" id="Fill-32"></path>
                </g>
            </g>
        </svg>
    </div>
</template>

<script>
export default {
  name: 'KeyIcon'
}
</script>

<style lang="scss">
   @import "@/assets/styles/global"; 
  .envelope{ 
      svg g{ 
          fill: $white;
      }
  }
</style>
