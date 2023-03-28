<template>
  <div class="conteiner">
    <Navbar />
    <RouterView />
  </div>
</template>
<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
</script>
<style>
.conteiner {
  width: 90%;
  margin: 0 auto;
}
</style>