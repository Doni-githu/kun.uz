<template>
    <div class="content">
        <div class="content-conteiner">
            <div v-for="article in data">
                <div v-if="this.$route.params.id == article.id">
                    <img class="img" :src="article.urlToImage">
                    <h1>{{ article.title }}</h1>
                    <h2>Author:
                        <span v-if="article.author">{{ article.author }}</span>
                    </h2>
                    <div>
                        {{ publishedAt }}
                    </div>
                    <p>{{ article.description }}</p>
                </div>
            </div>
        </div>
        <div class="cards">
            <div v-for="card, index in cards" class="card">
                <img :src="card.urlToImage">
                <span>{{ card.publishedAt }}</span>
                <span style="display: none;">{{ index }}</span>
                <b class="span" @click="pushHandler">{{ card.title }}</b>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
            cards: []
        }
    },
    computed: {
        ...mapState({
            data: state => state.data.data
        })
    },
    mounted() {
        for (let i = 0; i < 4; i++) {
            const element = this.data[i];
            this.cards.push(element)
        }
    },
    methods: {
        pushHandler(e) {
            const i = e.target.parentElement.childNodes[2].textContent
            return this.$router.push(`/article/${i}`)
        }
    }
}
</script>
<style scoped>
.content {
    width: 100%;
    margin: 0 auto;
}

.content-conteiner {
    padding: 10px;
    width: 60%;
    margin: 0 auto;
}

.img {
    width: 100%;
    height: auto;
    object-fit: contain;
}

.cards {
    width: 100%;
    height: auto;
    padding: 20px;
    display: flex;
    gap: 20px;
}

.cards .card {
    padding: 10px;
    border: 1px solid rgba(0,0,0,.125);
}

.span{
    cursor: pointer;
}
.span:hover{
    color: blue;
}

</style>