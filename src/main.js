import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';
import permission from './directive/permission';
import './assets/icons'; // icon
import Pagination from '@/views/components/Pagination';
// 自定义表格工具扩展
import RightToolbar from '@/views/components/RightToolbar';
import './plugins';
import '@/layouts/export';
import { getDicts } from '@/api/system/dict/data';
import {
  addDateRange,
  download,
  handleTree,
  parseTime,
  resetForm,
  selectDictLabel,
  selectDictLabels,
} from '@/utils/ruoyi';
import { getConfigKey } from '@/api/system/config';
/**
 * @author chuzhixin 1204505056@qq.com （不想保留author可删除）
 * @description 生产环境默认都使用mock，如果正式用于生产环境时，记得去掉
 */

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('@/utils/static');
  mockXHR();
}

Vue.config.productionTip = false;
// 全局方法挂载
Vue.prototype.getDicts = getDicts;
Vue.prototype.selectDictLabel = selectDictLabel;
Vue.prototype.getDicts = getDicts;
Vue.prototype.getConfigKey = getConfigKey;
Vue.prototype.parseTime = parseTime;
Vue.prototype.resetForm = resetForm;
Vue.prototype.addDateRange = addDateRange;
Vue.prototype.selectDictLabel = selectDictLabel;
Vue.prototype.selectDictLabels = selectDictLabels;
Vue.prototype.download = download;
Vue.prototype.handleTree = handleTree;

Vue.prototype.msgSuccess = function (msg) {
  this.$message({ showClose: true, message: msg, type: 'success' });
};

Vue.prototype.msgError = function (msg) {
  this.$message({ showClose: true, message: msg, type: 'error' });
};

Vue.prototype.msgInfo = function (msg) {
  this.$message.info(msg);
};
// 全局组件挂载
Vue.component('Pagination', Pagination);
Vue.component('RightToolbar', RightToolbar);
Vue.use(permission);
new Vue({
  el: '#vue-admin-beautiful',
  router,
  store,
  render: (h) => h(App),
});
