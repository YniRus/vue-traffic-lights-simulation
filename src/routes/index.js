import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import TrafficLight from '../components/TrafficLight.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component : { template: '<div>Home</div>' },
        },
        { path: '/green', component: TrafficLight , props : {state : 'green'} },
        { path: '/yellow', component: TrafficLight , props : {state : 'yellow'} },
        { path: 'red', component: TrafficLight , props : {state : 'red'} },
        {
            path: '*',
            name: '404',
            component: { template: '<div>Home</div>' },
        },
    ],
});