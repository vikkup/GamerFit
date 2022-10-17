<template>
<!-- Brian Boyle - Added Image -->
<div class="container">
       <div class="title">
           <div class="gamerFitImage">
               <img v-bind:src="ImageGamerFit" class="gamerFitImage">
         </div>
     </div>
</div>
    <br>
    <nav>
        <ul class="navigation">
            <li><router-link to="/xbox" exact>Xbox Exergames</router-link></li>
            <!-- Brian Boyle - Not implemented yet -->
            <li><router-link to="/playstation" exact>Playstation Exergames</router-link></li>
            <li><router-link to="/switch" exact>Switch Exergames</router-link></li>
        </ul>
    </nav>
  <router-view />
    <div>
    <h2 style="text-align:center;">Welcome to GamerFit for Switch!</h2>
    <p style="text-align:center;">Congratulations! You are now a GamerFit team member!</p>
    <p style="text-align:center;">As a member of GamerFit, you will participate in 12 weeks of fun challenges. Your main goals as a GamerFit member are: </p>
<br>
    <ul style="text-align:left;">
    <li>BE ACTIVE! You will work up to being active for as much as 60 minutes or more daily.</li>
    <li>GAME! Complete the GamerFit exergame video gaming challenges in this book.</li>
    <li>VIDEOCHAT! Videochat with your fitness coach once a week.</li>
    <li>FITBIT! Wear your Fitbit every day whenever you’re awake.</li>
    <li>TRACK! Log your sleep, mood, and exercise every day on the GamerFit website.</li>
    </ul> 

<details style="text-align:left;">
    <summary><p ><b>What are my physical activity goals?</b></p></summary>
    <ul style="text-align:left;">
    <li>GamerFit team members work up to getting about 60 minutes of physical activity every day. 
        You know you’re being physically active when you feel your heart beat fast and you start to sweat!</li>
    <li>We’ll help you come up with ideas to be physically active and meet your goals. One way is to play the exergames! 
        You have three exergaming challenges each week. This will help reach your daily physical activity goals.</li>
    <li>You will also have access to on-demand exercise videos through the GamerFit website. You can do these videos at home on days that you don’t exergame. 
        We also want you to record other activities that you do throughout the week that are physical activity and how much time you spend doing them. 
        Some examples are walking, running, riding a bike, going to P.E. class, or playing a sport. 
        You will do that through the special logs that we send to you each day.</li>
    </ul> 
</details>
    <br>
    <details  style="text-align:left;">
    <summary><p><b>How long do I play the exergames?</b></p></summary>
    <li style="text-align:left;">The first game challenge will take about 10 minutes to complete. 
        Each week we will add more time to the game challenges, until you reach 60 minutes in week 8. 
        It really helps if you use the stopwatch on a phone or kitchen timer to track how long you exergame!</li>
    </details>
    <br>
    <details  style="text-align:left;">
    <summary><p><b>Game challenges? What are those?</b></p></summary>
    <li style="text-align:left;">The game challenges help you reach your physical activity goal. 
        You will complete three game challenges every week. 
        At each video chat, we’ll talk with you about the next week’s challenges. </li>
    </details>
    <br>
    <details  style="text-align:left;">
    <summary><p><b>Video chat? What’s that?</b></p></summary>
    <li style="text-align:left;">A video chat is a face-to-face conversation that you have over the Internet using the GamerFit website on a phone, tablet, or computer. 
        Your coach will check in with you and your parent to help you reach your goals.</li>
        </details>
    <br>
    <details  style="text-align:left;">
    <summary><p><b>What’s a Fitbit?</b></p></summary>
    <li style="text-align:left;">A Fitbit is a step tracker you wear on your wrist like a watch. 
        The Fitbit keeps up with your daily physical activity. It records how many steps you have taken.</li>
    </details>
    <br>
    </div>
<!---------------------------------Level 1 Table -------------------------------------->
<details  style="text-align:left;">
    <summary>LEVEL 1</summary>
    <div class="container">
        <div class="title">
            <div class="gamerFitImage">
                <img v-bind:src="ImageGamerFit" class="gamerFitImage">
                <div class="imageLevel">
                    <img v-bind:src="ImageLevel1" class="imageLevel">
                </div>
            </div>
        </div>
    </div>

    <ul style="text-align: center;">
        <p>Level 1 starts off easy and slowly gets harder!</p>
        <p>You will see how long you should play the video game at the top of each page.</p>
        <p>Let your fitness coach know how much you are enjoying the games or if you are having problems.</p>
        <p>We are here to support you! Get out there and be active!</p>
        <br>
    </ul> 
<details  style="text-align:left;">
<summary>LEVEL 1 - WEEK 1</summary>
    <form @submit.prevent="submitForm1">
    <div class="container">
        <div class="title">
            <div class="gamerFitImage">
                <img v-bind:src="ImageGamerFit" class="gamerFitImage">
            </div>
        </div>
    </div>
    <p style="font: 30px; text-align: center;"><b>Week 1 - Level 1</b></p>
    <p style="font: 40px; text-align: center;"><b>My Exergaming Challenge Time Goal:</b> 10 minutes per session</p>
    <p style="font: 40px; text-align: center;"><b>My Daily Step Goal:</b> 2000 steps or more each day this week</p>
    <p style="font: 30px; text-align: center;">***Use your Fitbit to track your steps each day***</p>
    <br>
    <!-- Level 1 Table WEEK 1 -->
    
    <table style="width: 75%; margin: 0 auto;">
        <thead>
            <tr>
                <th><b>CHALLENGE</b></th>
                <th><b>DAY</b></th>
                <th><b>PLAY</b></th>
                <th><b>COMPLETED?</b></th>
                <th><b>MINUTES</b></th>
            </tr>
        </thead>
        <tbody>
            <td>#1</td>
                <td>
                    <p>Monday</p>
                    <input type="checkbox" id="checkbox10" v-model="day1[0]">
                    <p>Tuesday</p>
                    <input type="checkbox" id="checkbox20" v-model="day2[0]">
                </td>
                <td><b>Ring Fit (Lowest Difficulty)</b>
                    <p>Play the following from the Quick play menu: </p>
                    <p>Minigames: </p>
                    <ul>
                        <li>Robo-wrecker</li>
                        <li>Squat Goals</li>
                        <li>Core Crushing</li>
                    </ul> 
                    <p>Jogging: </p>
                    <ul>
                        <li>Beginner</li>
                        <li>Monster Den</li>
                    </ul> 
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox1c0" v-model="is1Completed[0]">
                </td>
                <td><input v-model="minutes1[0]" placeholder="Enter minutes"></td>
        </tbody>
        <tbody>
            <tr>
                <td>#2</td>
                <td>
                    <p>Wednesday</p>
                    <input type="checkbox" id="checkbox30" v-model="day3[0]">
                    <p>Thursday</p>
                    <input type="checkbox" id="checkbox40" v-model="day4[0]">
                </td>
                <td><b>Just Dance 2021</b>
                    <p>Play the following from the song menu in Just Dance mode: </p>
                    <ul>
                        <li>Adore You</li>
                        <li>Blinding Lights</li>
                        <li>Paca Dance</li>
                    </ul> 
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox2c0" v-model="is2Completed[0]">
                </td>
                <td><input v-model="minutes2[0]" placeholder="Enter minutes"></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>#3</td>
                <td>
                    <p>Friday</p>
                    <input type="checkbox" id="checkbox50" v-model="day5[0]">
                    <p>Saturday</p>
                    <input type="checkbox" id="checkbox60" v-model="day6[0]">
                    <p>Sunday</p>
                    <input type="checkbox" id="checkbox70" v-model="day7[0]">
                </td>
                <td><b>Ring Fit (Lowest Difficulty)</b>
                    <p>Play the following from the Quick play menu: </p>
                    <p>Jogging: </p>
                    <ul>
                        <li>Transient Temple</li>
                        <li>Beginner</li>
                    </ul> 
                    <p>Simple: </p>
                    <ul>
                        <li>Deltiods Challenge</li>
                    </ul> 
                    <p>Set: </p>
                    <ul>
                        <li>Trapezius</li>
                    </ul> 
                    <p>Minigames: </p>
                    <ul>
                        <li>Crate Crusher</li>
                    </ul> 
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox3c0" v-model="is3Completed[0]">
                </td>
                <td><input v-model="minutes3[0]" placeholder="Enter minutes"></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>#4</td>
                <p> Number of days you met your 2000 steps per day goal: </p> 
                <td class="row"><input v-model="stepsDays[0]" placeholder="Enter number of days you met your steps per day goal" style="width: 100%;"></td>
            </tr>
        </tbody>
    </table>
    <div><button id="submit1" type="submit">Save</button></div>
    </form>
    <br>
    <p styles="font-size: 20px;"><b>My Progress</b></p>
    <table style="width: 75%; margin: 0 auto;">
        <tbody>
            <tr>
                <td class="aligning" style="background-color: yellow;">1</td>
                <td class="aligning">2</td>
                <td class="aligning">3</td>
                <td class="aligning">4</td>
                <td class="aligning">5</td>
                <td class="aligning">6</td>
                <td class="aligning">7</td>
                <td class="aligning">8</td>
                <td class="aligning">9</td>
                <td class="aligning">10</td>
                <td class="aligning">11</td>
                <td class="aligning">12</td>
            </tr>
        </tbody>
    </table>
</details>
    <!-- Level 1 Table WEEK 2 -->
    <details  style="text-align:left;">
    <summary>LEVEL 1 - WEEK 2</summary>
    <form @submit.prevent="submitForm2">
    <div class="container">
        <div class="title">
            <div class="gamerFitImage">
                <img v-bind:src="ImageGamerFit" class="gamerFitImage">
            </div>
        </div>
    </div>
    <p style="font: 30px; text-align: center;"><b>Week 2 - Level 1</b></p>
    <p style="font: 40px; text-align: center;"><b>My Exergaming Challenge Time Goal:</b> 15 minutes per session</p>
    <p style="font: 40px; text-align: center;"><b>My Daily Step Goal:</b> 2250 steps or more each day this week</p>
    <p style="font: 30px; text-align: center;">***Use your Fitbit to track your steps each day***</p>
    <br>
    <table style="width: 75%; margin: 0 auto;">
        <thead>
            <tr>
                <th><b>CHALLENGE</b></th>
                <th><b>DAY</b></th>
                <th><b>PLAY</b></th>
                <th><b>COMPLETED?</b></th>
                <th><b>MINUTES</b></th>
            </tr>
        </thead>
        <tbody>
            <td>#1</td>
                <td>
                    <p>Monday</p>
                    <input type="checkbox" id="checkbox11" v-model="day1[1]">
                    <p>Tuesday</p>
                    <input type="checkbox" id="checkbox21" v-model="day2[1]">
                </td>
                <td><b>Ring Fit (Lowest Difficulty)</b>
                    <p>Rythm Game menu; select Arms and Legs menu: </p>
                    <ul>
                        <li>Fit Battle</li>
                        <li>Boss Battle</li>
                        <li>Ground Theme(Band Performance)</li>
                        <li>Super Mario Bros.</li>
                    </ul> 
                    <p>Jogging: </p>
                    <ul>
                        <li>Trotter's Grove</li>
                        <li>Monster Den</li>
                    </ul> 
                    <p>Minigames: </p>
                    <ul>
                        <li>Bootstrap Tower</li>
                        <li>Squattery Wheel</li>
                    </ul> 
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox1c0" v-model="is1Completed[0]">
                </td>
                <td><input v-model="minutes1[0]" placeholder="Enter minutes"></td>
        </tbody>
        <tbody>
            <tr>
                <td>#2</td>
                <td>
                    <p>Wednesday</p>
                    <input type="checkbox" id="checkbox30" v-model="day3[0]">
                    <p>Thursday</p>
                    <input type="checkbox" id="checkbox40" v-model="day4[0]">
                </td>
                <td><b>Just Dance 2021</b>
                    <p>Play the following from the song menu in Just Dance mode: </p>
                    <ul>
                        <li>Paca Dance</li>
                        <li>Senorita</li>
                        <li>Temperature</li>
                        <li>Dibby Dibby Sound</li>
                    </ul> 
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox2c0" v-model="is2Completed[0]">
                </td>
                <td><input v-model="minutes2[0]" placeholder="Enter minutes"></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>#3</td>
                <td>
                    <p>Friday</p>
                    <input type="checkbox" id="checkbox50" v-model="day5[0]">
                    <p>Saturday</p>
                    <input type="checkbox" id="checkbox60" v-model="day6[0]">
                    <p>Sunday</p>
                    <input type="checkbox" id="checkbox70" v-model="day7[0]">
                </td>
                <td><b>Ring Fit (Lowest Difficulty)</b>
                    <p>Play the following from the Quick play menu: </p>
                    <p>Jogging: </p>
                    <ul>
                        <li>Starting-Block Bridge</li>
                    </ul> 
                    <p>Set: </p>
                    <ul>
                        <li>Back Set</li>
                        <li>Core Set</li>
                    </ul> 
                    <b>Just Dance 2021</b>
                    <p>Play the following from the song menu in Just Dance mode: </p>
                    <ul>
                        <li>Heat Seeker</li>
                        <li>Don't Start Now</li>
                        <li>Adore You</li>
                    </ul>
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox3c1" v-model="is3Completed[1]">
                </td>
                <td><input v-model="minutes3[1]" placeholder="Enter minutes"></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>#4</td>
                <p> Number of days you met your 2000 steps per day goal: </p> 
                <td class="row"><input v-model="stepsDays[1]" placeholder="Enter number of days you met your steps per day goal" style="width: 100%;"></td>
            </tr>
        </tbody>
    </table>
    <div><button id= "submit2" type="submit">Save</button></div>
    </form>
    <br>
    <p styles="font-size: 20px;"><b>My Progress</b></p>
    <table style="width: 75%; margin: 0 auto;">
        <tbody>
            <tr>
                <td class="aligning" style="background-color: yellow;">1</td>
                <td class="aligning" style="background-color: yellow;">2</td>
                <td class="aligning">3</td>
                <td class="aligning">4</td>
                <td class="aligning">5</td>
                <td class="aligning">6</td>
                <td class="aligning">7</td>
                <td class="aligning">8</td>
                <td class="aligning">9</td>
                <td class="aligning">10</td>
                <td class="aligning">11</td>
                <td class="aligning">12</td>
            </tr>
        </tbody>
    </table>
    </details>
    <!-- Level 1 Table WEEK 3 -->
    <details  style="text-align:left;">
        <summary>LEVEL 1 - WEEK 3</summary>
    <form @submit.prevent="submitForm3">
    <div class="container">
        <div class="title">
            <div class="gamerFitImage">
                <img v-bind:src="ImageGamerFit" class="gamerFitImage">
            </div>
        </div>
    </div>
    <p style="font: 30px; text-align: center;"><b>Week 3 - Level 1</b></p>
    <p style="font: 40px; text-align: center;"><b>My Exergaming Challenge Time Goal:</b> 20 minutes per session</p>
    <p style="font: 40px; text-align: center;"><b>My Daily Step Goal:</b> 2500 steps or more each day this week</p>
    <p style="font: 30px; text-align: center;">***Use your Fitbit to track your steps each day***</p>
    <br>
    <table style="width: 75%; margin: 0 auto;">
        <thead>
            <tr>
                <th><b>CHALLENGE</b></th>
                <th><b>DAY</b></th>
                <th><b>PLAY</b></th>
                <th><b>COMPLETED?</b></th>
                <th><b>MINUTES</b></th>
            </tr>
        </thead>
        <tbody>
            <td>#1</td>
                <td>
                    <p>Monday</p>
                    <input type="checkbox" id="checkbox12" v-model="day1[2]">
                    <p>Tuesday</p>
                    <input type="checkbox" id="checkbox22" v-model="day2[2]">
                </td>
                <td><b>Ring Fit (Lowest Difficulty)</b>
                    <p>Play the following from the Quick play menu: </p>
                    <p>Jogging: </p>
                    <ul>
                        <li>Trotter's Grove</li>
                    </ul>
                    <p>Set: </p>
                    <ul>
                        <li>Glutes Set</li>
                        <li>Aerobic Set</li>
                    </ul> 
                    <p>Minigames: </p>
                    <ul>
                        <li>Thigh Rider</li>
                        <li>Smack Back</li>
                    </ul> 
                    <b>Just Dance 2021</b>
                    <p>Play the following from the song menu in Just Dance mode: </p>
                    <ul>
                        <li>In the Navy</li>
                        <li>Feel Special</li>
                        <li>Kulikitaka</li>
                    </ul> 
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox1c0" v-model="is1Completed[0]">
                </td>
                <td><input v-model="minutes1[0]" placeholder="Enter minutes"></td>
        </tbody>
        <tbody>
            <tr>
                <td>#2</td>
                <td>
                    <p>Wednesday</p>
                    <input type="checkbox" id="checkbox30" v-model="day3[0]">
                    <p>Thursday</p>
                    <input type="checkbox" id="checkbox40" v-model="day4[0]">
                </td>
                <td><b>Just Dance 2021</b>
                    <p>Play 15-Minute Soft Workout from the playlists menu in Just Dance mode: </p>
                    <ul>
                        <li>Say So</li>
                        <li>Bailando</li>
                        <li>Georgia</li>
                        <li>YO LE LLEGO</li>
                        <li>The Other Side(from Trolls World Tour)</li>
                    </ul> 
                    <p>Song menu in Just Dance mode: </p>
                    <ul>
                        <li>Heat Seeker</li>
                    </ul> 
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox2c0" v-model="is2Completed[0]">
                </td>
                <td><input v-model="minutes2[0]" placeholder="Enter minutes"></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>#3</td>
                <td>
                    <p>Friday</p>
                    <input type="checkbox" id="checkbox50" v-model="day5[0]">
                    <p>Saturday</p>
                    <input type="checkbox" id="checkbox60" v-model="day6[0]">
                    <p>Sunday</p>
                    <input type="checkbox" id="checkbox70" v-model="day7[0]">
                </td>
                <td><b>Ring Fit (Lowest Difficulty)</b>
                    <p>Rythm Game menu; menu select Arms and Legs: </p>
                    <ul>
                        <li>Four Masters Battle</li>
                        <li>Battle Gym</li>
                        <li>Ground Theme(Band Performance)</li>
                        <li>Super Mario Bros.</li>
                        <li>Breath of the Wild Medley</li>
                    </ul> 
                    <p>Play the following from the Quick play menu: </p>
                    <p>Minigames: </p>
                    <ul>
                        <li>Bank Balance</li>
                        <li>Robo-wrecker</li>
                    </ul> 
                    <b>Just Dance 2021</b>
                    <p>Play the following from the song menu in Just Dance mode: </p>
                    <ul>
                        <li>Get Down</li>
                        <li>Runaway(U & I)</li>
                        <li>Dibby Dibby Sound</li>
                    </ul>
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox3c2" v-model="is3Completed[2]">
                </td>
                <td><input v-model="minutes3[2]" placeholder="Enter minutes"></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>#4</td>
                <p> Number of days you met your 2000 steps per day goal: </p> 
                <td class="row"><input v-model="stepsDays[2]" placeholder="Enter number of days you met your steps per day goal" style="width: 100%;"></td>
            </tr>
        </tbody>
    </table>
    <div><button id="submit3" type="submit">Save</button></div>
    </form>
    <br>
    <p styles="font-size: 20px;"><b>My Progress</b></p>
    <table style="width: 75%; margin: 0 auto;">
        <tbody>
            <tr>
                <td class="aligning" style="background-color: yellow;">1</td>
                <td class="aligning" style="background-color: yellow;">2</td>
                <td class="aligning" style="background-color: yellow;">3</td>
                <td class="aligning">4</td>
                <td class="aligning">5</td>
                <td class="aligning">6</td>
                <td class="aligning">7</td>
                <td class="aligning">8</td>
                <td class="aligning">9</td>
                <td class="aligning">10</td>
                <td class="aligning">11</td>
                <td class="aligning">12</td>
            </tr>
        </tbody>
    </table>
    </details>
</details>
<!-----------------------------------Level 2 Table ------------------------------------->
<details  style="text-align:left;">
    <summary>LEVEL 2</summary>
    <div class="container">
        <div class="title">
            <div class="gamerFitImage">
                <img v-bind:src="ImageGamerFit" class="gamerFitImage">
                <div class="imageLevel">
                    <img v-bind:src="ImageLevel2" class="imageLevel">
                </div>
            </div>
        </div>
    </div>

    <ul style="text-align: center;">
        <p>Wow! You've been doing GREAT so far!</p>
        <p>Now that you have made it to level 2, your Challenges are going to get a little tougher, but you are ready!</p>
        <p>If a Challenge tells you to play a sport of your choice in Kinect Sports Rivals for a certain number of minutes, this means that you get to pick the sport you play in Quick Play mode.</p>
        <p>Remember that you can break your exergame sessions up into shorter sessions throughout the day if you don’t have time for one long session.</p>
        <p>Have fun with it!</p>

        
    </ul> 
    <details  style="text-align:left;">
    <summary>LEVEL 2 - WEEK 4</summary>
        <br>
    <form @submit.prevent="submitForm4">
    <!-- Level 2 Table WEEK 4 -->
    <div class="container">
        <div class="title">
            <div class="gamerFitImage">
                <img v-bind:src="ImageGamerFit" class="gamerFitImage">
            </div>
        </div>
    </div>
    <p style="font: 30px; text-align: center;"><b>Week 4 - Level 2</b></p>
    <p style="font: 40px; text-align: center;"><b>My Exergaming Challenge Time Goal:</b> 30 minutes per session</p>
    <p style="font: 40px; text-align: center;"><b>My Daily Step Goal:</b> 3250 steps or more each day this week</p>
    <p style="font: 30px; text-align: center;">***Use your Fitbit to track your steps each day***</p>
    <br>
    
    <table style="width: 75%; margin: 0 auto;">
        <thead>
            <tr>
                <th><b>CHALLENGE</b></th>
                <th><b>DAY</b></th>
                <th><b>PLAY</b></th>
                <th><b>COMPLETED?</b></th>
                <th><b>MINUTES</b></th>
            </tr>
        </thead>
        <tbody>
            <td>#1</td>
                <td>
                    <p>Monday</p>
                    <input type="checkbox" id="checkbox13" v-model="day1[3]">
                    <p>Tuesday</p>
                    <input type="checkbox" id="checkbox23" v-model="day2[3]">
                </td>
                <td><b>Ring Fit(Raise Difficulty Slightly)</b>
                    <p>Play Adventure Mode: Play for 15 minutes of total exercise time; take breaks as needed: </p>
                    <ul>
                        <li>Start-World 1: In the First Place</li>
                    </ul>
                    <p>Minigames </p>
                    <ul>
                        <li>Squattery Wheel</li>
                        <li>Crate Cracker</li>
                        <li>Bank Balance</li>
                    </ul>
                    <b>Just Dance 2021</b>
                    <p>Play the following from the song menu in Just Dance mode: </p>
                    <ul>
                        <li>The Othe Side(Form Trolls World Tour)</li>
                        <li>Say So</li>
                        <li>You've Got a Friend in Me</li>
                        <li>Rock n' Roll Princess(Kids Mode)</li>
                    </ul> 
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox1c3" v-model="is1Completed[3]">
                </td>
                <td><input v-model="minutes1[3]" placeholder="Enter minutes"></td>
        </tbody>
        <tbody>
            <tr>
                <td>#2</td>
                <td>
                    <p>Wednesday</p>
                    <input type="checkbox" id="checkbox33" v-model="day3[3]">
                    <p>Thursday</p>
                    <input type="checkbox" id="checkbox43" v-model="day4[3]">
                </td>
                <td><b>Just Dance 2021</b>
                    <ul>
                        <li>Play 4 songs from the happy Vibes playlist in Just Dance mode</li>
                    </ul> 
                    <p>Then play these songs from the song menu:</p>
                    <ul>
                        <li>YO LE LLEGO</li>
                        <li>Zenit</li>
                        <li>UNO</li>
                        <li>Volar</li>
                        <li>Georgia</li>
                    </ul> 
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox2c3" v-model="is2Completed[3]">
                </td>
                <td><input v-model="minutes2[3]" placeholder="Enter minutes"></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>#3</td>
                <td>
                    <p>Friday</p>
                    <input type="checkbox" id="checkbox53" v-model="day5[3]">
                    <p>Saturday</p>
                    <input type="checkbox" id="checkbox63" v-model="day6[3]">
                    <p>Sunday</p>
                    <input type="checkbox" id="checkbox73" v-model="day7[3]">
                </td>
                <td><b>Ring Fit</b>
                <p>Play Adventure Mode: Place for 15 minutes of total exercise time; take breaks as needed</p>
                    <b>Just Dance 2021</b>
                    <p>Choose any 4 songs from the Simple Dances playlist in Just Dance mode</p>
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox3c3" v-model="is3Completed[3]">
                </td>
                <td><input v-model="minutes3[3]" placeholder="Enter minutes"></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>#4</td>
                <p> Number of days you met your 2000 steps per day goal: </p> 
                <td class="row"><input v-model="stepsDays[3]" placeholder="Enter number of days you met your steps per day goal" style="width: 100%;"></td>
            </tr>
        </tbody>
    </table>
    <br>
    <div><button id="submit4" type="submit">Save</button></div>
    </form>
    <p styles="font-size: 20px;"><b>My Progress</b></p>
    <table style="width: 75%; margin: 0 auto;">
        <tbody>
            <tr>
                <td class="aligning" style="background-color: yellow;">1</td>
                <td class="aligning" style="background-color: yellow;">2</td>
                <td class="aligning" style="background-color: yellow;">3</td>
                <td class="aligning" style="background-color: #4D71A3;">4</td>
                <td class="aligning">5</td>
                <td class="aligning">6</td>
                <td class="aligning">7</td>
                <td class="aligning">8</td>
                <td class="aligning">9</td>
                <td class="aligning">10</td>
                <td class="aligning">11</td>
                <td class="aligning">12</td>
            </tr>
        </tbody>
    </table>
</details>
    <!-- Level 2 Table WEEK 5 -->
<details  style="text-align:left;">
    <summary>LEVEL 2 - WEEK 5</summary>
    <form @submit.prevent="submitForm5">
    <div class="container">
        <div class="title">
            <div class="gamerFitImage">
                <img v-bind:src="ImageGamerFit" class="gamerFitImage">
            </div>
        </div>
    </div>
    <p style="font: 30px; text-align: center;"><b>Week 5 - Level 2</b></p>
    <p style="font: 40px; text-align: center;"><b>My Exergaming Challenge Time Goal:</b> 40 minutes per session</p>
    <p style="font: 40px; text-align: center;"><b>My Daily Step Goal:</b> 4000 steps or more each day this week</p>
    <p style="font: 30px; text-align: center;">***Use your Fitbit to track your steps each day***</p>
    <br>

    <table style="width: 75%; margin: 0 auto;">
        <thead>
            <tr>
                <th><b>CHALLENGE</b></th>
                <th><b>DAY</b></th>
                <th><b>PLAY</b></th>
                <th><b>COMPLETED?</b></th>
                <th><b>MINUTES</b></th>
            </tr>
        </thead>
        <tbody>
            <td>#1</td>
                <td>
                    <p>Monday</p>
                    <input type="checkbox" id="checkbox14" v-model="day1[4]">
                    <p>Tuesday</p>
                    <input type="checkbox" id="checkbox24" v-model="day2[4]">
                </td>
                <td><b>Just Dance 2021</b>
                    <p>Play form the following menu from Just Dance mode:  </p>
                    <ul>
                        <li>You've Got a Friend in Me</li>
                        <li>Rock n' Roll Princess</li>
                        <li>Volar</li>
                        <li>Georgia</li>
                        <li>Heat Seeker</li>
                        <li>Adore You</li>
                    </ul>
                    <p>Pick any 6 songs from the song menu </p>
                    
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox1c4" v-model="is1Completed[4]">
                </td>
                <td><input v-model="minutes1[4]" placeholder="Enter minutes"></td>
        </tbody>
        <tbody>
            <tr>
                <td>#2</td>
                <td>
                    <p>Wednesday</p>
                    <input type="checkbox" id="checkbox34" v-model="day3[4]">
                    <p>Thursday</p>
                    <input type="checkbox" id="checkbox44" v-model="day4[4]">
                </td>
                <td><b>Ring Fit</b>
                    <p>Play Adventure Mode: Play for 20 minutes of total exercise time; take breaks as needed(don’t forget to make smoothies in the game to recover!)</p>
                    <p>Minigames</p>
                    <ul>
                        <li>Bootstrap Tower</li>
                        <li>Aerochute</li>
                        <li>Bank Balance</li>
                    </ul> 
                    <b>Just Dance 2021</b>
                    <p>Play 15-Minute Soft Workout playlist in Just Dance mode</p>
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox2c4" v-model="is2Completed[4]">
                </td>
                <td><input v-model="minutes2[4]" placeholder="Enter minutes"></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>#3</td>
                <td>
                    <p>Friday</p>
                    <input type="checkbox" id="checkbox54" v-model="day5[4]">
                    <p>Saturday</p>
                    <input type="checkbox" id="checkbox64" v-model="day6[4]">
                    <p>Sunday</p>
                    <input type="checkbox" id="checkbox74" v-model="day7[4]">
                </td>
                <td><b>Ring Fit</b>
                <p>Play 10 minutes of Rhythm Game mode; set to Core+Legs and select any song</p>
                <b>Just Dance 2021</b>
                <p>Create and play your own playlist in Just Dance mode; add 7 songs</p>
                <p>Play the following from the song menu:</p>
                <ul>
                        <li>The Weekend</li>
                        <li>Lacrimosa</li>
                        <li>Kulikitaka</li>
                    </ul> 
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox3c4" v-model="is3Completed[4]">
                </td>
                <td><input v-model="minutes3[4]" placeholder="Enter minutes"></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>#4</td>
                <p> Number of days you met your 2000 steps per day goal: </p> 
                <td class="row"><input v-model="stepsDays[4]" style="width: 100%;"></td>
            </tr>
        </tbody>
    </table>
    <br>
    <div><button id="submit5" type="submit">Save</button></div>
    </form>
    <p styles="font-size: 20px;"><b>My Progress</b></p>
    <table style="width: 75%; margin: 0 auto;">
        <tbody>
            <tr>
                <td class="aligning" style="background-color: yellow;">1</td>
                <td class="aligning" style="background-color: yellow;">2</td>
                <td class="aligning" style="background-color: yellow;">3</td>
                <td class="aligning" style="background-color: #4D71A3;">4</td>
                <td class="aligning" style="background-color: #4D71A3;">5</td>
                <td class="aligning">6</td>
                <td class="aligning">7</td>
                <td class="aligning">8</td>
                <td class="aligning">9</td>
                <td class="aligning">10</td>
                <td class="aligning">11</td>
                <td class="aligning">12</td>
            </tr>
        </tbody>
    </table>
</details>
    <!-- Level 2 Table WEEK 6 -->
<details  style="text-align:left;">
    <summary>LEVEL 2 - WEEK 6</summary>
    <form @submit.prevent="submitForm6">
    <div class="container">
        <div class="title">
            <div class="gamerFitImage">
                <img v-bind:src="ImageGamerFit" class="gamerFitImage">
            </div>
        </div>
    </div>
    <p style="font: 30px; text-align: center;"><b>Week 6 - Level 2</b></p>
    <p style="font: 40px; text-align: center;"><b>My Exergaming Challenge Time Goal:</b> 45 minutes per session</p>
    <p style="font: 40px; text-align: center;"><b>My Daily Step Goal:</b> 5000 steps or more each day this week</p>
    <p style="font: 30px; text-align: center;">***Use your Fitbit to track your steps each day***</p>
    <br>

    <table style="width: 75%; margin: 0 auto;">
        <thead>
            <tr>
                <th><b>CHALLENGE</b></th>
                <th><b>DAY</b></th>
                <th><b>PLAY</b></th>
                <th><b>COMPLETED?</b></th>
                <th><b>MINUTES</b></th>
            </tr>
        </thead>
        <tbody>
            <td>#1</td>
                <td>
                    <p>Monday</p>
                    <input type="checkbox" id="checkbox15" v-model="day1[5]">
                    <p>Tuesday</p>
                    <input type="checkbox" id="checkbox25" v-model="day2[5]">
                </td>
                <td><b>Ring Fit (Riase Difficulty Slightly)</b>
                    <p>Play Adventure Mode: Play for 20 minutes of total exercise; take breaks as needed(don’t forget to make smoothies in the game for recovery!)</p>
                    <p>Play the following in Rhythm Game mode; set to Core+Legs:</p>
                    <ul>
                        <li>Jump Up, Super Star!</li>
                        <li>Wii Fit Medley</li>
                        <li>Ground Theme(Band Performance)</li>
                        <li>Super Mario Bros.</li>
                    </ul>
                    <p>Minigames</p>
                    <ul>
                        <li>Dreadmill</li>
                        <li>Smack Back</li>
                        <li>Core Crushing</li>
                    </ul>
                    <b>Just Dance 2021</b>
                    <p>Play 4 songs from the Must Dance 2021 playlist in Just Dance mode</p>
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox1c5" v-model="is1Completed[5]">
                </td>
                <td><input v-model="minutes1[5]" placeholder="Enter minutes"></td>
        </tbody>
        <tbody>
            <tr>
                <td>#2</td>
                <td>
                    <p>Wednesday</p>
                    <input type="checkbox" id="checkbox35" v-model="day3[5]">
                    <p>Thursday</p>
                    <input type="checkbox" id="checkbox45" v-model="day4[5]">
                </td>
                <td><b>Ring Fit</b>
                    <p>Play the following from the Quick Play menu:</p>
                    <p>Set: </p>
                    <ul>
                        <li>Chest Set</li>
                        <li>Upper Arm Set</li>
                        <li>Flexibility Set</li>
                    </ul> 
                    <p>Play Adventure Mode: Play for 10 minutes of total exercise time; breaks as needed </p>
                    <b>Ring Fit</b>
                    <ul>
                        <li>Play 15-Minute Workout playlist in Just Dance mode</li>
                        <li>Play 5 songs from the World Tour playlist</li>
                    </ul> 
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox2c5" v-model="is2Completed[5]">
                </td>
                <td><input v-model="minutes2[5]" placeholder="Enter minutes"></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>#3</td>
                <td>
                    <p>Friday</p>
                    <input type="checkbox" id="checkbox55" v-model="day5[5]">
                    <p>Saturday</p>
                    <input type="checkbox" id="checkbox65" v-model="day6[5]">
                    <p>Sunday</p>
                    <input type="checkbox" id="checkbox75" v-model="day7[5]">
                </td>
                <td><b>Just Dance 2021</b>
                <p>Play the following from the song menu in Just Dance mode:</p>
                    <ul>
                        <li>Dibby Dibby Song</li>
                        <li>Alexandrie Alexandra</li>
                        <li>Georgia</li>
                        <li>Get Get Down</li>
                        <li>Ice Cream</li>
                        <li>Lacrimosa</li>
                        <li>Runaway(U & I)</li>
                    </ul> 
                    <p>Play 3 songs from the Simple Dances playlist</p>
                    <b>Ring Fit</b>
                    <ul>
                        <li>Play Adventure mode: Play 15 minutes of total exercise time; breaks as needed (make sure you have enough smoothies in the game for recovery!)</li>
                    </ul> 
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox3c5" v-model="is3Completed[5]">
                </td>
                <td><input v-model="minutes3[5]" placeholder="Enter minutes"></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>#4</td>
                <p> Number of days you met your 2000 steps per day goal: </p> 
                <td class="row"><input v-model="stepsDays[5]" placeholder="Enter number of days you met your steps per day goal" style="width: 100%;"></td>
            </tr>
        </tbody>
    </table>
    <br>
    <div><button id="submit6" type="submit">Save</button></div>
    </form>
    <p styles="font-size: 20px;"><b>My Progress</b></p>
    <table style="width: 75%; margin: 0 auto;">
        <tbody>
            <tr>
                <td class="aligning" style="background-color: yellow;">1</td>
                <td class="aligning" style="background-color: yellow;">2</td>
                <td class="aligning" style="background-color: yellow;">3</td>
                <td class="aligning" style="background-color: #4D71A3;">4</td>
                <td class="aligning" style="background-color: #4D71A3;">5</td>
                <td class="aligning" style="background-color: #4D71A3;">6</td>
                <td class="aligning">7</td>
                <td class="aligning">8</td>
                <td class="aligning">9</td>
                <td class="aligning">10</td>
                <td class="aligning">11</td>
                <td class="aligning">12</td>
            </tr>
        </tbody>
    </table>
</details>

</details>
    <!---------------------------------- Level 3 Table -------------------------------------->
    <details style="text-align:left;">
    <summary>LEVEL 3</summary>
        <br>
    <div class="container">
        <div class="title">
            <div class="gamerFitImage">
                <img v-bind:src="ImageGamerFit" class="gamerFitImage">
                <div class="imageLevel">
                    <img v-bind:src="ImageLevel3" class="imageLevel">
                </div>
            </div>
        </div>
    </div>

    <ul style="text-align: center;">
        <p>You're moving up to level 3... your sessions won't get any longer after this level!</p>
        <p>Remeber that you can break your exergame sessions up tinto short sessions throughout the day if you don't have time for one long session.</p>
        <p>Keep challenging yourself, now that you know you can do it!</p>
        <br>
    </ul> 

    <!-- Level 3 Table WEEK 7 -->
    <details  style="text-align:left;">
    <summary>LEVEL 3 - WEEK 7</summary>
    <form @submit.prevent="submitForm7">
    <div class="container">
        <div class="title">
            <div class="gamerFitImage">
                <img v-bind:src="ImageGamerFit" class="gamerFitImage">
            </div>
        </div>
    </div>
    <p style="font: 30px; text-align: center;"><b>Week 7 - Level 3</b></p>
    <p style="font: 40px; text-align: center;"><b>My Exergaming Challenge Time Goal:</b> 50 minutes per session</p>
    <p style="font: 40px; text-align: center;"><b>My Daily Step Goal:</b> 5500 steps or more each day this week</p>
    <p style="font: 30px; text-align: center;">***Use your Fitbit to track your steps each day***</p>
    <br>

    <table style="width: 75%; margin: 0 auto;">
        <thead>
            <tr>
                <th><b>CHALLENGE</b></th>
                <th><b>DAY</b></th>
                <th><b>PLAY</b></th>
                <th><b>COMPLETED?</b></th>
                <th><b>MINUTES</b></th>
            </tr>
        </thead>
        <tbody>
            <td>#1</td>
                <td>
                    <p>Monday</p>
                    <input type="checkbox" id="checkbox16" v-model="day1[6]">
                    <p>Tuesday</p>
                    <input type="checkbox" id="checkbox26" v-model="day2[6]">
                </td>
                <td><b>Ring Fit (Riase Difficulty Slightly)</b>
                    <p>Play Adventure Mode: Play for 25 minutes of total exercise; take breaks as needed(don’t forget to make smoothies in the game for recovery!)</p>
                    <p>Minigames: </p>
                    <ul>
                        <li>Gluting Gallery (play twice)</li>
                    </ul>
                    <p>Set: </p>
                    <ul>
                        <li>Posture</li>
                        <li>Back</li>
                    </ul>
                    <b>Just Dance 2021</b>
                    <p>Play the following from the song menu in Just Dance mode:</p>
                    <ul>
                        <li>ou’ve Got A Friend In Me</li>
                        <li>Zenit Onuka</li>
                        <li>Volar</li>
                        <li>Say So</li>
                        <li>The Other Side(from Trolls World Tour)</li>
                        <li>Senorita</li>
                    </ul>
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox1c6" v-model="is1Completed[6]">
                </td>
                <td><input v-model="minutes1[6]" placeholder="Enter minutes"></td>
        </tbody>
        <tbody>
            <tr>
                <td>#2</td>
                <td>
                    <p>Wednesday</p>
                    <input type="checkbox" id="checkbox36" v-model="day3[6]">
                    <p>Thursday</p>
                    <input type="checkbox" id="checkbox46" v-model="day4[6]">
                </td>
                <td><b>Ring Fit (Riase Difficulty Slightly)</b>
                    <p>Play Adventure Mode: Play for 25 minutes of total exercise; take breaks as needed(don’t forget to make smoothies in the game for recovery!)</p>
                    <p>Play the following in the Rhythm Game mode; set to Core+Legs:</p>
                    <ul>
                        <li>Jump Up, Super Star!</li>
                        <li>Night Road</li>
                        <li>Wii Fit Medley</li>
                    </ul>
                    <p>Set: </p>
                    <ul>
                        <li>Core Set</li>
                    </ul>
                    <p>Challenge</p>
                    <ul>
                        <li>Spinal Erectors</li>
                    </ul>
                    <b>Just Dance 2021</b>
                    <p>Select 4 songs from the Simple Dances playlist in Just Dance mode</p>
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox2c6" v-model="is2Completed[6]">
                </td>
                <td><input v-model="minutes2[6]" placeholder="Enter minutes"></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>#3</td>
                <td>
                    <p>Friday</p>
                    <input type="checkbox" id="checkbox56" v-model="day5[6]">
                    <p>Saturday</p>
                    <input type="checkbox" id="checkbox66" v-model="day6[6]">
                    <p>Sunday</p>
                    <input type="checkbox" id="checkbox76" v-model="day7[6]">
                </td>
                <td><b>Just Dance 2021</b>
                    <ul>
                        <li>Play 5 songs from the Happy Vibes playlist in Just Dance mode</li>
                        <li>Create and play a playlist of 5 songs </li>
                    </ul> 
                    <b>Ring Fit</b>
                        <p>Play Adventure Mode: Play 15 minutes of total exercise time; take breaks as needed(don’t forget to make/buy smoothies in the game for recovery!)</p>
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox3c6" v-model="is3Completed[6]">
                </td>
                <td><input v-model="minutes3[6]" placeholder="Enter minutes"></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>#4</td>
                <p> Number of days you met your 2000 steps per day goal: </p> 
                <td class="row"><input v-model="stepsDays[6]" placeholder="Enter number of days you met your steps per day goal" style="width: 100%;"></td>
            </tr>
        </tbody>
    </table>
    <br>
    <div><button id="submit7" type="submit">Save</button></div>
    </form>
    <p styles="font-size: 20px;"><b>My Progress</b></p>
    <table style="width: 75%; margin: 0 auto;">
        <tbody>
            <tr>
                <td class="aligning" style="background-color: yellow;">1</td>
                <td class="aligning" style="background-color: yellow;">2</td>
                <td class="aligning" style="background-color: yellow;">3</td>
                <td class="aligning" style="background-color: #4D71A3;">4</td>
                <td class="aligning" style="background-color: #4D71A3;">5</td>
                <td class="aligning" style="background-color: #4D71A3;">6</td>
                <td class="aligning" style="background-color: green;">7</td>
                <td class="aligning">8</td>
                <td class="aligning">9</td>
                <td class="aligning">10</td>
                <td class="aligning">11</td>
                <td class="aligning">12</td>
            </tr>
        </tbody>
    </table>
    </details>
    <!-- Level 3 Table WEEK 8 -->
    <details  style="text-align:left;">
    <summary>LEVEL 3 - WEEK 8</summary>
    <form @submit.prevent="submitForm8">
    <div class="container">
        <div class="title">
            <div class="gamerFitImage">
                <img v-bind:src="ImageGamerFit" class="gamerFitImage">
            </div>
        </div>
    </div>
    <p style="font: 30px; text-align: center;"><b>Week 8 - Level 3</b></p>
    <p style="font: 40px; text-align: center;"><b>My Exergaming Challenge Time Goal:</b> 60 minutes per session</p>
    <p style="font: 40px; text-align: center;"><b>My Daily Step Goal:</b> 6000 steps or more each day this week</p>
    <p style="font: 30px; text-align: center;">***Use your Fitbit to track your steps each day***</p>
    <br>

    <table style="width: 75%; margin: 0 auto;">
        <thead>
            <tr>
                <th><b>CHALLENGE</b></th>
                <th><b>DAY</b></th>
                <th><b>PLAY</b></th>
                <th><b>COMPLETED?</b></th>
                <th><b>MINUTES</b></th>
            </tr>
        </thead>
        <tbody>
            <td>#1</td>
                <td>
                    <p>Monday</p>
                    <input type="checkbox" id="checkbox17" v-model="day1[7]">
                    <p>Tuesday</p>
                    <input type="checkbox" id="checkbox27" v-model="day2[7]">
                </td>
                <td><b>Just Dance 2021</b>
                    <p>Play the Happy Vibes playlist in Just Dance Mode</p>
                    <p>Pick any 5 songs from the song menu in Just Dance mode</p>
                    <b>Ring Fit</b>
                    <p>Play the following in Rhythm Game mode; set to Arms + Legs (Advanced setting)</p>
                    <ul>
                        <li>Play Medium playlist</li>
                    </ul> 
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox1c7" v-model="is1Completed[7]">
                </td>
                <td><input v-model="minutes1[7]" placeholder="Enter minutes"></td>
        </tbody>
        <tbody>
            <tr>
                <td>#2</td>
                <td>
                    <p>Wednesday</p>
                    <input type="checkbox" id="checkbox37" v-model="day3[7]">
                    <p>Thursday</p>
                    <input type="checkbox" id="checkbox47" v-model="day4[7]">
                </td>
                <td><b>Just Dance 2016</b>
                    <p>Select the following from the Dance Party mode: </p>
                    <ul>
                        <li>No Control, I'm an Albatross, Kool Kontact, Stuck on a Feeling, I Got a Feeling</li>
                        <li>Pick any 4 songs</li>
                    </ul>
                    <p>Select the following from the Sweat and Playlist mode:</p>
                    <ul>
                        <li>Create and play custom playlist of 5 songs</li>
                    </ul>
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox2c7" v-model="is2Completed[7]">
                </td>
                <td><input v-model="minutes2[7]" placeholder="Enter minutes"></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>#3</td>
                <td>
                    <p>Friday</p>
                    <input type="checkbox" id="checkbox57" v-model="day5[7]">
                    <p>Saturday</p>
                    <input type="checkbox" id="checkbox67" v-model="day6[7]">
                    <p>Sunday</p>
                    <input type="checkbox" id="checkbox77" v-model="day7[7]">
                </td>
                <td><b>Shape Up</b>
                    <p>Select the following from the Training Quest menu(take breaks as needed): </p>
                    <ul>
                        <li>Play Beatmaster Cardio Quest Wk 2, Day 2</li>
                        <li>Play Luchador Muscle Quest Wk 2, Day 2</li>
                    </ul>
                    <p><b>Kinect Sports</b></p>
                    <ul>
                        <li>Play 25 minutes of a sport of your choise in Quick Play</li>
                    </ul>
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox3c7" v-model="is3Completed[7]">
                </td>
                <td><input v-model="minutes3[7]" placeholder="Enter minutes"></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>#4</td>
                <p> Number of days you met your 2000 steps per day goal: </p> 
                <td class="row"><input v-model="stepsDays[7]" placeholder="Enter number of days you met your steps per day goal" style="width: 100%;"></td>
            </tr>
        </tbody>
    </table>
    <br>
    <div><button id="submit8" type="submit">Save</button></div>
    </form>
    <p styles="font-size: 20px;"><b>My Progress</b></p>
    <table style="width: 75%; margin: 0 auto;">
        <tbody>
            <tr>
                <td class="aligning" style="background-color: yellow;">1</td>
                <td class="aligning" style="background-color: yellow;">2</td>
                <td class="aligning" style="background-color: yellow;">3</td>
                <td class="aligning" style="background-color: #4D71A3;">4</td>
                <td class="aligning" style="background-color: #4D71A3;">5</td>
                <td class="aligning" style="background-color: #4D71A3;">6</td>
                <td class="aligning" style="background-color: green;">7</td>
                <td class="aligning" style="background-color: green;">8</td>
                <td class="aligning">9</td>
                <td class="aligning">10</td>
                <td class="aligning">11</td>
                <td class="aligning">12</td>
            </tr>
        </tbody>
    </table>
    </details>
    <!-- Level 3 Table WEEK 9 -->
    <details  style="text-align:left;">
        <summary>LEVEL 3 - WEEK 9</summary>
        <form @submit.prevent="submitForm9">
    <div class="container">
        <div class="title">
            <div class="gamerFitImage">
                <img v-bind:src="ImageGamerFit" class="gamerFitImage">
            </div>
        </div>
    </div>
    <p style="font: 30px; text-align: center;"><b>Week 9 - Level 3</b></p>
    <p style="font: 40px; text-align: center;"><b>My Exergaming Challenge Time Goal:</b> 60 minutes per session</p>
    <p style="font: 40px; text-align: center;"><b>My Daily Step Goal:</b> 4250 steps or more each day this week</p>
    <p style="font: 30px; text-align: center;">***Use your Fitbit to track your steps each day***</p>
    <br>

    <table style="width: 75%; margin: 0 auto;">
        <thead>
            <tr>
                <th><b>CHALLENGE</b></th>
                <th><b>DAY</b></th>
                <th><b>PLAY</b></th>
                <th><b>COMPLETED?</b></th>
                <th><b>MINUTES</b></th>
            </tr>
        </thead>
        <tbody>
            <td>#1</td>
                <td>
                    <p>Monday</p>
                    <input type="checkbox" id="checkbox18" v-model="day1[8]">
                    <p>Tuesday</p>
                    <input type="checkbox" id="checkbox28" v-model="day2[8]">
                </td>
                <td><b>Just Dance 2016</b>
                    <p>Select the following from the Dance Party mode: </p>
                    <ul>
                        <li>Pick any 6 songs</li>
                    </ul>
                    <p>Select the following from the Sweat and Playlist mode:</p>
                    <ul>
                        <li>Create and play custom playlist of 7 songs</li>
                    </ul>
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox3c8" v-model="is1Completed[8]">
                </td>
                <td><input v-model="minutes1[8]" placeholder="Enter minutes"></td>
        </tbody>
        <tbody>
            <tr>
                <td>#2</td>
                <td>
                    <p>Wednesday</p>
                    <input type="checkbox" id="checkbox38" v-model="day3[8]">
                    <p>Thursday</p>
                    <input type="checkbox" id="checkbox48" v-model="day4[8]">
                </td>
                <td><b>Shape Up</b>
                    <p>Select the following from the Workout mode: </p>
                    <ul>
                        <li>Derby Skate, Mogul Bounce, Push Up Pump</li>
                    </ul>
                    <p>Select the following from the Training Quest menu(take breaks as needed): </p>
                    <ul>
                        <li>Play Beatmaster Cardio Quest Wk 2, Day 3</li>
                        <li>Play Luchador Muscle Quest Wk 2, Day 3</li>
                    </ul>
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox2c8" v-model="is2Completed[8]">
                </td>
                <td><input v-model="minutes2[8]" placeholder="Enter minutes"></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>#3</td>
                <td>
                    <p>Friday</p>
                    <input type="checkbox" id="checkbox58" v-model="day5[8]">
                    <p>Saturday</p>
                    <input type="checkbox" id="checkbox68" v-model="day6[8]">
                    <p>Sunday</p>
                    <input type="checkbox" id="checkbox78" v-model="day7[8]">
                </td>
                <td><b>Just Dance 2016</b>
                    <p>Select the following songs from the Dance Party mode: </p>
                    <ul>
                        <li>Pick any 7 songs</li>
                    </ul>
                    <p>Select the following from the Sweat and Playlist mode:</p>
                    <ul>
                        <li>Non-stop shuffle for 30 minutes</li>
                    </ul>
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox3c8" v-model="is3Completed[8]">
                </td>
                <td><input v-model="minutes3[8]" placeholder="Enter minutes"></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>#4</td>
                <p> Number of days you met your 2000 steps per day goal: </p> 
                <td class="row"><input v-model="stepsDays[8]" placeholder="Enter number of days you met your steps per day goal" style="width: 100%;"></td>
            </tr>
        </tbody>
    </table>
    <br>
    <div><button id="submit9" type="submit">Save</button></div>
    </form>
    <p styles="font-size: 20px;"><b>My Progress</b></p>
    <table style="width: 75%; margin: 0 auto;">
        <tbody>
            <tr>
                <td class="aligning" style="background-color: yellow;">1</td>
                <td class="aligning" style="background-color: yellow;">2</td>
                <td class="aligning" style="background-color: yellow;">3</td>
                <td class="aligning" style="background-color: #4D71A3;">4</td>
                <td class="aligning" style="background-color: #4D71A3;">5</td>
                <td class="aligning" style="background-color: #4D71A3;">6</td>
                <td class="aligning" style="background-color: green;">7</td>
                <td class="aligning" style="background-color: green;">8</td>
                <td class="aligning" style="background-color: green;">9</td>
                <td class="aligning">10</td>
                <td class="aligning">11</td>
                <td class="aligning">12</td>
            </tr>
        </tbody>
    </table>
    </details>
    </details>
    <!---------------------------------- Level 4 Table -------------------------------------->
    <details  style="text-align:left;">
    <summary>LEVEL 4</summary>
    <div class="container">
        <div class="title">
            <div class="gamerFitImage">
                <img v-bind:src="ImageGamerFit" class="gamerFitImage">
                <div class="imageLevel">
                    <img v-bind:src="ImageLevel4" class="imageLevel">
                </div>
            </div>
        </div>
    </div>

    <ul style="text-align: center;">
        <p>Congratulations... you made it to the last level of GamerFit!</p>
        <p>Your sessions don't get and longer so you can work even harder during the time you have!</p>
        <p>Remember that you can break your exergame sessions up into shorter sessions throughout the day if you dont have time for one long session.</p>
        <p>Let's finish this challenge!</p>
        <br>
    </ul> 
    <details  style="text-align:left;">
    <summary>LEVEL 4 - WEEK 10</summary>
    <form @submit.prevent="submitForm10">
    <!-- Level 4 Table WEEK 10 -->
    <div class="container">
        <div class="title">
            <div class="gamerFitImage">
                <img v-bind:src="ImageGamerFit" class="gamerFitImage">
            </div>
        </div>
    </div>
    <p style="font: 30px; text-align: center;"><b>Week 10 - Level 4</b></p>
    <p style="font: 40px; text-align: center;"><b>My Exergaming Challenge Time Goal:</b> 60 minutes per session</p>
    <p style="font: 40px; text-align: center;"><b>My Daily Step Goal:</b> 4500 steps or more each day this week</p>
    <p style="font: 30px; text-align: center;">***Use your Fitbit to track your steps each day***</p>
    <br>

    <table style="width: 75%; margin: 0 auto;">
        <thead>
            <tr>
                <th><b>CHALLENGE</b></th>
                <th><b>DAY</b></th>
                <th><b>PLAY</b></th>
                <th><b>COMPLETED?</b></th>
                <th><b>MINUTES</b></th>
            </tr>
        </thead>
        <tbody>
            <td>#1</td>
                <td>
                    <p>Monday</p>
                    <input type="checkbox" id="checkbox19" v-model="day1[9]">
                    <p>Tuesday</p>
                    <input type="checkbox" id="checkbox29" v-model="day2[9]">
                </td>
                <td><b>Shape Up</b>
                    <p>Select the following from Training Quest mode(take breaks as needed): </p>
                    <ul>
                        <li>Play Luchador Muscle Quest Wk 3, Day 1</li>
                        <li>Play Beatmaster Cardio Quest Wk 3, Day 1</li>
                        <li>Play Luchador Muscle Quest Wk 2, Day 2</li>
                    </ul> 
                    <p>Select the following from Workout mode: </p>
                    <ul>
                        <li>Derby Skate</li>
                        <li>Push Up Pump</li>
                    </ul> 
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox1c9" v-model="is1Completed[9]">
                </td>
                <td><input v-model="minutes1[9]" placeholder="Enter minutes"></td>
        </tbody>
        <tbody>
            <tr>
                <td>#2</td>
                <td>
                    <p>Wednesday</p>
                    <input type="checkbox" id="checkbox39" v-model="day3[9]">
                    <p>Thursday</p>
                    <input type="checkbox" id="checkbox49" v-model="day4[9]">
                </td>
                <td><b>Just Dance 2016</b>
                    <p>Select the following from Sweat and Playlist mode: </p>
                    <ul>
                        <li>Play non-stop shuffle for 45 minutes</li>
                    </ul>
                    <p>Select the following from Dance Party mode:</p>
                    <ul>
                        <li>Pick any 4 songs</li>
                    </ul>
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox2c9" v-model="is2Completed[9]">
                </td>
                <td><input v-model="minutes2[9]" placeholder="Enter minutes"></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>#3</td>
                <td>
                    <p>Friday</p>
                    <input type="checkbox" id="checkbox59" v-model="day5[9]">
                    <p>Saturday</p>
                    <input type="checkbox" id="checkbox69" v-model="day6[9]">
                    <p>Sunday</p>
                    <input type="checkbox" id="checkbox79" v-model="day7[9]">
                </td>
                <td><b>Shape Up</b>
                    <p>Select the following from the Training Quest menu(take breaks as needed): </p>
                    <ul>
                        <li>Play Beatmaster Cardio Quest Wk 3, Day 2</li>
                        <li>Play Luchador Muscle Quest Wk 3, Day 3</li>
                        <li>Play Beatmaster Cardio Quest Wk 3, Day 3</li>
                    </ul>
                    <p><b>Kinect Sports</b></p>
                    <ul>
                        <li>Play 15 minutes of a sport of your choice in Quick Play</li>
                    </ul>
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox3c9" v-model="is3Completed[9]">
                </td>
                <td><input v-model="minutes3[9]" placeholder="Enter minutes"></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>#4</td>
                <p> Number of days you met your 2000 steps per day goal: </p> 
                <td class="row"><input v-model="stepsDays[9]" placeholder="Enter number of days you met your steps per day goal" style="width: 100%;"></td>
            </tr>
        </tbody>
    </table>
    <br>
    <div><button id="submit10" type="submit">Save</button></div>
    </form>
    <p styles="font-size: 20px;"><b>My Progress</b></p>
    <table style="width: 75%; margin: 0 auto;">
        <tbody>
            <tr>
                <td class="aligning" style="background-color: yellow;">1</td>
                <td class="aligning" style="background-color: yellow;">2</td>
                <td class="aligning" style="background-color: yellow;">3</td>
                <td class="aligning" style="background-color: #4D71A3;">4</td>
                <td class="aligning" style="background-color: #4D71A3;">5</td>
                <td class="aligning" style="background-color: #4D71A3;">6</td>
                <td class="aligning" style="background-color: green;">7</td>
                <td class="aligning" style="background-color: green;">8</td>
                <td class="aligning" style="background-color: green;">9</td>
                <td class="aligning" style="background-color: red;">10</td>
                <td class="aligning">11</td>
                <td class="aligning">12</td>
            </tr>
        </tbody>
    </table>
    </details>
    <!-- Level 4 Table WEEK 11 -->
    <details  style="text-align:left;">
    <summary>LEVEL 4 - WEEK 11</summary>
    <form @submit.prevent="submitForm11">
    <div class="container">
        <div class="title">
            <div class="gamerFitImage">
                <img v-bind:src="ImageGamerFit" class="gamerFitImage">
            </div>
        </div>
    </div>
    <p style="font: 30px; text-align: center;"><b>Week 11 - Level 4</b></p>
    <p style="font: 40px; text-align: center;"><b>My Exergaming Challenge Time Goal:</b> 60 minutes per session</p>
    <p style="font: 40px; text-align: center;"><b>My Daily Step Goal:</b> 4750 steps or more each day this week</p>
    <p style="font: 30px; text-align: center;">***Use your Fitbit to track your steps each day***</p>
    <br>

    <table style="width: 75%; margin: 0 auto;">
        <thead>
            <tr>
                <th><b>CHALLENGE</b></th>
                <th><b>DAY</b></th>
                <th><b>PLAY</b></th>
                <th><b>COMPLETED?</b></th>
                <th><b>MINUTES</b></th>
            </tr>
        </thead>
        <tbody>
            <td>#1</td>
                <td>
                    <p>Monday</p>
                    <input type="checkbox" id="checkbox110" v-model="day1[10]">
                    <p>Tuesday</p>
                    <input type="checkbox" id="checkbox210" v-model="day2[10]">
                </td>
                <td><b>Shape Up</b>
                    <p>Select the following from Training Quest mode(take breaks as needed): </p>
                    <ul>
                        <li>Play Luchador Muscle Quest Wk 3, Day 1</li>
                        <li>Play Beatmaster Cardio Quest Wk 3, Day 1</li>
                        <li>Play Luchador Muscle Quest Wk 2, Day 2</li>
                    </ul> 
                    <p>Select the following from Workout mode: </p>
                    <ul>
                        <li>Derby Skate</li>
                        <li>Push Up Pump</li>
                    </ul> 
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox1c10" v-model="is1Completed[10]">
                </td>
                <td><input v-model="minutes1[10]" placeholder="Enter minutes"></td>
        </tbody>
        <tbody>
            <tr>
                <td>#2</td>
                <td>
                    <p>Wednesday</p>
                    <input type="checkbox" id="checkbox310" v-model="day3[10]">
                    <p>Thursday</p>
                    <input type="checkbox" id="checkbox410" v-model="day4[10]">
                </td>
                <td><b>Just Dance 2016</b>
                    <p>Select the following from Sweat and Playlist mode: </p>
                    <ul>
                        <li>Play non-stop shuffle for 45 minutes</li>
                    </ul>
                    <p>Select the following from Dance Party mode:</p>
                    <ul>
                        <li>Pick any 4 songs</li>
                    </ul>
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox2c10" v-model="is2Completed[10]">
                </td>
                <td><input v-model="minutes2[10]" placeholder="Enter minutes"></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>#3</td>
                <td>
                    <p>Friday</p>
                    <input type="checkbox" id="checkbox510" v-model="day5[10]">
                    <p>Saturday</p>
                    <input type="checkbox" id="checkbox610" v-model="day6[10]">
                    <p>Sunday</p>
                    <input type="checkbox" id="checkbox710" v-model="day7[10]">
                </td>
                <td><b>Shape Up</b>
                    <p>Select the following from the Training Quest menu(take breaks as needed): </p>
                    <ul>
                        <li>Play Beatmaster Cardio Quest Wk 3, Day 2</li>
                        <li>Play Luchador Muscle Quest Wk 3, Day 3</li>
                        <li>Play Beatmaster Cardio Quest Wk 3, Day 3</li>
                    </ul>
                    <p><b>Kinect Sports</b></p>
                    <ul>
                        <li>Play 15 minutes of a sport of your choice in Quick Play</li>
                    </ul>
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox3c10" v-model="is3Completed[10]">
                </td>
                <td><input v-model="minutes3[10]" placeholder="Enter minutes"></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>#4</td>
                <p> Number of days you met your 2000 steps per day goal: </p> 
                <td class="row"><input v-model="stepsDays[10]" placeholder="Enter number of days you met your steps per day goal" style="width: 100%;"></td>
            </tr>
        </tbody>
    </table>
    <br>
    <div><button id="submit11" type="submit">Save</button></div>
    </form>
    <p styles="font-size: 20px;"><b>My Progress</b></p>
    <table style="width: 75%; margin: 0 auto;">
        <tbody>
            <tr>
                <td class="aligning" style="background-color: yellow;">1</td>
                <td class="aligning" style="background-color: yellow;">2</td>
                <td class="aligning" style="background-color: yellow;">3</td>
                <td class="aligning" style="background-color: #4D71A3;">4</td>
                <td class="aligning" style="background-color: #4D71A3;">5</td>
                <td class="aligning" style="background-color: #4D71A3;">6</td>
                <td class="aligning" style="background-color: green;">7</td>
                <td class="aligning" style="background-color: green;">8</td>
                <td class="aligning" style="background-color: green;">9</td>
                <td class="aligning" style="background-color: red;">10</td>
                <td class="aligning" style="background-color: red;">11</td>
                <td class="aligning">12</td>
            </tr>
        </tbody>
    </table>
    </details>
    <!-- Level 4 Table WEEK 12 -->
    <details  style="text-align:left;">
    <summary>LEVEL 4 - WEEK 12</summary>
    <form @submit.prevent="submitForm12">
    <div class="container">
        <div class="title">
            <div class="gamerFitImage">
                <img v-bind:src="ImageGamerFit" class="gamerFitImage">
            </div>
        </div>
    </div>
    <p style="font: 30px; text-align: center;"><b>Week 12 - Level 4</b></p>
    <p style="font: 40px; text-align: center;"><b>My Exergaming Challenge Time Goal:</b> 60 minutes per session</p>
    <p style="font: 40px; text-align: center;"><b>My Daily Step Goal:</b> 5000 steps or more each day this week</p>
    <p style="font: 30px; text-align: center;">***Use your Fitbit to track your steps each day***</p>
    <br>

    <table style="width: 75%; margin: 0 auto;">
        <thead>
            <tr>
                <th><b>CHALLENGE</b></th>
                <th><b>DAY</b></th>
                <th><b>PLAY</b></th>
                <th><b>COMPLETED?</b></th>
                <th><b>MINUTES</b></th>
            </tr>
        </thead>
        <tbody>
            <td>#1</td>
                <td>
                    <p>Monday</p>
                    <input type="checkbox" id="checkbox111" v-model="day1[11]">
                    <p>Tuesday</p>
                    <input type="checkbox" id="checkbox211" v-model="day2[11]">
                </td>
                <td><b>Shape Up</b>
                    <p>Select the following from Training Quest mode(take breaks as needed): </p>
                    <ul>
                        <li>Play Luchador Muscle Quest Wk 3, Day 1</li>
                        <li>Play Beatmaster Cardio Quest Wk 3, Day 1</li>
                        <li>Play Luchador Muscle Quest Wk 2, Day 2</li>
                    </ul> 
                    <p>Select the following from Workout mode: </p>
                    <ul>
                        <li>Derby Skate</li>
                        <li>Push Up Pump</li>
                    </ul> 
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox1c11" v-model="is1Completed[11]">
                </td>
                <td><input v-model="minutes1[11]" placeholder="Enter minutes"></td>
        </tbody>
        <tbody>
            <tr>
                <td>#2</td>
                <td>
                    <p>Wednesday</p>
                    <input type="checkbox" id="checkbox311" v-model="day3[11]">
                    <p>Thursday</p>
                    <input type="checkbox" id="checkbox411" v-model="day4[11]">
                </td>
                <td><b>Just Dance 2016</b>
                    <p>Select the following from Sweat and Playlist mode: </p>
                    <ul>
                        <li>Play non-stop shuffle for 45 minutes</li>
                    </ul>
                    <p>Select the following from Dance Party mode:</p>
                    <ul>
                        <li>Pick any 4 songs</li>
                    </ul>
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox2c11" v-model="is2Completed[11]">
                </td>
                <td><input v-model="minutes2[11]" placeholder="Enter minutes"></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>#3</td>
                <td>
                    <p>Friday</p>
                    <input type="checkbox" id="checkbox511" v-model="day5[11]">
                    <p>Saturday</p>
                    <input type="checkbox" id="checkbox611" v-model="day6[11]">
                    <p>Sunday</p>
                    <input type="checkbox" id="checkbox711" v-model="day7[11]">
                </td>
                <td><b>Shape Up</b>
                    <p>Select the following from the Training Quest menu(take breaks as needed): </p>
                    <ul>
                        <li>Play Beatmaster Cardio Quest Wk 3, Day 2</li>
                        <li>Play Luchador Muscle Quest Wk 3, Day 3</li>
                        <li>Play Beatmaster Cardio Quest Wk 3, Day 3</li>
                    </ul>
                    <p><b>Kinect Sports</b></p>
                    <ul>
                        <li>Play 15 minutes of a sport of your choice in Quick Play</li>
                    </ul>
                </td>
                <td>
                    <p style="font: 25px">YES!</p>
                    <input type="checkbox" id="checkbox" v-model="is3Completed[11]">
                </td>
                <td><input v-model="minutes3[11]" placeholder="Enter minutes"></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>#4</td>
                <p> Number of days you met your 2000 steps per day goal: </p> 
                <td class="row"><input v-model="stepsDays[11]" placeholder="Enter number of days you met your steps per day goal" style="width: 100%;"></td>
            </tr>
        </tbody>
    </table>
    <div><button id="submit12" type="submit">Save</button></div>
    </form>
        <h2>CONGRATULATIONS FOR FINISHING!!!</h2>
    <p styles="font-size: 20px;"><b>My Progress</b></p>
    <table style="width: 75%; margin: 0 auto;">
        <tbody>
            <tr>
                <td class="aligning" style="background-color: yellow;">1</td>
                <td class="aligning" style="background-color: yellow;">2</td>
                <td class="aligning" style="background-color: yellow;">3</td>
                <td class="aligning" style="background-color: #4D71A3;">4</td>
                <td class="aligning" style="background-color: #4D71A3;">5</td>
                <td class="aligning" style="background-color: #4D71A3;">6</td>
                <td class="aligning" style="background-color: green;">7</td>
                <td class="aligning" style="background-color: green;">8</td>
                <td class="aligning" style="background-color: green;">9</td>
                <td class="aligning" style="background-color: red;">10</td>
                <td class="aligning" style="background-color: red;">11</td>
                <td class="aligning" style="background-color: red;">12</td>
            </tr>
        </tbody>
    </table>
    </details>
    </details>
</template>

<script>

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { db } from '../main';

export default {
    name: '1',
    data() {
        return {
            //Image Assests
            ImageGamerFit: require("../assets/gamefitImg.jpg"),
            ImageLevel1: require("../assets/level1.png"),
            ImageLevel2: require("../assets/level2.png"),
            ImageLevel3: require("../assets/Level3.png"),
            ImageLevel4: require("../assets/level4.png"),
            day1: [false, false, false, false, false, false, false, false, false, false, false, false],
            day2: [false, false, false, false, false, false, false, false, false, false, false, false],
            day3: [false, false, false, false, false, false, false, false, false, false, false, false],
            day4: [false, false, false, false, false, false, false, false, false, false, false, false],
            day5: [false, false, false, false, false, false, false, false, false, false, false, false],
            day6: [false, false, false, false, false, false, false, false, false, false, false, false],
            day7: [false, false, false, false, false, false, false, false, false, false, false, false],
            is1Completed: [false, false, false, false, false, false, false, false, false, false, false, false],
            is2Completed: [false, false, false, false, false, false, false, false, false, false, false, false],
            is3Completed: [false, false, false, false, false, false, false, false, false, false, false, false],
            minutes1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            minutes2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            minutes3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            stepsDays: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        }
    },
    mounted() {
        const user = firebase.auth().currentUser;
        var key1 = user.uid+"_week1";
        db.collection('user_progress').doc(key1).get().then((querySnapshot) => {
            console.log(querySnapshot.data());
            this.day1[0] = querySnapshot.data().week1.day1;
            this.day2[0] = querySnapshot.data().week1.day2;
            this.day3[0] = querySnapshot.data().week1.day3;
            this.day4[0] = querySnapshot.data().week1.day4;
            this.day5[0] = querySnapshot.data().week1.day5;
            this.day6[0] = querySnapshot.data().week1.day6;
            this.day7[0] = querySnapshot.data().week1.day7;
            this.is1Completed[0] = querySnapshot.data().week1.is1Completed;
            this.is2Completed[0] = querySnapshot.data().week1.is2Completed;
            this.is3Completed[0] = querySnapshot.data().week1.is3Completed;
            this.minutes1[0] = querySnapshot.data().week1.minutes1;
            this.minutes2[0] = querySnapshot.data().week1.minutes2;
            this.minutes3[0] = querySnapshot.data().week1.minutes3;
            this.stepsDays[0] = querySnapshot.data().week1.stepsDays;
        })
        .catch(err => console.log(err));

        var key2 = user.uid+"_week2";
        db.collection('user_progress').doc(key2).get().then((querySnapshot) => {
            console.log(querySnapshot.data());
            this.day1[1] = querySnapshot.data().week2.day1;
            this.day2[1] = querySnapshot.data().week2.day2;
            this.day3[1] = querySnapshot.data().week2.day3;
            this.day4[1] = querySnapshot.data().week2.day4;
            this.day5[1] = querySnapshot.data().week2.day5;
            this.day6[1] = querySnapshot.data().week2.day6;
            this.day7[1] = querySnapshot.data().week2.day7;
            this.is1Completed[1] = querySnapshot.data().week2.is1Completed;
            this.is2Completed[1] = querySnapshot.data().week2.is2Completed;
            this.is3Completed[1] = querySnapshot.data().week2.is3Completed;
            this.minutes1[1] = querySnapshot.data().week2.minutes1;
            this.minutes2[1] = querySnapshot.data().week2.minutes2;
            this.minutes3[1] = querySnapshot.data().week2.minutes3;
            this.stepsDays[1] = querySnapshot.data().week2.stepsDays;
        })
        .catch(err => console.log(err));

        var key3 = user.uid+"_week3";
        db.collection('user_progress').doc(key3).get().then((querySnapshot) => {
            console.log(querySnapshot.data());
            this.day1[2] = querySnapshot.data().week3.day1;
            this.day2[2] = querySnapshot.data().week3.day2;
            this.day3[2] = querySnapshot.data().week3.day3;
            this.day4[2] = querySnapshot.data().week3.day4;
            this.day5[2] = querySnapshot.data().week3.day5;
            this.day6[2] = querySnapshot.data().week3.day6;
            this.day7[2] = querySnapshot.data().week3.day7;
            this.is1Completed[2] = querySnapshot.data().week3.is1Completed;
            this.is2Completed[2] = querySnapshot.data().week3.is2Completed;
            this.is3Completed[2] = querySnapshot.data().week3.is3Completed;
            this.minutes1[2] = querySnapshot.data().week3.minutes1;
            this.minutes2[2] = querySnapshot.data().week3.minutes2;
            this.minutes3[2] = querySnapshot.data().week3.minutes3;
            this.stepsDays[2] = querySnapshot.data().week3.stepsDays;
        })
        .catch(err => console.log(err));

        var key4 = user.uid+"_week4";
        db.collection('user_progress').doc(key4).get().then((querySnapshot) => {
            console.log(querySnapshot.data());
            this.day1[3] = querySnapshot.data().week4.day1;
            this.day2[3] = querySnapshot.data().week4.day2;
            this.day3[3] = querySnapshot.data().week4.day3;
            this.day4[3] = querySnapshot.data().week4.day4;
            this.day5[3] = querySnapshot.data().week4.day5;
            this.day6[3] = querySnapshot.data().week4.day6;
            this.day7[3] = querySnapshot.data().week4.day7;
            this.is1Completed[3] = querySnapshot.data().week4.is1Completed;
            this.is2Completed[3] = querySnapshot.data().week4.is2Completed;
            this.is3Completed[3] = querySnapshot.data().week4.is3Completed;
            this.minutes1[3] = querySnapshot.data().week4.minutes1;
            this.minutes2[3] = querySnapshot.data().week4.minutes2;
            this.minutes3[3] = querySnapshot.data().week4.minutes3;
            this.stepsDays[3] = querySnapshot.data().week4.stepsDays;
        })
        .catch(err => console.log(err));

        var key5 = user.uid+"_week5";
        db.collection('user_progress').doc(key5).get().then((querySnapshot) => {
            console.log(querySnapshot.data());
            this.day1[4] = querySnapshot.data().week5.day1;
            this.day2[4] = querySnapshot.data().week5.day2;
            this.day3[4] = querySnapshot.data().week5.day3;
            this.day4[4] = querySnapshot.data().week5.day4;
            this.day5[4] = querySnapshot.data().week5.day5;
            this.day6[4] = querySnapshot.data().week5.day6;
            this.day7[4] = querySnapshot.data().week5.day7;
            this.is1Completed[4] = querySnapshot.data().week5.is1Completed;
            this.is2Completed[4] = querySnapshot.data().week5.is2Completed;
            this.is3Completed[4] = querySnapshot.data().week5.is3Completed;
            this.minutes1[4] = querySnapshot.data().week5.minutes1;
            this.minutes2[4] = querySnapshot.data().week5.minutes2;
            this.minutes3[4] = querySnapshot.data().week5.minutes3;
            this.stepsDays[4] = querySnapshot.data().week5.stepsDays;
        })
        .catch(err => console.log(err));

        var key6 = user.uid+"_week6";
        db.collection('user_progress').doc(key6).get().then((querySnapshot) => {
            console.log(querySnapshot.data());
            this.day1[5] = querySnapshot.data().week6.day1;
            this.day2[5] = querySnapshot.data().week6.day2;
            this.day3[5] = querySnapshot.data().week6.day3;
            this.day4[5] = querySnapshot.data().week6.day4;
            this.day5[5] = querySnapshot.data().week6.day5;
            this.day6[5] = querySnapshot.data().week6.day6;
            this.day7[5] = querySnapshot.data().week6.day7;
            this.is1Completed[5] = querySnapshot.data().week6.is1Completed;
            this.is2Completed[5] = querySnapshot.data().week6.is2Completed;
            this.is3Completed[5] = querySnapshot.data().week6.is3Completed;
            this.minutes1[5] = querySnapshot.data().week6.minutes1;
            this.minutes2[5] = querySnapshot.data().week6.minutes2;
            this.minutes3[5] = querySnapshot.data().week6.minutes3;
            this.stepsDays[5] = querySnapshot.data().week6.stepsDays;
        })
        .catch(err => console.log(err));

        var key7 = user.uid+"_week7";
        db.collection('user_progress').doc(key7).get().then((querySnapshot) => {
            console.log(querySnapshot.data());
            this.day1[6] = querySnapshot.data().week7.day1;
            this.day2[6] = querySnapshot.data().week7.day2;
            this.day3[6] = querySnapshot.data().week7.day3;
            this.day4[6] = querySnapshot.data().week7.day4;
            this.day5[6] = querySnapshot.data().week7.day5;
            this.day6[6] = querySnapshot.data().week7.day6;
            this.day7[6] = querySnapshot.data().week7.day7;
            this.is1Completed[6] = querySnapshot.data().week7.is1Completed;
            this.is2Completed[6] = querySnapshot.data().week7.is2Completed;
            this.is3Completed[6] = querySnapshot.data().week7.is3Completed;
            this.minutes1[6] = querySnapshot.data().week7.minutes1;
            this.minutes2[6] = querySnapshot.data().week7.minutes2;
            this.minutes3[6] = querySnapshot.data().week7.minutes3;
            this.stepsDays[6] = querySnapshot.data().week7.stepsDays;
        })
        .catch(err => console.log(err));

        var key8 = user.uid+"_week8";
        db.collection('user_progress').doc(key8).get().then((querySnapshot) => {
            console.log(querySnapshot.data());
            this.day1[7] = querySnapshot.data().week8.day1;
            this.day2[7] = querySnapshot.data().week8.day2;
            this.day3[7] = querySnapshot.data().week8.day3;
            this.day4[7] = querySnapshot.data().week8.day4;
            this.day5[7] = querySnapshot.data().week8.day5;
            this.day6[7] = querySnapshot.data().week8.day6;
            this.day7[7] = querySnapshot.data().week8.day7;
            this.is1Completed[7] = querySnapshot.data().week8.is1Completed;
            this.is2Completed[7] = querySnapshot.data().week8.is2Completed;
            this.is3Completed[7] = querySnapshot.data().week8.is3Completed;
            this.minutes1[7] = querySnapshot.data().week8.minutes1;
            this.minutes2[7] = querySnapshot.data().week8.minutes2;
            this.minutes3[7] = querySnapshot.data().week8.minutes3;
            this.stepsDays[7] = querySnapshot.data().week8.stepsDays;
        })
        .catch(err => console.log(err));

        var key9 = user.uid+"_week9";
        db.collection('user_progress').doc(key9).get().then((querySnapshot) => {
            console.log(querySnapshot.data());
            this.day1[8] = querySnapshot.data().week9.day1;
            this.day2[8] = querySnapshot.data().week9.day2;
            this.day3[8] = querySnapshot.data().week9.day3;
            this.day4[8] = querySnapshot.data().week9.day4;
            this.day5[8] = querySnapshot.data().week9.day5;
            this.day6[8] = querySnapshot.data().week9.day6;
            this.day7[8] = querySnapshot.data().week9.day7;
            this.is1Completed[8] = querySnapshot.data().week9.is1Completed;
            this.is2Completed[8] = querySnapshot.data().week9.is2Completed;
            this.is3Completed[8] = querySnapshot.data().week9.is3Completed;
            this.minutes1[8] = querySnapshot.data().week9.minutes1;
            this.minutes2[8] = querySnapshot.data().week9.minutes2;
            this.minutes3[8] = querySnapshot.data().week9.minutes3;
            this.stepsDays[8] = querySnapshot.data().week9.stepsDays;
        })
        .catch(err => console.log(err));

        var key10 = user.uid+"_week10";
        db.collection('user_progress').doc(key10).get().then((querySnapshot) => {
            console.log(querySnapshot.data());
            this.day1[9] = querySnapshot.data().week10.day1;
            this.day2[9] = querySnapshot.data().week10.day2;
            this.day3[9] = querySnapshot.data().week10.day3;
            this.day4[9] = querySnapshot.data().week10.day4;
            this.day5[9] = querySnapshot.data().week10.day5;
            this.day6[9] = querySnapshot.data().week10.day6;
            this.day7[9] = querySnapshot.data().week10.day7;
            this.is1Completed[9] = querySnapshot.data().week10.is1Completed;
            this.is2Completed[9] = querySnapshot.data().week10.is2Completed;
            this.is3Completed[9] = querySnapshot.data().week10.is3Completed;
            this.minutes1[9] = querySnapshot.data().week10.minutes1;
            this.minutes2[9] = querySnapshot.data().week10.minutes2;
            this.minutes3[9] = querySnapshot.data().week10.minutes3;
            this.stepsDays[9] = querySnapshot.data().week10.stepsDays;
        })
        .catch(err => console.log(err));

        var key11 = user.uid+"_week11";
        db.collection('user_progress').doc(key11).get().then((querySnapshot) => {
            console.log(querySnapshot.data());
            this.day1[10] = querySnapshot.data().week11.day1;
            this.day2[10] = querySnapshot.data().week11.day2;
            this.day3[10] = querySnapshot.data().week11.day3;
            this.day4[10] = querySnapshot.data().week11.day4;
            this.day5[10] = querySnapshot.data().week11.day5;
            this.day6[10] = querySnapshot.data().week11.day6;
            this.day7[10] = querySnapshot.data().week11.day7;
            this.is1Completed[10] = querySnapshot.data().week11.is1Completed;
            this.is2Completed[10] = querySnapshot.data().week11.is2Completed;
            this.is3Completed[10] = querySnapshot.data().week11.is3Completed;
            this.minutes1[10] = querySnapshot.data().week11.minutes1;
            this.minutes2[10] = querySnapshot.data().week11.minutes2;
            this.minutes3[10] = querySnapshot.data().week11.minutes3;
            this.stepsDays[10] = querySnapshot.data().week11.stepsDays;
        })
        .catch(err => console.log(err));

        var key12 = user.uid+"_week12";
        db.collection('user_progress').doc(key12).get().then((querySnapshot) => {
            console.log(querySnapshot.data());
            this.day1[11] = querySnapshot.data().week12.day1;
            this.day2[11] = querySnapshot.data().week12.day2;
            this.day3[11] = querySnapshot.data().week12.day3;
            this.day4[11] = querySnapshot.data().week12.day4;
            this.day5[11] = querySnapshot.data().week12.day5;
            this.day6[11] = querySnapshot.data().week12.day6;
            this.day7[11] = querySnapshot.data().week12.day7;
            this.is1Completed[11] = querySnapshot.data().week12.is1Completed;
            this.is2Completed[11] = querySnapshot.data().week12.is2Completed;
            this.is3Completed[11] = querySnapshot.data().week12.is3Completed;
            this.minutes1[11] = querySnapshot.data().week12.minutes1;
            this.minutes2[11] = querySnapshot.data().week12.minutes2;
            this.minutes3[11] = querySnapshot.data().week12.minutes3;
            this.stepsDays[11] = querySnapshot.data().week12.stepsDays;
        })
        .catch(err => console.log(err));

    },
    methods: {
    // submit the form to our backend api
        submitForm1() {
            const user = firebase.auth().currentUser;
            let week1 = {
                "week1": {
                    day1: this.day1[0],
                    day2: this.day2[0],
                    day3: this.day3[0],
                    day4: this.day4[0],
                    day5: this.day5[0],
                    day6: this.day6[0],
                    day7: this.day7[0],
                    is1Completed: this.is1Completed[0],
                    is2Completed: this.is2Completed[0],
                    is3Completed: this.is3Completed[0],
                    minutes1: this.minutes1[0],
                    minutes2: this.minutes2[0],
                    minutes3: this.minutes3[0],
                    stepsDays: this.stepsDays[0],
                }
            }
      
            var key = user.uid+"_week1";

            db.collection('user_progress').doc(key).set(week1)
            .then(doc => console.log(doc))
            .catch(err => console.log(err))
        },
        submitForm2() {
            const user = firebase.auth().currentUser;
            let week2 = {
                "week2": {
                    day1: this.day1[1],
                    day2: this.day2[1],
                    day3: this.day3[1],
                    day4: this.day4[1],
                    day5: this.day5[1],
                    day6: this.day6[1],
                    day7: this.day7[1],
                    is1Completed: this.is1Completed[1],
                    is2Completed: this.is2Completed[1],
                    is3Completed: this.is3Completed[1],
                    minutes1: this.minutes1[1],
                    minutes2: this.minutes2[1],
                    minutes3: this.minutes3[1],
                    stepsDays: this.stepsDays[1],
                }
            }

            var key = user.uid+"_week2";
      
            db.collection('user_progress').doc(key).set(week2)
            .then(doc => console.log(doc))
            .catch(err => console.log(err))
        },
        submitForm3() {
            const user = firebase.auth().currentUser;
            let week3 = {
                "week3": {
                    day1: this.day1[2],
                    day2: this.day2[2],
                    day3: this.day3[2],
                    day4: this.day4[2],
                    day5: this.day5[2],
                    day6: this.day6[2],
                    day7: this.day7[2],
                    is1Completed: this.is1Completed[2],
                    is2Completed: this.is2Completed[2],
                    is3Completed: this.is3Completed[2],
                    minutes1: this.minutes1[2],
                    minutes2: this.minutes2[2],
                    minutes3: this.minutes3[2],
                    stepsDays: this.stepsDays[2],
                }
            }
            var key = user.uid+"_week3";
            db.collection('user_progress').doc(key).set(week3)
            .then(doc => console.log(doc))
            .catch(err => console.log(err))
        },
        submitForm4() {
            const user = firebase.auth().currentUser;
            let week4 = {
                "week4": {
                    day1: this.day1[3],
                    day2: this.day2[3],
                    day3: this.day3[3],
                    day4: this.day4[3],
                    day5: this.day5[3],
                    day6: this.day6[3],
                    day7: this.day7[3],
                    is1Completed: this.is1Completed[3],
                    is2Completed: this.is2Completed[3],
                    is3Completed: this.is3Completed[3],
                    minutes1: this.minutes1[3],
                    minutes2: this.minutes2[3],
                    minutes3: this.minutes3[3],
                    stepsDays: this.stepsDays[3],
                }
            }
            var key = user.uid+"_week4";
            db.collection('user_progress').doc(key).set(week4)
            .then(doc => console.log(doc))
            .catch(err => console.log(err))
        },
        submitForm5() {
            const user = firebase.auth().currentUser;
            let week5 = {
                "week5": {
                    day1: this.day1[4],
                    day2: this.day2[4],
                    day3: this.day3[4],
                    day4: this.day4[4],
                    day5: this.day5[4],
                    day6: this.day6[4],
                    day7: this.day7[4],
                    is1Completed: this.is1Completed[4],
                    is2Completed: this.is2Completed[4],
                    is3Completed: this.is3Completed[4],
                    minutes1: this.minutes1[4],
                    minutes2: this.minutes2[4],
                    minutes3: this.minutes3[4],
                    stepsDays: this.stepsDays[4],
                }
            }
            var key = user.uid+"_week5";
            db.collection('user_progress').doc(key).set(week5)
            .then(doc => console.log(doc))
            .catch(err => console.log(err))
        },
        submitForm6() {
            const user = firebase.auth().currentUser;
            let week6 = {
                "week6": {
                    day1: this.day1[5],
                    day2: this.day2[5],
                    day3: this.day3[5],
                    day4: this.day4[5],
                    day5: this.day5[5],
                    day6: this.day6[5],
                    day7: this.day7[5],
                    is1Completed: this.is1Completed[5],
                    is2Completed: this.is2Completed[5],
                    is3Completed: this.is3Completed[5],
                    minutes1: this.minutes1[5],
                    minutes2: this.minutes2[5],
                    minutes3: this.minutes3[5],
                    stepsDays: this.stepsDays[5],
                }
            }
            var key = user.uid+"_week6";
            db.collection('user_progress').doc(key).set(week6)
            .then(doc => console.log(doc))
            .catch(err => console.log(err))
        },
        submitForm7() {
            const user = firebase.auth().currentUser;
            let week7 = {
                "week7": {
                    day1: this.day1[6],
                    day2: this.day2[6],
                    day3: this.day3[6],
                    day4: this.day4[6],
                    day5: this.day5[6],
                    day6: this.day6[6],
                    day7: this.day7[6],
                    is1Completed: this.is1Completed[6],
                    is2Completed: this.is2Completed[6],
                    is3Completed: this.is3Completed[6],
                    minutes1: this.minutes1[6],
                    minutes2: this.minutes2[6],
                    minutes3: this.minutes3[6],
                    stepsDays: this.stepsDays[6],
                }
            }
            var key = user.uid+"_week7";
            db.collection('user_progress').doc(key).set(week7)
            .then(doc => console.log(doc))
            .catch(err => console.log(err))
        },
        submitForm8() {
            const user = firebase.auth().currentUser;
            let week8 = {
                "week8": {
                    day1: this.day1[7],
                    day2: this.day2[7],
                    day3: this.day3[7],
                    day4: this.day4[7],
                    day5: this.day5[7],
                    day6: this.day6[7],
                    day7: this.day7[7],
                    is1Completed: this.is1Completed[7],
                    is2Completed: this.is2Completed[7],
                    is3Completed: this.is3Completed[7],
                    minutes1: this.minutes1[7],
                    minutes2: this.minutes2[7],
                    minutes3: this.minutes3[7],
                    stepsDays: this.stepsDays[7],
                }
            }
            var key = user.uid+"_week8";
            db.collection('user_progress').doc(key).set(week8)
            .then(doc => console.log(doc))
            .catch(err => console.log(err))
        },
        submitForm9() {
            const user = firebase.auth().currentUser;
            let week9 = {
                "week9": {
                    day1: this.day1[8],
                    day2: this.day2[8],
                    day3: this.day3[8],
                    day4: this.day4[8],
                    day5: this.day5[8],
                    day6: this.day6[8],
                    day7: this.day7[8],
                    is1Completed: this.is1Completed[8],
                    is2Completed: this.is2Completed[8],
                    is3Completed: this.is3Completed[8],
                    minutes1: this.minutes1[8],
                    minutes2: this.minutes2[8],
                    minutes3: this.minutes3[8],
                    stepsDays: this.stepsDays[8],
                }
            }
            var key = user.uid+"_week9";
            db.collection('user_progress').doc(key).set(week9)
            .then(doc => console.log(doc))
            .catch(err => console.log(err))
        },
        submitForm10() {
            const user = firebase.auth().currentUser;
            let week10 = {
                "week10": {
                    day1: this.day1[9],
                    day2: this.day2[9],
                    day3: this.day3[9],
                    day4: this.day4[9],
                    day5: this.day5[9],
                    day6: this.day6[9],
                    day7: this.day7[9],
                    is1Completed: this.is1Completed[9],
                    is2Completed: this.is2Completed[9],
                    is3Completed: this.is3Completed[9],
                    minutes1: this.minutes1[9],
                    minutes2: this.minutes2[9],
                    minutes3: this.minutes3[9],
                    stepsDays: this.stepsDays[9],
                }
            }
            var key = user.uid+"_week10";
            db.collection('user_progress').doc(key).set(week10)
            .then(doc => console.log(doc))
            .catch(err => console.log(err))
        },
        submitForm11() {
            const user = firebase.auth().currentUser;
            let week11 = {
                "week11": {
                    day1: this.day1[10],
                    day2: this.day2[10],
                    day3: this.day3[10],
                    day4: this.day4[10],
                    day5: this.day5[10],
                    day6: this.day6[10],
                    day7: this.day7[10],
                    is1Completed: this.is1Completed[10],
                    is2Completed: this.is2Completed[10],
                    is3Completed: this.is3Completed[10],
                    minutes1: this.minutes1[10],
                    minutes2: this.minutes2[10],
                    minutes3: this.minutes3[10],
                    stepsDays: this.stepsDays[10],
                }
            }
            var key = user.uid+"_week11";
            db.collection('user_progress').doc(key).set(week11)
            .then(doc => console.log(doc))
            .catch(err => console.log(err))
        },
        submitForm12() {
            const user = firebase.auth().currentUser;
            let week12 = {
                "week12": {
                    day1: this.day1[11],
                    day2: this.day2[11],
                    day3: this.day3[11],
                    day4: this.day4[11],
                    day5: this.day5[11],
                    day6: this.day6[11],
                    day7: this.day7[11],
                    is1Completed: this.is1Completed[11],
                    is2Completed: this.is2Completed[11],
                    is3Completed: this.is3Completed[11],
                    minutes1: this.minutes1[11],
                    minutes2: this.minutes2[11],
                    minutes3: this.minutes3[11],
                    stepsDays: this.stepsDays[11],
                }
            }
            var key = user.uid+"_week12";
            db.collection('user_progress').doc(key).set(week12)
            .then(doc => console.log(doc))
            .catch(err => console.log(err))
        },
    }
}


</script>

<style>
    /* Image CSS */
    .gamerFitImage {
        height: 40%;
        width: 40%;
        margin: 0 auto;
    }

    .imageLevel {
        height: 80%;
        width: 80%;
        object-fit: cover;
        margin: 0 auto;
    }
    /* Table CSS */
    table {
        font-family: 'Open Sans', sans-serif;
        width: 100%;
        height: fit-content;
        border-collapse: collapse;
        border: 3px solid #1223a0;
        margin: 10px 10px 0 10px;
    }
    table th {
        text-transform: uppercase;
        text-align: left;
        background: #1223a0;
        color: #FFF;
        padding: 8px;
        min-width: 30px;
    }
    table td {
        text-align: left;
        padding: 8px;
        border-right: 2px solid #1223a0;
    }
    td {
        border: solid #1223a0;
        border-width: 2px;
    }
    td:first-child {
        border-top: none;
    }
    .row {
        border: none;
    }
    .aligning {
        text-align: center;
    }
    .navigation ul { 
        list-style-type: none;
        text-align: center;
        margin: 0;
    }
    .navigation li {
        display: inline-block;
        margin: 0 10px;
    }
    .navigation a {
        text-decoration: none;
        padding: 6px 8px;
        border-radius: 10px;
    }
    .navigation nav {
        background: #444;
        padding: 6px 8px;
        margin-bottom: 40px;
    }
    .navigation .router-link-active {
        color: #444;
        background: #eee;
    }
    #nav a.router-link-exact-active {
  color: #c7c400;
}
</style>