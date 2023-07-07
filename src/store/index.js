import { createStore } from 'vuex'
const data = 'https://inamnk28.github.io/database/database.json'
export default createStore({
  state: {
    projects: null,
    project: null,
    testimonials: null,
    testimonial: null,
    education: null,
    education: null,
    skills: null,
    skill: null,
  },
  mutations: {
    setProjects: (state, projects) => {
      state.projects = projects;
    },
    setTestimonials: (state, testimonials) => {
      state.testimonials = testimonials;
    },
    setEducation: (state, education) => {
      state.education = education;
    },
    setSkills: (state, skills) => {
      state.skills = skills;
    },
  },
  actions: {
    async fetchProjects(context) {
      try {
        let response = await fetch(data)
        let {projects} = await response.json()
        context.commit("setProjects", projects)
      }
      catch(error) {
        alert(error.message)
      }
    },
    async fetchTestimonials(context) {
      try {
        let response = await fetch(data)
        let {testimonials} = await response.json()
        context.commit("setTestimonials", testimonials)
      }
      catch(error) {
        alert(error.message)
      }
    },
    async fetchEducation(context) {
      try {
        let response = await fetch(data)
        let {education} = await response.json()
        context.commit("setEducation", education)
      }
      catch(error) {
        alert(error.message)
      }
    },
    async fetchSkills(context) {
      try {
        let response = await fetch(data)
        let {skills} = await response.json()
        context.commit("setSkills", skills)
      }
      catch(error) {
        alert(error.message)
      }
    },
  },
})
