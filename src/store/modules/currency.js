const key = '320a798ebf775d31f3e7'   // https://free.currconv.com/


export default {
    actions:{
        async fetchCurrency({commit}) {
            try {
                // const key = process.env.VUE_APP_FIXER
                const res = await fetch(`https://free.currconv.com/api/v7/convert?q=CZK_KZT,KZT_CZK&compact=ultra&apiKey=${key}`)
                // const res = await fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB`)
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
            currency.date = + new Date()
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


{
    "CZK_KZT": 19.748054,
    "KZT_CZK": 0.050638
}



*/