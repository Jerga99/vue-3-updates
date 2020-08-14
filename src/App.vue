<template>
  <div class="container">
    <div class="py-5 text-center">
      <img height="150" src="./assets/logo.png"/>
      <h2>Keep Resources</h2>
      <p class="lead">Keep your resource at once place</p>
      <router-link :to="'/resources'" class="btn btn-outline-primary">
        Home
      </router-link>
      <router-link :to="'/resources/new'" class="btn ml-2 btn-outline-primary">
        New
      </router-link>
    </div>
    <router-view />
  </div>
</template>
<script>


export default {
  name: 'App'
}
</script>
<style>
  @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>
