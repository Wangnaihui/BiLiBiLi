<!-- 组件说明 -->
<template>
    <div class='userinfo'>
        <nav-bar></nav-bar>
        <img src="../assets/bannerTop_new.png" class="pic">
        <user-detail :userInfo="model"></user-detail>
        <user-article></user-article>
    </div>
</template>

<script>
import NavBar from '../components/common/NavBar.vue'
import userDetail from '../components/userComponent/userDetail.vue'
import userArticle from '../components/userComponent/userArticle.vue'
export default {
    data() {
        return {
            model:{}
        }
    },
    components: {
        NavBar,
        userDetail,
        userArticle
    },
     methods:{
        async userData() {
            const res =  await this.$http.get('/user/' + localStorage.getItem('id'))
            this.model = res.data[0]    
        }
    },
    created() {
        this.userData()
    }


}
</script>

<style lang='less' scoped>
.userinfo{
    .pic{
        height: 120px;
        width: 100%;
    }
}
</style> 