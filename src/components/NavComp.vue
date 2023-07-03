<template> 
  <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <router-link class="navbar-brand links text-white" to="/">Nkabi</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav m-auto gap-3">
        <li class="nav-item">
            <router-link class="nav-link links fw-bold text-white" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link links fw-bold text-white" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link links fw-bold text-white" to="/resume">Resume</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link links fw-bold text-white" to="/projects">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link links fw-bold text-white" to="/testimonials">Testimonials</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link links fw-bold text-white" to="/contact">Contact</router-link>
          </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<style>
    .navbar-nav {
        
    }
</style>