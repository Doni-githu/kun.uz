<template>
    <ArticleDetailView />
    <div class="home" v-if="isLoading">
        <ArticleCard />
    </div>
    <Loader v-else />
</template>
<script>
import { mapState } from "vuex"
import ArticleDetailView from "../views/ArticleDetailView.vue";
import ArticleCard from "./ArticleCard.vue";
export default {
    computed: {
        ...mapState({
            isLoading: state => state.data.isLoading,
            data: state => state.data.data,
        })
    },
    components: {
        ArticleCard,
        ArticleDetailView
    }
}
</script>
<style scoped>
.home {
    width: 100%;
    margin: 0 auto;
    padding-top: 2rem;
}
</style>