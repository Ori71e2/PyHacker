<template>
    <div class="sys-error">
        <div class="error-layouts-bg">
            <div class="agileits-content">
                
                <h2><span>4</span><span>0</span><span>3</span></h2>
            </div>
            <div class="error-layouts-right">
                <div class="error-ls-text">
                    <h3>我们很抱歉！</h3>
                    <h4 class="error--agileits2">访问被拒绝。</h4>
                    <p>请 <a @click="back">返回上一页</a> 或发送邮件 <a href="Ori71e2@gmail.com">Ori71e2@gmail.coms</a> 联系我们</p>
                    <p class="copyright">Copyright &copy; 2017.Company name All rights reserved.</p>
                </div>        
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            back(){
                this.$router.go(-1)
            }
        }
    }
</script>
