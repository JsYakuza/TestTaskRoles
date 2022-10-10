import axios from "axios";

export default {
    async submitUserLogin({ state, commit }) {
        try {
            const creds = { login: state.login, password: state.password };
            const res = await axios.get(`http://localhost:3000/api/users/login/${JSON.stringify(creds)}`);
            if (res.status === 200) {
                commit('setUserInfo', res.data);
                commit('setUserAuth', true);
                localStorage.setItem('userInfo', JSON.stringify(res.data));
            }
        } catch (error) {
            alert('Invalid credentials');
        }
        commit('setLogin', '');
        commit('setPassword', '')
    },
    restoreUser({ commit }) {
        const user = localStorage.getItem('userInfo');
        if (user) {
            commit('setUserInfo', JSON.parse(user));
            commit('setUserAuth', true);
        }
    },
    logOutUser({ commit }) {
        localStorage.removeItem('userInfo');
        commit('resetUserInfo');
        commit('setUserAuth', false);
    },
    async fetchUsers({ commit }) {
        try {
            const res = await axios.get('http://localhost:3000/api/users/all/');
            if (res.status === 200) {
                commit('setUsers', res.data);
            }
        } catch (error) {
            console.error(error);
        }
    },
    async changeUserRole(context, payload) {
        try {
            await axios.post(`http://localhost:3000/api/users/role/${JSON.stringify(payload)}`);
        } catch (error) {
            console.error(error);
        }
    },
    async fetchPosts({commit}) {
        try {
            const res = await axios.get('http://localhost:3000/api/posts/all');
            if (res.status === 200) {
                commit('fetchPosts', res.data);
            }
        } catch (error) {
            console.error(error)
        }
    },
    async addNewPost(context, payload) {
        try {
            await axios.post(`http://localhost:3000/api/posts/add/${JSON.stringify(payload)}`);
        } catch (error) {
            console.error(error);
        }
    },
    async changePost(context, payload) {
        try {
            await axios.post(`http://localhost:3000/api/posts/change/${JSON.stringify(payload)}`);
        } catch (error) {
            console.error(error);
        }
    }
}