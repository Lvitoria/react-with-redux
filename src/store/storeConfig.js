import {createStore, combineReducers} from 'redux'
import numerosReducer from "./reducers/numeros"
const reducers =  combineReducers({
    numeros: numerosReducer, 
    nomes: (state, action) =>{
        console.log(state,' ',action)
        return [
            'ana',
            'bia',
            'joaquim'
        ]
    }
})

function storeConfig(){
    return createStore(reducers)
}


export default storeConfig