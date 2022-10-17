<!-- Vikku Ponnaganti - Author of this file from Lines 3 - 53, any changes within
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
  <form @submit.prevent="login">     
    <h2>Login</h2>     
    <input       
      type="email"       
      placeholder="Email address..."       
      v-model="user.email"     
    />     
    <input       
      type="password"       
      placeholder="password..."       
      v-model="user.password"     
    />     
    <button type="submit">
       Login
    </button>   
  </form> 
</div>
</template>

<script>
import firebase from "firebase/compat/app";

export default {
  name: 'Login',
  data() {
    return {
      user: {   
        email: '',
        password: ''
      },
      ImageGamerFit: require("../assets/gamefitImg.jpg"),
    };
  },
  methods: {
  login() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.user.email, this.user.password)
      .then(() => {
        alert('Successfully logged in');
        this.$router.push('/xbox');
      })
      .catch(error => {
        alert(error.message);
      });
  },
},

};
</script>

<!-- Brian Boyle - Added CSS for Image-->
<style scoped>
.gamerFitImage {
       height: 40%;
       width: 40%;
       margin: 0 auto;
}
</style>