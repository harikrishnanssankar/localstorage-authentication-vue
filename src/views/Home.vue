<template>
  <div class="home">
    <div class="home__container">
      <h1>Welcome...</h1>
      <span>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
        obcaecati error est nostrum facere iste sapiente, similique impedit,
        harum consequuntur, doloribus vitae eligendi! Porro corporis molestias
        aliquid officia obcaecati modi! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Adipisci sed recusandae nesciunt voluptatibus, omnis
        ab provident dignissimos eveniet, molestiae ea officia, magnam nulla
        architecto. Recusandae eveniet dolores aspernatur excepturi facilis?
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.home {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 7vw;
  justify-content: center;
  color: white;
}
.home__container {
  max-width: 95%;
  display: flex;
  flex-direction: column;
}
.home__container > h1 {
  font-size: 4em;
}
.home__container > span {
  width: 650px;
  max-width: 95%; 
}
</style>