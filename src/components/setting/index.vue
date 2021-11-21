<template>
  <div>
    <div class="setting" @click="showSetting=true">
      <el-icon size="20"><set-icon /></el-icon>
    </div>
    <el-drawer v-model="showSetting" custom-class="draw-out">
      <div class="menu">
        <div class="name">菜单栏主题切换:</div>
        <el-switch v-model="typeNav" @change="handleMenu"></el-switch>
      </div>
      <div class="theme">
        <div class="name">主题切换</div>
        <el-radio-group v-model="themeId" @change="themeChange">
          <el-radio
              v-for="item in themeList"
              :label="item.id"
              :key="item.id">{{item.name}}</el-radio>
        </el-radio-group>
      </div>
    </el-drawer>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, toRef} from "vue";
import {setMenuTheme, setTheme} from "@/util/storage";
// 引入菜单栏配置变量，请以css module的模式
import basicStyle from '@/assets/css/vars.module.scss';
// 局部引入字体图标
import {Setting as SetIcon} from "@element-plus/icons";
// 引入主题
import theme_01 from "@/assets/css/theme/theme_01.scss";
import theme_02 from "@/assets/css/theme/theme_02.scss";
import theme_03 from "@/assets/css/theme/theme_03.scss";
import theme_04 from "@/assets/css/theme/theme_04.scss";

export default defineComponent({
  name: "Setting",
  components: {
    SetIcon
  },
  props: {
    navType: {
      type: Boolean,
      default: false
    }
  },
  setup(props){
    let showSetting = ref(false);
    let typeNav = ref(props.navType);
    let themeId = ref('01');
    let themeList = ref([
      {id: '01', name: '主题1', color: '#00a0ff', style: theme_01},
      {id: '02', name: '主题2', color: '#7000af', style: theme_02},
      {id: '03', name: '主题3', color: '#aa3300', style: theme_03},
      {id: '04', name: '主题4', color: '#00bfff', style: theme_04},
    ])

    let {darkBg, darkColor, lightBg, lightColor} = basicStyle;

    const handleMenu= (data: any) => {
      if(data){
        let menuTheme = {
          bgColor: lightBg,
          color: lightColor,
          navType: data
        }
        setMenuTheme(menuTheme);
        document.documentElement.style.setProperty('--basic-bg', lightBg);
        document.documentElement.style.setProperty('--basic-color', lightColor);
      }else{
        let menuTheme = {
          bgColor: darkBg,
          color: darkColor,
          navType: data
        }
        setMenuTheme(menuTheme);
        document.documentElement.style.setProperty('--basic-bg', darkBg);
        document.documentElement.style.setProperty('--basic-color', darkColor);
      }
    }

    const themeChange = (data: any) => {
      themeList.value.map((ele) => {
        if(ele.id == data){
          setTheme(ele);
          document.documentElement.style.setProperty('--hover-color', ele.color);
          // 文件内容有点多，获取有延时，所以替换内容很耗时，直接删除，重新插入
          let oldCustomStyle = document.querySelector('#custom-theme');
          document.head.removeChild(oldCustomStyle)
          let newCustomStyle = document.createElement('style');
          newCustomStyle.id = 'custom-theme';
          newCustomStyle.innerText = ele.style;
          document.head.appendChild(newCustomStyle);
        }
      })
    }

    return{
      themeId,
      themeList,
      typeNav,
      showSetting,
      handleMenu,
      themeChange
    }
  }
});
</script>

<style lang="scss" scoped>
  @import "../../assets/css/vars.module.scss";
  .setting{
    z-index: 1000;
    position: fixed;
    top: 100px; right:0;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $basic-bg;
    .el-icon{
      color: $basic-color;
    }
  }
  .draw-out{
    .menu{
      display: flex;
      .name{
        font-size: $normal-size;
        margin-right: 10px;
      }
    }
    .theme{
      .name{
        margin-top: 20px;
        text-align: center;
        font-size: $normal-size;
      }
      .el-radio-group{
        display: flex;
        flex-wrap: wrap;
        .el-radio{
          flex: 0 0 50%;
          margin: 0;
        }
      }
    }
  }
</style>