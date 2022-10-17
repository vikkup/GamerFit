<!-- Vikku Ponnaganti - Author of this file from Lines 3 - 64, any changes within
these lines authored by someone else will be stated otherwise -->
<template>
  <div id="nav" class="spacing">
    <router-link to="/">Home</router-link> |
    <router-link to="/xbox">Exergame</router-link> |
    <router-link to="/portal">Coaching Portal</router-link> |
    <router-link to="/vidlib">Video Library</router-link> |
    <router-link to="/trouble">Troubleshooting</router-link> |
    <router-link to="/contact">Contact</router-link> | 
    <!-- Brian Boyle CSS for button -->
    <button class="button_slide slide_left" @click="logout">Logout</button>
  </div>
  <router-view />
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
    methods: {
        logout() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    alert('Successfully logged out');
                    this.$router.push('/');
                })
                .catch(error => {
                    alert(error.message);
                    this.$router.push('/');
                });
        },
    },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  border-radius: 10px;
  background-color: rgba(34, 74, 160, 0.699);
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #c7c400;
}

input {   
  margin-right: 20px; 
}
/* Brian Boyle Added CSS below*/
.spacing {
 color: #FFF;
}
.button_slide {
 color: #FFF;
 border-color: #FFF;
 background: rgba(76, 104, 165, 0.699);
 border-radius: 15px;
 padding: 5px 15px;
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
 box-shadow: inset 0 0 0 50px rgba(34, 74, 160, 0.699);
}

</style>
