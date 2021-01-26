<template>
    <div>
        {{state}}
    </div>
</template>

<script>
    export default {
        name : 'traffic-light',
        props : [
            'state'
        ],
        data () {
            return {
                direction : 'up'
            }
        }
    }
</script>

<style>

</style>