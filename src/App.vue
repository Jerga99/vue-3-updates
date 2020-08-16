<template>
  <Header/>
  <div class="container">
    <div id="teleportContent"></div>
    <router-view />
  </div>
</template>
<script>
import Header from '@/components/Header';
export default {
  name: 'App',
  components: { Header }
}
</script>
<style>
  @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>
