<template>
<div>
    <h2>{{ title }}</h2>
    </div> 
</template>

<script>
export default {
    name: 'app-home',
    data(){
        return {
            title: 'This is home page'
        }
    }
}
</script>

<style lang="scss">
 h2 {
     color: green;
 }
</style>

