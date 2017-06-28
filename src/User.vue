<template>
<div>
    <h2>{{ title }}</h2>
    <input v-model.lazy="title">
    <p>This is user: {{ $route.params.userName }}</p>
    <button @click="goHome">Go Home</button>
</div> 
</template>

<script>
export default {
    name: 'app-home',
    data(){
        return {
            title: 'This is Users page'
        }
    },
    watch: {
        '$route' (to, from) {
            alert(`Route Changed and this is user ${this.$route.params.userName}`);
        },
        title (to, from) {
            alert(`The title of the page changed from:*** ${from} *** to: *** ${to} ***`)
        }
    },
    created() {
        /*This alert won't get called when switching between two users tab since the component is same. 
        It does not destroy and recreate the component
        For this to work we'd have to watch */
        alert(`This is user ${this.$route.params.userName}`);
    },
    methods: {
        goHome() {
            /*To go to a particular route, you'd need to push it to the router*/
            this.$router.push('/');
        }
    }
}
</script>

<style lang="scss">
h2 {
    color: blue;
}
</style>
