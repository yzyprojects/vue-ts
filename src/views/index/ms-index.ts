import { createStore, Store } from 'vuex'
import Calculator from './index'
const calculator:Calculator = new Calculator();

const state = {
    number: 0
};

const actions = {
    addNumber (context:any) {
        context.commit('addNumber');
    },
    
    minus (context:any) {
        context.commit('minus');
    }
};

const mutations = {
    addNumber:calculator.addNumber,
    minus:calculator.minus
};

export default {
    state,
    actions,
    mutations
}