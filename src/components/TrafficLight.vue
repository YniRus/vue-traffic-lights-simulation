<template>
    <div class="traffic-light">
        <span class="traffic-light__sign traffic-light__sign_green" v-bind:class="trafficLightSignGreenClass"></span>
        <span class="traffic-light__sign traffic-light__sign_yellow" v-bind:class="trafficLightSignYellowClass"></span>
        <span class="traffic-light__sign traffic-light__sign_red" v-bind:class="trafficLightSignRedClass"></span>
    </div>
</template>

<script>
    export default {
        name : 'traffic-light',
        props : [
            'state',
            'timeLeft'
        ],
        computed: {
            trafficLightSignGreenClass : function () {
                return this.trafficLightStateClass('green');
            },
            trafficLightSignYellowClass : function () {
                return this.trafficLightStateClass('yellow');
            },
            trafficLightSignRedClass : function () {
                return this.trafficLightStateClass('red');
            }
        },
        methods : {
            trafficLightStateClass: function (sign) {
                return {
                    'traffic-light__sign_disable': sign !== this.state,
                    'traffic-light__sign_flash': sign === this.state && this.timeLeft < 3
                }
            }
        }
    }
</script>

<style>
    .traffic-light {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        border-radius: 50px;
        padding: 20px;
    }
    .traffic-light__sign {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin: 5px;
        transition: 0.3s ease-in-out all;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }

    .traffic-light__sign_green {
        background: limegreen;
    }

    .traffic-light__sign_yellow {
        background: yellow;
    }
    .traffic-light__sign_red {
        background: red;
    }

    .traffic-light__sign_disable {
        filter: brightness(30%);
    }
    .traffic-light__sign_flash {
        animation: flash 3s ease-in-out infinite;
    }

    @keyframes flash {
        0% {
            filter: brightness(100%);
        }
        20% {
            filter: brightness(0%);
        }
        40% {
            filter: brightness(100%);
        }
        60% {
            filter: brightness(0%);
        }
        80% {
            filter: brightness(100%);
        }
        100% {
            filter: brightness(30%);
        }
    }
</style>