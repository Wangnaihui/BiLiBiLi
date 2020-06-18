<template>
    <div>
        <login-top middleTop="登录BiLiBiLi">
           <div class="throwback" slot="right" @click="$router.push('/Register')">切换到注册</div>
        </login-top>
        <login-text label="账号" placeholder="请输入账号" rule="^.{6,16}$" @inputChange="res => model.username=res"/>
        <login-text label="密码" placeholder="请输入密码" rule="^.{6,16}$" type="password" @inputChange="res => model.password=res"/>
        <login-btn btntext="登录" @registerSubmit="registerSubmit"></login-btn>
    </div>
</template>

<script> 
import LoginTop from '../components/common/LoginTop.vue'
import LoginText from '../components/common/LoginText.vue'
import LoginBtn from '../components/common/LoginBtn.vue'
export default {
    data(){
        return{
            model:{
            username:'',
            password:''
            }
        }
    },
    components:{
         LoginTop,
         LoginText,
         LoginBtn
    },
    methods:{
        async registerSubmit(){
            let rulg=/^.{6,16}$/
            if(rulg.test(this.model.username) && rulg.test(this.model.password)){
                const res= await this.$http.post('/Login',this.model)
                this.$msg.fail(res.data.msg)
                if(res.data.code == 301 || res.data.code == 302){
                    return
                }
                localStorage.setItem('token',res.data.token)
                localStorage.setItem('id',res.data.id)
                setTimeout(() => {  
                    this.$router.push('/Userinfo')
                },1000)
            }else{
                this.$msg.fail('格式不正确,重新输入')
            }
        }
    }
}
</script>
 
 <style scoped>
.LoginTop div[data-v-54a6d310]{
         font-size: 3.611vw;
     }
 </style>