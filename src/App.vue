<template>
    <div id="app">
        <span class="time-left">{{timeLeft}}</span>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'app',
        data () {
            return {
                direction : 'up',
                state : 'red',
                next : 'yellow',
                timeLeftMap : {
                    'green' : 15,
                    'yellow' : 3,
                    'red': 10
                },
                timeLeft : 0
            }
        },
        methods : {
            nextState : function (state) {
                switch (state) {
                    case 'red' : {
                        this.setState('yellow');
                        break;
                    }
                    case 'green' : {
                        this.setState('yellow');
                        break;
                    }
                    case 'yellow' : {
                        if(this.direction === 'up') {
                            this.setState('green');
                        } else {
                            this.setState('red');
                        }
                        break;
                    }
                    default : {
                        console.error(`Unexpected state ${state}`);
                    }
                }
            },
            setState : function(state = 'red', direction = null, timeLeft = null) {
                this.state = state;
                switch (this.state) {
                    case "red": {
                        this.next = 'yellow';
                        this.direction = direction || 'up';
                        this.timeLeft = timeLeft || this.timeLeftMap[state];
                        break;
                    }
                    case 'green' : {
                        this.next = 'yellow';
                        this.direction = direction || 'down';
                        this.timeLeft = timeLeft || this.timeLeftMap[state];
                        break;
                    }
                    case 'yellow' : {
                        if(this.direction === 'up') {
                            this.next = 'green';
                            this.direction = direction || 'up';
                        } else {
                            this.next = 'red';
                            this.direction = direction || 'down';
                        }
                        this.timeLeft = timeLeft || this.timeLeftMap[state];
                        break;
                    }
                    default : {
                        console.error(`Unexpected state ${state}`);
                    }
                }
                this.setRoute();
            },
            timer : function () {
                this.timeLeft--;
                if(this.timeLeft <= 0) {
                    this.nextState(this.state);
                } else {
                    this.setRoute(true);
                }
                setTimeout(this.timer, 1000);
            },
            setRoute : function (replace = false) {
                let location = {
                    name: this.state,
                    params: {
                        state: this.state,
                        timeLeft: this.timeLeft
                    },
                    query: {
                        timeLeft: this.timeLeft,
                        direction: this.direction
                    }
                };
                if(replace) {
                    this.$router.replace(location)
                } else if (this.$route.name !== this.state) {
                    this.$router.push(location)
                }
            }
        },
        mounted() {
            this.setState(this.$route.name, this.$route.query.direction, this.$route.query.timeLeft);
            if(['green','yellow','red'].includes(this.state)) {
                // Запускаем таймер только когда state корректный
                this.timer();
            }
        }
    }
</script>

<style>
    body {
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
    }

    #app {
        display: flex;
        flex-direction: column;
        justify-self: center;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size: 15px;
        font-family: Arial, sans-serif;
    }

    .time-left {
        margin: 10px;
        font-size: 32px;
        font-family: Tahoma,Arial,serif;
    }
</style>