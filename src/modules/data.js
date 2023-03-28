import axios from "axios"
const state = {
    isLoading: false,
    data: null,
    lang: '',
    dataDetail: null
}

const mutations = {
    setDataStart(state) {
        state.isLoading = false
        state.data = null
    },
    setDataSuccess(state, payload) {
        state.isLoading = true
        state.data = payload
    },
    setDataFailur(state, payload) {
        state.isLoading = true
        state.data = payload
    },
    setLang(state, payload) {
        state.lang = payload
        localStorage.setItem('lang', state.lang)
    },
    StartDataDetail(state) {
        state.isLoading = true
    },
    SuccessDataDetail(state, payload) {
        state.isLoading = false
        state.dataDetail = payload
    },
    FailurDataDetail(state) {
        state.isLoading = false

    },
}

const actions = {
    async setAssing(context, payload) {
        context.commit("setDataStart")
        try {
            const year = new Date().getFullYear()
            const month = new Date().getMonth()
            const day = new Date().getDate()
            const date = [year, month + 1, day].join("-")
            const date2 = [year, month + 1, day - 10].join("-")
            const { data } = await axios.get("https://newsapi.org/v2/everything", {
                params: {
                    apiKey: '99bbaab463f74add99579c854f5898cd',
                    sortBy: 'popularity',
                    q: payload,
                    to: date,
                    from: date2,
                }
            })
            const newData = []
            for (let i = 0; i < data.articles.length; i++) {
                const element = data.articles[i];
                element["id"] = i
                newData.push(element)
            }
            context.commit('setDataSuccess', newData)
        } catch (error) {
            alert(error.message)
            context.commit("setDataFailur", error)
        }
    },
}

export default {
    state,
    actions,
    mutations
}