<template>
  <Home />
</template>
<script>
import Home from "@/components/Home.vue"
export default {
  components: {
    Home
  },
  mounted() {
    let lang = localStorage.getItem('lang')
    let x = localStorage.getItem('q')
    this.$store.dispatch('setAssing', x)
  }
}
</script>
<style></style>
