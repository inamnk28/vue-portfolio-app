<template class="blue">
  <div class="containe">
    <div class="row container mx-auto justify-content-center">
      <div class="description col-lg-6 col-md-6 col-sm-12">
      <h2 class="fs-1 text-uppercase fw-bolder" id="name">Inam Nkabi</h2>
      <p class="fs-4 fw-bold text-center text-white text-wrap">A results-orientated Front-End Developer based in Cape Town focused on writing clean and elegant code.</p>
      <button><a class="fw-bolder text-decoration-none text-white" target="_blank" href="https://drive.google.com/file/d/1PMyiiP8a38ETBFqnuzC7jlafVvcKNfZa/view?usp=drive_link">Resume</a></button>
    </div>
    <div class="my-image col-lg-6 col-md-6 col-sm-12">
      <img src="https://i.postimg.cc/13ddfcPy/IMG-20230213-WA0030.jpg" alt="">
    </div>
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
    /* display: inline-block; */
  /* margin: 0 0.5rem; */

  animation: backInRight; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s; /* don't forget to set a duration! */
  }
  .fs-4 {
  display: inline-block;
  margin: 0 0.5rem;

  animation: backInUp; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s; /* don't forget to set a duration! */
}
  .fs-1 {
    color: #199fb1;
    animation: lights 5s 750ms linear infinite;
  }
  @keyframes lights {
  0% {
    color: hsl(230, 40%, 80%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.2),
      /* 0 0 0.125em hsla(320, 100%, 60%, 0.3),
      -1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
      1em 0.125em 0.5em hsla(200, 100%, 60%, 0); */
  }
  
  30% { 
    color: hsl(230, 80%, 90%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 60%, 0.5),
      -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
      0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
  }
  
  40% { 
    color: hsl(0, 98%, 47%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 90%, 0.5),
      -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),
      0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4);
  }
  
  70% {
    color: hsl(157, 91%, 49%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em (320, 100%, 60%, 0.5),
      0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
      -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
  }
  
  100% {
    color: hsl(170, 100%, 47%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.2),
      0 0 0.125em hsla(320, 100%, 60%, 0.3),
      1em -0.125em 0.5em hsla(0, 94%, 50%, 0),
      -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
  }
  
}
.fs-1:hover {
  transform: scale(1.1);
}
  .containe {
    padding-block: 60px;
    text-align: center;
    width: 100vw;
    background: radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%);
    /* background-color: blue; */
  }
  .description {
    margin-block: auto;
  }
  @media screen and (max-width: 767px) {
    .description {
      margin-bottom: 1rem;
    }
  }
  button {
    height: 50px;
    width: 130px;
    border: none;
    background-color: black;
  }
</style>
