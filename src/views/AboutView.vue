<template>
  <div class="container my-3">
    <div class="intro row justify-content-center">
      <div class="p-image col-lg-6 col-md-6 col-12 d-flex justify-content-center">
        <img src="https://i.postimg.cc/0jVh009t/IMG-20230213-WA0034.jpg" alt="">
      </div>
      <div class="about-desc col-lg-6 col-md-6 col-12 d-flex justify-content-center">
        <p class="text-wrap"> I am ambitious, enjoy challenges, and continually make objectives for myself so that I have something to aim towards. I'm not content with settling; I'm always seeking for methods to improve and achieve more. In grade 8, I developed an interest in software development and hoped to pursue a computer-related topic, but my high school did not offer CAT; instead, it offered IT, but you had to pay for the subject if you wanted to take it.</p>
      </div>
    </div>
    <div class="edu-skill row">
      <div class="education justify-content-center col-lg-6 col-md-6 col-12 px-5">
        <h3 class="text-center">Educational Background</h3>
        <h4>Tertiary Education</h4>
        <p>Full-Stack Web Development<br>Life Choices Academy || Apr 2023 - Present</p>
        <h4>Secondary School Education</h4>
        <p>Matric<br>Rhodes High School || Jan 2022 - Nov 2022</p>
        <button class="button py-2 border-0 bg-black text-white fw-bold">Download Resume</button>
      </div>
      <div class="skills justify-content-center col-lg-6 col-md-6 col-12">
              <h3 class="text-center">Skills</h3>
        <div class="seperate d-flex justify-content-evenly">
          <div class="px-5">
            <h6>Languages:</h6>
            <ul>
              <li>HTML & CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div class="ml-5 px-5">
            <h6>Others:</h6>
            <ul>
              <li>Command line tools</li>
              <li>Package managing</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
        </div>
        <div class="seperate d-flex tech">
          <div class="pad">
          <h6>Technologies:</h6>
          <ul>
            <li>Vue.js</li>
            <li>Bootstrap</li>
            <li>Firebase</li>
            <li>Netlify</li>
            <li>Figma</li>
          </ul>
        </div>
        <div class="px-5"></div>
        </div>
      </div>
    </div>
        </div>
</template>
<style scoped>
  img {
    height: 500px;
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
