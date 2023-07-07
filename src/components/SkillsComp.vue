<template>
    <div class="">
        <div class="skills mx-5 my-3" v-for="skill of skills" :key="skill.id" :skill="skill">
            <img :src="skill.icon" :alt="skill.name">
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        skills() {
            return this.$store.state.skills;
        },
    },
    mounted() {
        this.$store.dispatch("fetchSkills")
    },
    props: ['skill']
}
</script>
<style scoped>
img {
        width: 100px;
    }
    .skills {
        display: flex;
    }
/* .skills{
    height: 350px !important;
} */
</style>