<template>
  <div>
    <Home />
  </div>
</template>
<script>
import Home from "@/components/Home.vue"
import { mapState } from "vuex";
export default {
  components: {
    Home,
},
  computed: {
    ...mapState({
      lang: state => state.data.lang
    })
  },
  mounted() {
    this.$store.dispatch('setAssing', 'Мир')
  }
}
</script>

<style></style>
