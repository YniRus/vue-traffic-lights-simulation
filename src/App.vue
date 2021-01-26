<template>
    <div id="app">
        <router-link to="/green">Перейти к green</router-link>
        <router-link to="/yellow">Перейти к yellow</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    import TrafficLight from './components/TrafficLight.vue'
    import Router from 'vue-router';

    export default {
        name: 'app',
        components : {
            TrafficLight
        },
        data () {
            return {
                message: 'Welcome to Vue.js'
            }
        }
    }
</script>

<style>
    #app {
        font-family: Verdana,serif;
        color: navy;
    }
</style>