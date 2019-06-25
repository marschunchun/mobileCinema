<template>
    <!-- <Header/> -->
    <!-- <TabBar/> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
</template>

<script>
// import Header from "./components/common/Header"
// import TabBar from './components/common/TabBar'
// import Movie from './components/Movie'

export default {

}
</script>

<style>
*{ margin : 0; padding : 0;}
ul,li{ list-style: none;}
img{ display: block;}
html,body{ height:100%;}
.clearfix:after{ content:""; display: block; clear:both;}
#main{ height: 100%; display: flex; flex-direction:column;}
#content{ flex:1; overflow:auto; margin-bottom: 50px; position: relative; display: flex; flex-direction:column;}

</style>
