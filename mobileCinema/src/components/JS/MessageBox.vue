<template>
    <div class="messageBox">
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
        <div class="out">
            <div @touchstart="handleCancel">{{ cancel }}</div>
            <div @touchstart="handleOk">{{ ok }}</div>
        </div>
    </div>
</template>



<script>
export default {
    name:'MessageBox'
}
</script>


<style scoped>
.messageBox{width:190px;height:100px;border:1px solid #ccc;border-radius:5px;position: absolute;top:0;left:0;bottom:0;right:0;margin:auto;background:white;box-shadow:3px 3px 3px 3px #ccc;}
.messageBox h2{font-size:14px;line-height:30px;text-align:center;}
.messageBox p{font-size:12px;text-align:center;line-height:30px;}
.messageBox .out{display:flex;width:100%;line-height:30px;position:absolute;bottom:0;border-top:1px solid #ccc;}
.messageBox .out div{text-align:center;  flex:1;border-right:1px solid #ccc;font-size:12px;}
.messageBox .out div:last-child{border:none;}
</style>


