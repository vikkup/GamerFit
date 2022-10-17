<!-- Vikku Ponnaganti - Author of this file from Lines 2 - 22, any changes within
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
        <!-- Brian Boyle added CSS to button -->
        <h2>Coaching Portal</h2>
        <a class="button_slide slide_left" href="https://www.clocktree.com/user/home?utm_session=83931005" target="_blank">Click here to enter your coaching session</a>
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

<style scoped>
a:link, a:visited {
    background-color: #2757af;
    color: white;
    padding: 14px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
}

a:hover, a:active {
    background-color: #2757afa6;
}
/*Brian Boyle - Added CSS for Image and button*/
.gamerFitImage {
       height: 40%;
       width: 40%;
       margin: 0 auto;
}
.button_slide {
 color: #FFF;
 border-radius: 0px;
 padding: 18px 36px;
 display: inline-block;
 font-family: 'Open Sans', sans-serif;
 font-size: 14px;
 letter-spacing: 1px;
 cursor: pointer;
 box-shadow: inset 0 0 0 0;
 -webkit-transition: ease-out 0.4s;
 -moz-transition: ease-out 0.4s;
 transition: ease-out 0.4s;
}
 
.slide_left:hover {
 box-shadow: inset 0 0 0 50px #2757afa6;
}

</style>