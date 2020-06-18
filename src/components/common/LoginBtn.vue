<!-- 组件说明 -->
<template>
    <div class="btnparent" @click="registerClick">
       <div class="loginbtn">{{btntext}}</div> 
    </div>
</template>

<script>
    //import x from ''
    export default {
        props:['btntext'],
        methods:{
            registerClick(){
                this.$emit('registerSubmit')
            }
        }
    }
</script>

<style lang='less' scoped>
.btnparent{
    padding: 4.167vw 2.778vw;
}
.loginbtn{
    height: 12.5vw;
    background-color: #ff9db5;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4.444vw;
    border-radius: 6.25vw;
}
</style>