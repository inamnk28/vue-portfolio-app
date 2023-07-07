<template>
    <div v-if="testimonials" class="w-100 tests row justify-content-center py-5 overflow-x-hidden">
        <TestimonialsComp class="comp col-lg-4 col-md-4 col-12" v-for="testimonial of testimonials" :key="testimonial.id" :testimonial="testimonial"/>
    </div>
    <div v-else>Loading</div>
</template>
<script>
import TestimonialsComp from "@/components/TestimonialsComp.vue"
export default {
    computed: {
    testimonials() {
        return this.$store.state.testimonials;
        },
    },
    mounted() {
        this.$store.dispatch("fetchTestimonials");
    },
    components: { TestimonialsComp },
}
</script>
<style scoped>
   .tests {
    width: 100%;
    margin-inline: 0;
    background: radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%);
   }
   .comp {
    animation: fadeInDown; 
  animation-duration: 2s;
   }
</style>