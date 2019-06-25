<template>
    <div id="main">
        <Header title="我的喵喵"/>
        <Login/>
        <TabBar/>
    </div>
</template>

<script>
import Header from './common/Header'
import TabBar from './common/TabBar'
import Login from './Login'

export default {
    name:'Mine',
    components:{
        Header,
        TabBar,
        Login
    }
}
</script>

<style scoped>

</style>
