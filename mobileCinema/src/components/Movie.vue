<template>
    <div id="main">
        <Header title="喵喵电影"/>
            <div id="content">
                <div class="movie_menu">
                    <router-link tag="div" class="city_name" to="/movie/city">
                            <span>{{$store.state.city.nm}}</span><i class="iconfont icon-lower-triangle"></i>
                    </router-link>
                    <div class="hot_swtich">
                            <router-link class="hot_item" tag="div" to="/movie/nowPlaying">正在热映</router-link>
                            <router-link class="hot_item" tag="div" to="/movie/comingSoon">即将上映</router-link>
                    </div>
                    <router-link tag="div" class="search_entry" to="/movie/search">
                        <i class="iconfont icon-sousuo"></i>
                    </router-link>     
                </div>
                <keep-alive>
                    <router-view/>
                </keep-alive>
            </div>
        <TabBar/>
        <router-view name="detail"/>
    </div>
</template>

<script>
import Header from './common/Header'
import TabBar from './common/TabBar'
import { messageBox } from './JS/index'


export default {
    name:'Main',
    components:{
        Header,
        TabBar
    },
    mounted(){
        setTimeout(()=>{
        this.$http.get('/api/api/getLocation').then((res)=>{
        var msg=res.data.msg;
        if(msg=='ok'){
            var nm=res.data.data.nm;
            var id=res.data.data.id;
            if(this.$store.state.city.id==id){
                return;
            }
            messageBox({
            title : '定位',
            content : nm,
            cancel : '取消',
            ok:'切换定位',
            handleOk:function(){
                window.localStorage.setItem("nowNM",nm);
                window.localStorage.setItem("nowID",id);
                window.location.reload();
            }
            });
        }
        })
    },1000)
}}
</script>

<style scoped>
#content .movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
.movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
.movie_menu .city_name.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .router-link-active{ color: #ef4238 !important; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
.movie_menu .hot_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
.movie_menu .search_entry.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry i{  font-size:24px; color:red;}
</style>
