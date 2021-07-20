// https://free.currconv.com/others/usage?apiKey=320a798ebf775d31f3e7
// const key = process.env.VUE_APP_FIXER
const key = '320a798ebf775d31f3e7'   // https://free.currconv.com/


export default {
    actions:{
        async fetchCurrencyData({dispatch, commit}) {
            try {
                const usage = await dispatch('fetchHowManyUsage')
                if (usage.usage >= 99) {
                    console.log('LIMIT API USAGE=', usage.usage)
                    throw 'LIMIT_USAGE'
                } else {
                    return {
                        rates:await dispatch('fetchActualCurrency'),
                        usage
                    }
                }
            } catch (error) {
                console.log("\nERR RRR")
                console.log(error)
            }

            // 
        },
        async fetchHowManyUsage ({commit}) {
            try {
                const res = await fetch(`https://free.currconv.com/others/usage?apiKey=${key}`)
                console.log('-----------')
                // if (res.status !== 200) throw res.json()
                const usage = await res.json()
                commit('SET_USAGE', usage)
                return usage
            } catch (error) { console.log("\nERR R RR"); throw error}
        },
        async fetchActualCurrency  ({commit}) {
            try {
                    const res = await fetch(`https://free.currconv.com/api/v7/convert?q=CZK_KZT,EUR_KZT&compact=ultra&apiKey=${key}`)
                    const currency = await res.json()
                    commit('SET_ACTUAL_CURRENCY', currency)
                    return  currency
                } catch (e) { throw e
                }
        }
    },
    mutations:{
        SET_ACTUAL_CURRENCY(state, currency) {
            state.currency = currency
        },
        SET_USAGE(state, usage) {
            state.usage =  usage
        }
    },

    state:{
        currency: JSON.parse(window.localStorage.getItem('currency')),
        usage: null,
    },

    getters:{
        currency(state){
            return state.currency
        },
        usage(state){
            return state.usage
        }
        
    }

}



/*    TODO   */
//  udelat env  pro ulozeni  key (fixer.io/api)


/*


{
    "CZK_KZT": 19.748054,
    "KZT_CZK": 0.050638
}



*/