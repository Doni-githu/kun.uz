<template>
    <div class="navbar">
        <div class="left">
            <div class="brand">
                <RouterLink class="link" to="/" @click="setLocalStorogeUzb">
                    <img src="../../public/kun-uz-logo.svg">
                </RouterLink>
            </div>
            <ul>
                <li>
                    <RouterLink class="link" @click="setLocalStoroge" :to="{ name: 'home' }">{{ uz }}</RouterLink>
                </li>
                <li>
                    <RouterLink class="link" @click="setLocalStoroge" :to="{ name: 'about' }">{{ world }}</RouterLink>
                </li>
                <li>
                    <RouterLink class="link" @click="setLocalStoroge" :to="{ name: 'our' }">{{ our }}</RouterLink>
                </li>
                <li>
                    <RouterLink class="link" @click="setLocalStoroge" :to="{ name: 'sport' }">{{ sport }}</RouterLink>
                </li>
            </ul>
        </div>
        <div class="content">
            <div class="select">
                <select @change="onSubmitHandler" name="langH">
                    <option v-for="(select, index) in lang" :value="select.value" :key="index">
                        {{ select.txt }}
                    </option>
                </select>
            </div>
            <div class="anonymos">
                <button>
                    <i class="fa fa-user"></i>   
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import { RouterLink } from "vue-router"
import { mapState } from "vuex"
export default {
    data() {
        return {
            uz: 'Узбекистан',
            world: 'Мир',
            our: 'Общество',
            sport: 'Спорт',
            lang: [
                {
                    txt: 'Русский',
                    value: 'ru'
                },
                {
                    txt: 'Узбекча',
                    value: 'uz'
                },
                {
                    txt: 'English',
                    value: 'en'
                }
            ],
            selected: ''
        }
    },
    computed: {
        ...mapState({
            data: state => state.data.data
        })
    },
    methods: {
        onSubmitHandler(e) {
            this.selected = e.target.value
            this.$store.commit('setLang', this.selected)
        },
        setLocalStoroge(e) {
            localStorage.setItem('q', e.target.textContent)
        },
    
    }
}
</script>
<style scoped>
.navbar {
    width: 100%;
    display: flex;
    gap: 30px;
    align-items: center !important;
}



.left {
    display: flex;
    height: auto;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    gap: 20px;

}

.navbar .left ul {
    width: 40%;
    height: 45px;
    margin: 0 !important;
    display: flex;
    align-items: center;
    gap: 40px;
    list-style: none;
    /* justify-content: space-between; */
}

.content {
    width: auto;
    display: flex;
    align-items: center;
    gap: 25px;
    justify-content: flex-end;
}

.link {
    text-decoration: none;
    color: #000;
    font-weight: 600;
    transition: all 0.4s;
    font-family: sans-serif;
}

.link:hover {
    color: blue;
}

.input {
    font-size: 18px;
    padding: 5px 10px;
    border: none;
    background-color: transparent;
}

.select select {
    padding: 4px 7px;
    border: 1px solid rgb(218, 212, 212);
    border-radius: 10px;
    box-shadow: 2px 2px 2px rgb(143, 143, 143);
    background-color: aliceblue;
}

.search {
    position: relative;
    transition: all 0.75s;
}

.search:hover {
    box-shadow: 3px 3px 3px #000;
}

.search:focus {
    box-shadow: 3px 3px 3px #000;
    border: none;
    outline: none !important;
}

.btn {
    top: 0;
    background-color: transparent;
    border: none;
    font-size: 18px;
    right: 0;
    position: absolute;
}

.anonymos button{
    border: 1px solid rgba(0, 0, 0, .125);
    padding: 5px 10px;
    border-radius: 50%;
}

</style>