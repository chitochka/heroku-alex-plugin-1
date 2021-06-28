export default {
    actions:{
    },
    mutations:{
        SET_SLOVNIK_WIDTH(state, width) {
            localStorage.setItem('slovnikWidth', JSON.stringify(width) )
            state.width = width
        },
        SET_SLOVNIK_HEIGHT(state, height) {
            localStorage.setItem('slovnikHeight', JSON.stringify(height) )
            state.height = height
        }

    },
    state:{
        width: JSON.parse(window.localStorage.getItem('slovnikWidth')),
        height: JSON.parse(window.localStorage.getItem('slovnikHeight'))
    },
    getters:{
        slovnik_width(state){
            return state.width
        },
        slovnik_height(state){
            return state.height
        }
        
    }

}