<!-- Vikku Ponnaganti - Author of this file from Lines 3 - 61, any changes within
these lines authored by someone else will be stated otherwise -->
<template>
  <div>
  <form @submit.prevent="register">
    <h2>Register</h2>
    <input
      type="text"
      placeholder="Name ..."
      v-model="user.name"
    />
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
    <button type="submit">Register</button>
  </form>
</div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    register() {
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.user.email, this.user.password)
      .then((res) => {
        res.user
          .updateProfile({
            displayName: this.user.name
          })
          .then(() => {
            this.$router.push('/')
          });
      })
      .catch((error) => {
         alert(error.message);
      });
    }
  }
};
</script>

