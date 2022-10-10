<template>
  <div class="dashboard">
    <aside class="tabs">
      <DashboardTab
        v-for="tab in dashboardTabs"
        :key="tab.id"
        :text="tab.name"
        @click="changeTabs(tab)"
        :class="['tab', { active: activeTab === tab }]"
      />
    </aside>
    <keep-alive>
      <component :is="activeComponent" />
    </keep-alive>
  </div>
</template>

<script>
import DashboardTab from "./DashboadTab.vue";
import DashboardGreeting from "./DashoboardGreeting.vue";
import UsersTab from "./UsersTab.vue";
import PostsTab from "./PostsTab.vue";
import { mapGetters } from "vuex";

export default {
  name: "DashboardTabs",
  components: {
    DashboardTab,
    DashboardGreeting,
    UsersTab,
    PostsTab,
  },
  data() {
    return {
      activeComponent: DashboardGreeting,
      activeTab: null,
    };
  },
  computed: {
    ...mapGetters(["userPrivilegues", "dashboardTabs"]),
  },
  methods: {
    changeTabs(tab) {
      this.activeTab = tab;
      switch (tab.name) {
        case "Users":
          this.activeComponent = UsersTab;
          break;
        case "Posts":
          this.activeComponent = PostsTab;
          break;
        default:
          this.activeComponent = DashboardGreeting;
          break;
      }
    },
  },
};
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: row;
}

.tabs {
  padding: 10px 10px;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  height: 300px;
  width: 10%;
}
.tab {
  padding: 10px;
}

.active {
  color: aqua;
}
</style>