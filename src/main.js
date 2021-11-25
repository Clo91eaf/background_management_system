import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import http from 'axios'
import BaiduMap from 'vue-baidu-map'
import * as echarts from 'echarts'

import { Button, Select,Container, Aside, Header, Main, Menu, MenuItem, MenuItemGroup, Submenu, Dropdown, DropdownItem, DropdownMenu, Row, Col, Card, Breadcrumb, BreadcrumbItem, Table, TableColumn} from 'element-ui';
Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Select)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.prototype.$http = http
Vue.prototype.$echarts = echarts

// Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'axLmOamcp1tDCgv3XCjXOtX2ZHyyXd5l'
})