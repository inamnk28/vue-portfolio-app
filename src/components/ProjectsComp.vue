<template>
    <div class="projects">
        <div class="project-card">
             <div class="image">
                <img :src="project.image" :alt="project.name">
            </div>
            <div class="project-content">
                <h6  class="text-white">{{ project.name }}</h6>
                <p class="text-white fs-6">{{ project.desc}}</p>
                <div class="d-flex justify-content-center">
                  <button class="but border-0 mx-1"><a :href="project.github"><img height="35" src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/></a></button>
                  <button class="but border-0 mx-1"><a :href="project.netlify"><img height="35" src="https://img.icons8.com/ios/50/internet--v1.png" alt="internet--v1"/></a></button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["project"],
    created() {
        console.log(this.project)
    }
}
</script>
<style scoped>
.projects {
  position : relative;
  width : 1100px;
  display : flex;
  align-items : center;
  justify-content : center;
  flex-wrap : wrap;
  padding : 30px;  
}
.but {
  border-radius: 50%;
}
.project-card {
    background: radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%);
}
.projects .project-card {
  position: relative;
  max-width : 300px;
  max-height: 300px;
  height : 215px;  
  background-color : #fff;
  margin : 30px 10px;
  padding : 20px 15px;
  display : flex;
  flex-direction : column;
  filter:drop-shadow(4px 4px 8px black);
  transition : 0.3s ease-in-out;
}
.projects .project-card:hover {
  height : 320px;    
}
.projects .project-card .image {
  position : relative;
  /* width : 260px; */
  height : 500px !important;
  top : -40%;
  left: 6px;
  box-shadow : 0 5px 20px rgba(0,0,0,0.2);
  z-index : 1;
}

.projects .project-card .image img {
  max-width : 100%;
}

.projects .project-card .project-content {
  position : relative;
  top : -140px;
  padding : 10px 15px;
  color : #111;
  text-align : center;
  visibility : hidden;
  opacity : 0;
  transition : 0.3s ease-in-out;
    
}

.projects .project-card:hover .project-content {
   margin-top : 30px;
   visibility : visible;
   opacity : 1;
   transition-delay: 0.2s;
  
}
</style>