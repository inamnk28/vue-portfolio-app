<template>
    <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-10 col-md-offset-1">
        <div class="title text-center">
          <h1 class="text-white">Inam Nkabi</h1>
          <h3 class="text-white">Full-Stack Web Development Student</h3>
          <hr />
        </div>
        
        <!-- summary section -->
        <div class="summary text-white">
          <h2 class="text-center">Summary</h2>
          <p class="text-center">I am a results-driven Full-Stack Web Development student Life Choices Academy passionate about developing user-friendly software applications. I have excellent problem-solving skills and ability to perform well in a team. Proficient in assortment technologies, including JavaScript, HTML, CSS, Bootstrap and I am currently learning Vue.Js</p>
        </div>
        
        
        <!-- education section -->
        <hr>
        <h2 class="text-center text-white">Education</h2>
        <hr>
        <div class="education text-white" v-for="edu of education" :key="edu.id" :edu="edu">
          <div class="row education-title">
            <div class="col-md-9">
              <h3>{{ edu.name }}</h3>
              <h4>{{ edu.role }}</h4>
            </div>
            <div class="col-md-3">
              <h3>{{ edu.years }}</h3>
            </div>
          </div>
          <div class="row education-summary">
            <div class="col-md-12">
              <p>{{ edu.desc }}</p>
            </div>
          </div>
        </div>
        <hr>
         <h2 class="text-center text-white">Skills</h2>
         <hr>
    <div v-if="skills" class="row">
        <SkillsComp class="comp d-flex flex-wrap justify-content-center"/>
    </div>
        </div>
      </div>
    </div>
</template>
<script>
import SkillsComp from "@/components/SkillsComp.vue"
export default {
    computed: {
        education() {
            return this.$store.state.education;
        },
        skills() {
            return this.$store.state.skills;
        }
    },
    mounted() {
        this.$store.dispatch("fetchEducation");
        this.$store.dispatch("fetchSkills");
    },
    components: { SkillsComp }
    // props: ['edu']
}
</script>
<style scoped>
  .separator {
  width: 30%;
}
</style>