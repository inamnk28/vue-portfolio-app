<template>
  <div class="color py-3">
    <div class="container">
    <div class="intro row justify-content-center">
      <div class="p-image col-lg-6 col-md-6 col-12 d-flex justify-content-center">
        <img src="https://i.postimg.cc/0jVh009t/IMG-20230213-WA0034.jpg" alt="">
      </div>
      <div class="about-desc py-3 col-lg-6 col-md-6 col-12 d-flex justify-content-center">
        <p class="text-wrap text-white px-1"> I am ambitious, enjoy challenges, and continually make objectives for myself so that I have something to aim towards. I'm not content with settling; I'm always seeking for methods to improve and achieve more. In grade 8, I developed an interest in software development and hoped to pursue a computer-related topic, but my high school did not offer CAT; instead, it offered IT, but you had to pay for the subject if you wanted to take it.</p>
      </div>
    </div>
  </div>
  </div>
</template>
<style scoped>
  img {
    height: 31rem;
    width: 30rem;
    border-radius: 50rem;
    border: solid white;
  }
  .p-image {
  /* display: inline-block;
  margin: 0 0.5rem; */
  animation: fadeInLeft; 
  animation-duration: 2s; 
}
.about-desc {
  display: inline-block;
  /* margin: 0 0.5rem; */
  animation: fadeInRight; 
  animation-duration: 2s;
}
  @media screen and (max-width: 415px) {
    img {
      width: 20rem;
      height: 20rem;
      border-radius: 50rem;
    }
  }
  .color {
    background: radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%);
  }
 .margin {
    /* padding-inline: 70px; */
    background-color: bisque;
  }
  .tech {
    padding-inline: 87px;
  }
  .text-wrap {
    margin-block: auto;
  }
  .education {
    /* background-color: blue; */
    position: relative;
  }
  .button {
    transform: rotate(90deg);
    right: 0;
    position: absolute;
    bottom: calc(50% - 1rem);
  }
</style>
