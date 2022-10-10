import { createStore } from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import { UNAUTHORIZED } from '../constants/index';

const store = createStore({
    state() {
        return {
            isUserAuth: false,
            userInfo: {
                role: UNAUTHORIZED
            },
            login: '',
            password: '',
            tabs: [
                { id: Math.floor(Math.random() * 100), name: "Users", canSee: 'edit' },
                { id: Math.floor(Math.random() * 100), name: "Posts", canSee: 'create' },
            ],
            users: [],
            posts: [],
        }
    },
    getters,
    mutations,
    actions
})

export default store;