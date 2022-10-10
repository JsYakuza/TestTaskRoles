import { USERS_AVAILABLE_ROUTES, USER_PRIVILEGUES } from "../constants/index";

export default {
    userRoutes(state) {
        return USERS_AVAILABLE_ROUTES[state.userInfo.role];
    },
    userPrivilegues(state) {
        return USER_PRIVILEGUES[state.userInfo.role];
    },
    dashboardTabs(state, getters) {
        return state.tabs.filter(tab => getters.userPrivilegues.includes(tab.canSee));
    }
}