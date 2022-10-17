<!-- Vikku Ponnaganti - Author of this file from Lines 3 - 14, any changes within
these lines authored by someone else will be stated otherwise -->
<template>
<!-- Brian Boyle - Added Image -->
<div class="container">
       <div class="title">
           <div class="gamerFitImage">
               <img v-bind:src="ImageGamerFit" class="gamerFitImage">
         </div>
     </div>
</div>
    <div>
    <h2>Contact</h2>
    <p>For any questions about your participation in the GamerFit study, please contact the Study Manager, Ed Martin.
        <br>
        <a href="mailto: gamerfitlab@gmail.com">Email: gamerfitlab@gmail.com</a>

    </p>
    </div>
</template>

<!-- Brian Boyle - Added Script -->
<script>
export default {
   data() {
       return {
           //Image Assests
           ImageGamerFit: require("../assets/gamefitImg.jpg"),
       }
   }
}
</script>

<!-- Brian Boyle - Added CSS for Image-->
<style scoped>
.gamerFitImage {
       height: 40%;
       width: 40%;
       margin: 0 auto;
}
</style>