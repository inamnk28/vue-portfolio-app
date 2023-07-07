<template> 
  <nav class="navbar navbar-expand-lg bg-dark w-100">
  <div class="container-fluid bg-dark mx-3">
    <router-link class="navbar-brand links text-uppercase text-white" to="/">Nkabi</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav m-auto gap-3">
        <li class="nav-item">
            <router-link class="nav-link text-uppercase links fw-bold text-white" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-uppercase links fw-bold text-white" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-uppercase links fw-bold text-white" to="/resume">Resume</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-uppercase links fw-bold text-white" to="/projects">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-uppercase links fw-bold text-white" to="/testimonials">Testimonials</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-uppercase links fw-bold text-white" to="/contact">Contact</router-link>
          </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<style>
 nav {
    height: 60px;
 }
.links:hover {
  scale: 1.1;
  animation: transUpDown 900ms cubic-bezier(0.175, 0.885, 0.32, 0.275) infinite;
}
@keyframes transUpDown {
  0% {
    opacity: 1;
    transform: translateY(px);
  }
  25% {
    opacity: 0;
    transform: translateY(-10px);
  }
  50% {
    opacity: 1;
    transform: translateY(0px);
  }
  75% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>