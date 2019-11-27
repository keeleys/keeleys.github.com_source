import './css/main.scss';

import Vue from 'vue'
import Home from './template/Home.vue'

var app = new Vue({
    render: (createEl) => createEl(Home)
}).$mount('#app');