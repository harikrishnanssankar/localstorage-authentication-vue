<template>
  <div class="login">
    <div class="login__container">
      <h1>Login</h1>
      <form @submit.prevent="userLogin" class="login__form" action="">
        <span class="input__error">{{
          errors.username || errors.password
        }}</span>
        <input
          v-model="username"
          placeholder="Enter your username..."
          type="text"
        />
        <input
          v-model="password"
          placeholder="Enter password..."
          type="password"
        />
        <button>Login</button>
      </form>
      <router-link class="router__link" to="/signup"
        ><span>New user? Signup</span></router-link
      >
    </div>
  </div>
</template>

<script>
import validateLogin from "../validation/validateLogin";
export default {
  data() {
    return {
      username: "",
      password: "",
      errors: {},
    };
  },
  methods: {
    userLogin() {
      let loginDetails = {
        username: this.username,
        password: this.password,
      };

      const { isInvalid, errors } = validateLogin(loginDetails);

      if (isInvalid) {
        this.errors = errors;
      } else {
        this.errors = {};
        let lsUsers = localStorage.users;
        lsUsers = JSON.parse(lsUsers);
        let usernameIndex = lsUsers.findIndex(
          (user) => user.username === loginDetails.username
        );

        if (usernameIndex > -1) {
          let passwordIndex = lsUsers.findIndex(
            (user) => user.password === loginDetails.password
          );

          if (passwordIndex > -1) {
            let activeUser = lsUsers.find(
              (user) => user.username === loginDetails.username
            );
            localStorage.setItem("activeUser", JSON.stringify(activeUser));
            this.$router.push("/dashboard");
            window.location.reload();
          } else {
            this.errors.password = "Password not valid";
          }
        } else {
          this.errors.username = "User does not exist";
        }
      }
    },
  },
};
</script>

<style>
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0);
}
.login__container {
  display: flex;
  flex-direction: column;
  max-width: 95%;
  width: 350px;
  height: 60vh;
  justify-content: space-evenly;
  align-items: center;

  box-shadow: 3px 4px 20px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.login__container > h1 {
  color: white;
}
.login__form {
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 80%;
  justify-content: space-evenly;
}
.login__form > input {
  padding: 7px 10px;
  border-radius: 5px;
  outline: none;
  border: none;
  box-shadow: 1px 1px 2px 1px rgba(107, 107, 107, 0.419);
  background-color: rgba(255, 255, 255, 0.219);
  color: rgb(58, 58, 58);
  /* border: 1px solid rgb(255, 255, 255); */
}
.login__form > button {
  border: none;
  padding: 8px;
  border-radius: 5px;
  background-color: rgba(240, 240, 240, 0);
  box-shadow: 1px 1px 3px 1px rgba(61, 61, 61, 0.419);
  color: white;
  transition: ease-in 0.2s;
}
.login__form > button:hover {
  background-color: rgba(255, 255, 255, 0.138);
  box-shadow: 2px 2px 5px 1px rgba(61, 61, 61, 0.419);
  transition: ease-in 0.3s;
}
.login__form > button:active {
  background-color: rgba(255, 255, 255, 0.289);
  box-shadow: 2px 2px 5px 1px rgba(61, 61, 61, 0.419);
  transition: ease-in 0.2s;
  outline: none;
  border: none;
}
.login__form > button:focus {
  outline: none;
}
</style>