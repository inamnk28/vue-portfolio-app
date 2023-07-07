<template>
    <div v-if="projects" class="pros row justify-content-center ">
        <ProjectsComp class="comp col-lg-4 col-md-4 col-sm-12" v-for="project of projects" :key="project.id" :project="project"/>
    </div>
    <div v-else>Lazy Loading</div>
</template>
<script>
import ProjectsComp from "@/components/ProjectsComp.vue";
export default {
    computed: {
        projects() {
            return this.$store.state.projects;
        },
    },
    mounted() {
        this.$store.dispatch("fetchProjects");
    },
    components: { ProjectsComp }
}
</script>
<style scoped>
 .pros {
    padding-block: 70px;
    background: radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%);
 }
 .comp {
    width: 450px;
    animation: fadeInDown; 
  animation-duration: 2s;
 }
</style>