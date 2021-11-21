import ElementPlus from 'element-plus';
import style from "@/assets/css/theme/theme_01.scss";
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';


const cm = document.createElement('style')
cm.id = 'custom-theme'; // 加id标志，便于切换主题时获取
cm.innerText = style;
document.head.appendChild(cm)
// 全局注册字体图标
// import * as ElementIcon from '@element-plus/icons';
// for(const i in ElementIcon){
//     // @ts-ignore
//     app.component(i, ElementIcon[i])
// }


const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
