<template>
    <div class="background">
        <div class="anime">
            <div v-if="education" class="py-3">
        <ResumeComp class="comp mx-auto" />
    </div>
    <div v-else>Lazy Loading</div>
        </div>
    </div>
</template>
<script>
import ResumeComp from "@/components/ResumeComp.vue";
export default {
    computed: {
        education() {
            return this.$store.state.education;
        },
    },
    mounted() {
        this.$store.dispatch("fetchEducation");
    },
    components: { ResumeComp },
}
</script>
<style scoped>
.background {
    background: radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%);
    
}
.anime {
  animation: fadeInUp; 
  animation-duration: 2s;
}
    img {
        width: 100px;
    }
</style>