<template>
  <div class="container row mx-auto">
    <div class="description col-lg-6 col-md-6 col-sm-12">
      <h2 class="fs-1 fw-bolder">Inam Nkabi</h2>
      <p class="fs-4 text-center text-wrap">A results-orientated Front-End Developer based in Cape Town focused on writing clean and elegant code.</p>
      <button><router-link to="/resume" class="text-white text-decoration-none fw-bold" >Resume</router-link></button>
    </div>
    <div class="my-image col-lg-6 col-md-6 col-sm-12">
      <img src="https://i.postimg.cc/13ddfcPy/IMG-20230213-WA0030.jpg" alt="">
    </div>
  </div>
</template>
<style scoped>
  img {
    width: 300px;
  }
  .my-image {
    display: flex;
    justify-content: center;
  }
  .container {
    margin-block: 60px;
    text-align: center;
    /* background-color: blue; */
  }
  .description {
    margin-block: auto;
  }
  button {
    height: 50px;
    width: 130px;
    border: none;
    background-color: black;
  }
</style>
