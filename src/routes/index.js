import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import TrafficLight from '../components/TrafficLight.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: TrafficLight , props: true },
        { path: '/green', name : 'green', component: TrafficLight , props: true },
        { path: '/yellow', name : 'yellow', component: TrafficLight , props: true },
        { path: '/red', name : 'red', component: TrafficLight , props: true },
        { path: '*', name: '404', component: { template: '<div>404</div>' } },
    ],
});