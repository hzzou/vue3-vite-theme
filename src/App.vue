<template>
  <div class="layout">
    <el-header>
      <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          router>
        <el-menu-item
            v-for="(item, idx) in menuList"
            :index="idx" :key="idx" :route="item.path">
          {{item.name}}
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <setting :nav-type="navType"></setting>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import {getMenuTheme, getTheme} from "./util/storage";
import Setting from "@/components/setting/index.vue";
export default defineComponent({
  name: 'App',
  components: {
    Setting
  },
  setup: () => {

    let activeIndex = ref(0);
    let menuList = ref([
      {name: '首页', path: '/first'},
      {name: '图表', path: '/second'}
    ]);
    let navType = ref(false);

    // 设置菜单主题
    let menuTheme = getMenuTheme();
    if(JSON.stringify(menuTheme) !== "{}"){
      navType.value= menuTheme.navType;
      document.documentElement.style.setProperty('--basic-bg', menuTheme.bgColor);
      document.documentElement.style.setProperty('--basic-color', menuTheme.color);
    }

    // 设置全局主题
    let theme = getTheme();
    if(JSON.stringify(theme) !== "{}"){
      document.documentElement.style.setProperty('--hover-color', theme.color);
      let oldCustomStyle = document.querySelector('#custom-theme');
      document.head.removeChild(oldCustomStyle)
      let newCustomStyle = document.createElement('style');
      newCustomStyle.id = 'custom-theme';
      newCustomStyle.innerText = theme.style;
      document.head.appendChild(newCustomStyle);
    }




    return{
      activeIndex,
      menuList,
      navType
    }
  }
})
</script>

<style lang="scss" scoped>
@import "./assets/css/vars.module.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.layout{
  .el-header{
    .el-menu{
      background-color: $basic-bg;
      .el-menu-item{
        color: $basic-color;
        &:hover{
          color: $hover-color;
        }
      }
    }
  }
}
</style>
