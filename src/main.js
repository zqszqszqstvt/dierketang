import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import * as echarts from 'echarts'; // 引入echarts
import App from './App.vue'
import router from './router'
import store from './store'
import request from "@/utils/request.js";

const app = createApp(App).use(store) // 创建应用并使用store

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.config.globalProperties.$echarts = echarts;
app.config.globalProperties.request = request
app.use(ElementPlus)
app.use(router)
app.mount('#app') // 挂载应用
