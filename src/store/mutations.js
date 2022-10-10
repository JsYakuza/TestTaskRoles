import { UNAUTHORIZED } from "../constants/index";

export default {
    setLogin(state, payload) {
        state.login = payload;
    },
    setPassword(state, payload) {
        state.password = payload;
    },
    setUserInfo(state, payload) {
        state.userInfo = { ...state.userInfo, ...payload };
    },
    resetUserInfo(state) {
        state.userInfo = { role: UNAUTHORIZED };
    },
    setUserAuth(state, payload) {
        state.isUserAuth = payload;
    },
    setUsers(state, payload) {
        state.users = payload;
    },
    fetchPosts(state, payload) {
        state.posts = payload;
    }
}