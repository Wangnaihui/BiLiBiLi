<!-- 组件说明 -->
<template>
    <div class='userdetail'>
       <div>
            <div class="user_img">
            <img :src="userInfo.user_img" alt="" v-if="userInfo.user_img">
            <img src="../../assets/head_img.jpg" alt="" v-else></div>
            <div class='user_edit'>
                <div>
                    <p>
                        <span>0</span>
                        <span class="user_text">粉丝</span>
                    </p>
                    <p>
                        <span>54</span>
                        <span class="user_text">关注</span>
                    </p>
                    <p>
                        <span>0</span>
                        <span class="user_text">获赞</span>
                    </p>
                </div>
                <div @click="$router.push('/Edit')">
                    <div class="btn">编辑资料</div>
                </div>
            </div>
        </div>
        <div>
            <h2>{{userInfo.name}}</h2>
            <p v-if="userInfo.user_desc">{{userInfo.user_desc}}</p>
            <p v-else>这个人很懒，什么都没有写</p>
        </div>
    </div>
</template>

<script>
    //import x from ''
export default {
    props:['userInfo']  
}
</script>

<style lang='less'scoped>
.userdetail{
    background-color: #fff;
    padding: 0 3.333vw;
    >div:nth-child(1){
        display: flex;
        .user_img{
            margin-right: 5.556vw;
            img{
                height: 23.611vw;
            width: 23.611vw;
            border-radius: 50%;
            }
        }
        .user_edit{
            flex: 1;
            padding: 2.778vw 0;
            div:nth-child(1){
                display: flex;
                p{
                    flex:1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    font-size: 3.611vw;  
                    .user_text{
                        color: #aaa;
                    } 
                }
                p:nth-child(1),p:nth-child(2){
                    border-right: 0.278vw solid #ccc;
                }
            }
            div:nth-child(2){
                padding: 0.556vw 2.778vw;
                .btn{
                    border: 0.278vw solid #fb7a9f;
                    padding: 0.833vw;
                    margin-top: 1.389vw;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #fb7a9f;
                    border-radius: 0.833vw;
                }
            }
        }
    }
    >div:nth-child(2){
        h2{
            margin: 2.778vw 0 0.833vw 0;
            font-weight: 400;
        }
        p{
            margin: 0;
            padding: 0;
            color: #999;
        }
    }
}
</style>