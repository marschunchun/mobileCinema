<template>
    <div id="main">
        <Header title="喵喵影院"/>
        <Clist/>
        <TabBar/>
    </div>
</template>

<script>
import Header from './common/Header'
import TabBar from './common/TabBar'
import Clist from './Clist'

export default {

    name:'Cinema',
    components:{
        Header,
        TabBar,
        Clist
    }
}
</script>

<style scoped>

</style>
