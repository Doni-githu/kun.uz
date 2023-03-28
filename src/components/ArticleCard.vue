<template>
    <div class="list">
        <div v-for="article, index in data" class="list-item" :key="index">
            <img v-if="article.urlToImage" :src="article.urlToImage">
            <img v-else src="../../public/news.png">
            <span style="display: none;">{{ index }}</span>
            <h3 @click="pushToNewPage">{{ article.title }}</h3>
            <p>{{ article.description.slice(0, 200) }}...</p>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
            isLoading: state => state.data.isLoading,
            data: state => state.data.data,
        })
    },
    methods: {
        pushToNewPage(e) {
            const i = e.target.parentElement.childNodes[1].textContent
            return this.$router.push(`/article/${i}`)
        }
    },
}
</script>
<style scoped>
.list {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-evenly;
    grid-row-gap: 50px;
    grid-column-gap: 50px;
}

.list-item {
    width: 400px;
    height: 500px;
    display: flex;
    flex-direction: column;
}

.list-item img {
    width: 400px;
    height: 300px;
    padding: 10px;
    object-fit: cover;
}

h3 {
    color: #000;
    transition: all 0.5s;
    cursor: pointer;
}

h3:hover {
    color: blue;
}
</style>