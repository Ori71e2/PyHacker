<template>
  <div id="app">
    <el-container>
      <el-header>
      <el-row>
          <el-col :span="24">
            <el-menu default-active="5" class="el-menu-demo" mode="horizontal" @select="">
              <el-menu-item index="1">Manege</el-menu-item>
              <el-menu-item index="2">Project</el-menu-item>
              <el-menu-item index="3">Playloads</el-menu-item>
              <el-menu-item index="4">Rules</el-menu-item>
              <el-menu-item index="5">Webssh</el-menu-item>
            </el-menu>
          </el-col>
      </el-row>
      </el-header>
      <el-container>
        <div v-show="headerFixed" style="position: relative;height: 60px;width: 100%;"></div>

        <main>
          <el-aside width="200px">Aside
            <div class="main-left">
              <el-menu default-active="/public" class="el-menu-vertical-demo" :router="true">
                <el-menu-item index="/public" :class="{'isActive': active}">活动发布</el-menu-item>
                <el-menu-item index="/manage" :class="{'isActive': !active}">活动管理</el-menu-item>
              </el-menu>
            </div>
          <el-aside>

          <el-main>
              <div  class="main-right" >
                <transition name="fade">
                  <router-view class="view"></router-view>
                </transition>
              </div>
          </el-main>
        </main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import Vue from "vue";
import Element from "element-ui";
import "element-ui/lib/theme-default/index.css";
import $ from "jquery";

Vue.use(Element);

export default {
  name: "app",
  data: function() {
    return {
      active: true,
      headerFixed: true
    };
  },
  created: function() {
    this.$router.push("/public");
  },
  methods: {},
  watch: {
    $route: function(to, from) {
      if (to.path == "/public") {
        this.active = true;
      } else if (to.path == "/manage") {
        this.active = false;
      }
    }
  }
};
</script>

<style>
body {
  margin: 0;
}
#app {
  min-width: 1200px;
  margin: 0 auto;
  font-family: "Helvetica Neue", "PingFang SC", Arial, sans-serif;
}
/* 头部导航 */
.el-header {
  transition: all 0.5s ease;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}



/*  */
.router-link {
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #475669;
  text-decoration: none;
}
.is-active .router-link {
  color: #20a0ff;
}

/* 单选框 */
.el-form-item .el-radio + .el-radio {
  margin-left: 30px !important;
}
/* 路由切换动效 */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-active {
  opacity: 0;
  transform: translateY(30px);
}

/* 导航栏菜单选中效果 */
.isActive {
  color: #20a0ff !important;
}
#app main .aside .is-active {
  color: #475669;
}

/* 卡片 */
.el-card {
  overflow: visible !important;
}
</style>
