import {
  createApp
} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//引入elementUI
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

//引入Jquery
import $ from 'jquery';

//axios的默认请求
import axios from 'axios'
import VueAxios from 'vue-axios'

// axios.defaults.baseURL = '/api'

const app = createApp(App);
app.use(store)
  .use(router)
  .mount("#app");
app.use(ElementPlus);

app.use(VueAxios,axios);