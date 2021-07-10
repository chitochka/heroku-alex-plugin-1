const key = '8578e8d026e18e8b31747d4eab656c01'


export default {
    actions:{
        async fetchCurrency({commit}) {
            try {
                // const key = process.env.VUE_APP_FIXER
                const res = await fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB`)
                console.log('\n ---> STORE ---> ACTION  ---->  SET_ACTUAL_CURRENCY')
                await commit('SET_ACTUAL_CURRENCY', res.json())
                // return await res.json()
            } catch (e) {
                console.log('\n ERROR\n ---> STORE ---> ACTION   ERROR ---->  SET_ACTUAL_CURRENCY')
            }
        }
    },
    mutations:{
        SET_ACTUAL_CURRENCY(state, currency) {
            console.log('\n ---> STORE ---> MUTATION  ---->  SET_ACTUAL_CURRENCY')
            localStorage.setItem('currency', JSON.stringify(currency) )
            state.currency = currency
        }

    },
    state:{
        currency: JSON.parse(window.localStorage.getItem('currency')),
    },
    getters:{
        currency(state){
            return state.currency
        }
        
    }

}



/*    TODO   */
//  udelat env  pro ulozeni  key (fixer.io/api)


/*


base: "EUR",
date: "2021-07-09",
rates: {
    USD: 1.187775,
    CZK: 25.744672,
    KZT: 509.090783
    },
success: true


*/