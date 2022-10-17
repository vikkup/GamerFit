<!-- Vikku Ponnaganti - Author of this file from Lines 3 - 95, any changes within
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
    <h1>GamerFit Support and Troubleshooting</h1>
    <p>For specific instructions on using or troubleshooting your <b>FitBit</b> or <b>exergaming system</b>, please see the relevant
        section below.
    </p>
    <p style="text-align:left;">If you are having trouble with the GamerFit app or have any questions about the technology involved in the study,
        you can email the GamerFit research manager at <a href="mailto: gamerfitlab@gmail.com">gamerfitlab@gmail.com</a>
    </p>
    <br>
    <p><b>Fitbit Instructions and Troubleshooting</b></p>
    <p style="text-align:left;"> The Fitbit Flex 2 is a device that automatically records calories burned, the number of steps you take, and the
        number of minutes you are active each day. Please follow the instructions for using the Fitbit in the GamerFit
        study.
    </p>
    <h2 style="text-align:left;"> <b>Requirements:</b> </h2>

    <ol style="text-align:left;">
    <li>You can set up your Fitbit Flex 2 using your computer or the Fitbit apps for iOS (iPhone or iPad), Android
        (Samsung Galaxy, S5, and Motorola Droid Turbo) and Windows 10 (Microsoft).</li>
    <li>The Fitbit app is compatible with more than 200 mobile devices that support iOS, Android, and Windows
        10 operating systems.</li>
    <li>It must be connected to the internet/Wi-Fi at home.</li>
    </ol> 

    <h2 style="text-align:left;"> <b>How to Wear the Fitbit:</b> </h2>
    <ol style="text-align:left;">
    <li>Please wear your Fitbit every day while you are in the study.</li>
    <li>Bring your Fitbit with you wherever you go and wear during all walking hours. Put your Fitbit on first thing
        in the morning and take it off when you go to sleep.</li>
    <li>Wear your Fitbit on your wrist, it should usually rest a finger’s width below your wrist bone and lay flat (as
        you’d normally wear a watch).</li>
    <li>While Flex 2 is charging, each pulsing indicator light represents progress towards the total charge in
        increments of 25%. When Flex 2 is completely charged, a green light flashes and then all five lights shine
        for a few seconds before turning off.</li>   
    <li><b>DO NOT GET YOUR FITBIT WET!</b> Although water resistant, it is not meant to be submerged in water,
        please remove when bathing or swimming.</li>
    </ol>

    <h2 style="text-align:left;"> <b>How to use the Fitbit Flex 2 Model:</b> </h2>
    <ol style="text-align:left;">
    <li>Your Fitbit Flex 2 Model records steps taken, distance travelled, calories burned, and active minutes.</li>
    <li>Your Flex 2 automatically tracks the following all-day stats: Steps taken, Distance covered, Calories
        burned, and Active minutes.</li>
    <li>To scroll through your stats simply press the button on the side of your Flex 2. You’ll see the time followed
        by an icon and stat in turn.</li>
    <li>The Fitbit apps use Bluetooth Low Energy (BLE) technology to sync with your Fitbit tracker (make sure
        phone is on, Bluetooth is enabled under settings). Each time you open the app it will sync if the tracker is
        nearby, and the app will also sync periodically throughout the day if you have the all-day sync setting
        enabled. If you’re running the Fitbit app on a Windows 10 PC that doesn’t have Bluetooth, you’ll need to
        make sure the tracker is connected to the computer.
        <ul><b>a.</b> The tracker is within 20 feet of your computer dongle.
            <br>
            <b>b.</b> The computer is powered on, awake, and connected to the Internet.
        </ul>
    </li>   
    <li>With normal use, your fully charged Flex 2 should last up to five days before needing a charge. You can
        check the level of your battery by logging into fitbit.com and clicking the gear icon on the top-right corner
        of the page.
        <ul><b>a.</b> To charge your Flex 2, plug the charging cable into the USB port on your computer or a UL-
                    certified USB wall charger and press the tracker into the compartment on the charging cable.
            <br>
            <b>b.</b> The pins on the charging cable must align with the corresponding pins on the back of the tracker
                    and lock securely in place. You’ll know the connection is secure when the tracker vibrates and
                    you see the indicator lights blinking, indicating your progress towards a total charge.
            <br>
            <b>c.</b> While wearing the Fitbit, please live your life as you normally do.
        </ul>
    </li>
    </ol>
    <h2>Exergame Troubleshooting</h2>
    <p style="text-align:left;">Below are links to the technical support pages for the exergaming platforms used in GamerFit. If you
        continue to have technical problems with your exergame after visiting your game-specific technical
        support link please email the GamerFit Research Manager at <a href="mailto: gamerfitlab@gmail.com">gamerfitlab@gmail.com</a> for additional
        help.</p>
        <div class = "centered">
            <a href="https://en-americas-support.nintendo.com/app/categories/detail/p/989/c/898" >NINTENDO SWITCH (ENGLISH)</a>
            <br>
            <a href="https://es-americas-support.nintendo.com/">NINTENDO SWITCH (SPANISH)</a>
            <br>
            <a href="https://support.xbox.com/en-US/help/hardware-network/browse">XBOX ONE (ENGLISH)</a>
            <br>
            <a href="https://support.xbox.com/es-MX/help/hardware-network/browse">XBOX ONE (SPANISH)</a>
            <br>
            <a href="https://www.ifixit.com/Wiki/Nintendo_Wii_Troubleshooting">WII (ENGLISH)</a>
            <br>
            <a href="https://es.ifixit.com/Wiki/Nintendo_Wii_Troubleshooting">WII (SPANISH)</a>
            <br>
            <a href="https://www.playstation.com/en-us/support/">PLAYSTATION (ENGLISH)</a>
            <br>
            <a href="https://www.playstation.com/es-mx/">PLAYSTATION (SPANISH)</a>
            <br>
        </div>
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
.centered
{
    align-content: center;
    text-align: center;
}
</style>