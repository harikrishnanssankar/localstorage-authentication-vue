<template>
  <div>
    <div v-if="user.username === 'admin'" class="dashboard__admin">
      <h1>Welcome {{ user.username }}</h1>
      <div class="dashboard__cards">
        <div
          v-for="(item, index) in users"
          :key="item.username"
          class="dashboard__card"
        >
          <img src="../assets/profile.png" alt="profileimg" />
          <h6>user: {{ index + 1 }}</h6>
          <h4>{{ item.username }}</h4>
        </div>
      </div>
    </div>
    <div v-if="user.username !== 'admin'" class="dashboard__user">
      <h1>Welcome {{ user.username }}</h1>
      <div >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ex
        accusantium commodi itaque quas tenetur aliquid aut
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur officia iusto minima laborum repudiandae 
        porro optio nobis, commodi fuga veritatis accusamus possimus amet corporis, ten
        etur repellat, velit maxime. Odio, velit.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      users: [],
    };
  },
  mounted() {
    if (localStorage.activeUser) {
      let lsUsers = localStorage.users;
      this.users = JSON.parse(lsUsers);

      let activeUser = localStorage.activeUser;
      this.user = JSON.parse(activeUser);
    }
  },
};
</script>

<style>
.dashboard__admin {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  width: 100%;
  min-height: 100vh;
  color: rgb(255, 255, 255);
}
.dashboard__admin > h1 {
  margin-bottom: 20px;
}
.dashboard__cards {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 1.5em;
  row-gap: 1.5em;
  justify-content: space-evenly;
  padding: 0 1.7em 3em 1.7em;
  
}
.dashboard__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 9px;
  box-shadow: 3px 4px 20px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 200px;
  height: 250px;
  padding: 20px;
}
.dashboard__card > img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 55px;
}
.dashboard__user {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 7vw;
  width: 100vw;
  min-height: 100vh;
  color: rgb(255, 255, 255);
}
.dashboard__user > div {
  width: 650px;
  max-width: 95%;
}
</style>
