<template>
  <div class="navbar__container">
    <div class="navbar">
      <div class="navbar__left">
        <router-link class="router__link" to="/"> <h1>My App</h1></router-link>
      </div>
      <div class="navbar__right">
        <div v-if="!user">
          <router-link class="router__link" to="/login"
            ><h5>Login</h5></router-link
          >
        </div>
        <a v-if="user" class="router__link" href="" @click.prevent="logout"
          >Logout</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
    };
  },
  mounted() {
    if (localStorage.activeUser) {
      let activeUser = localStorage.activeUser;
      this.user = JSON.parse(activeUser);
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("activeUser");
      this.$router.push("/login");
      window.location.reload();
    },
  },
};
</script>

<style>
.navbar__container {
  position: fixed;
  top: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;
}
.navbar {
  width: 98%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 50px;

  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
}
.navbar__left h1 {
  margin: 0;
  cursor: pointer;
  color: rgb(255, 255, 255);
}
.navbar__right > h3 {
  cursor: pointer;
  color: rgb(255, 255, 255);
}
.router__link {
  text-decoration: none;
  color: rgb(225, 225, 225);
}
.router__link:hover {
  text-decoration: none;
  color: rgb(115, 227, 247);
}
</style>
