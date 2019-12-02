import Vue from 'vue'
import Index from './components/home/Index.vue'

import './css/main.scss';
import store from './store'

var app = new Vue({
    store,
    render: (createEl) => createEl(Index)
}).$mount('#app');