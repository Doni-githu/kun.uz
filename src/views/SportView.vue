<template>
    <div>
        <Home />
    </div>
</template>
<script>
import Home from '../components/Home.vue';
export default {
    components: { Home },
    mounted() {
        this.$store.dispatch('setAssing', 'Спорт')
    }
}
</script>
<style></style>