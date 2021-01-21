<template>
  <div id="Login">
    <div class="login-left-img">
      <img src="../assets/img/login/loginBg.png" alt="">
    </div>
    <div class="login-right">
      <div class="login-logo" :style="loginLogo"></div>
      <div class="login-sign" :style="loginSign"></div>
      <div class="sign-infor">
        <el-form ref="form" :model="form">
          <el-form-item label-width="auto">
            <el-input v-model="form.account" placeholder="请输入账号/手机号/邮箱"></el-input>
            <span class="iconfont">&#xe60d;</span>
          </el-form-item>
          <el-form-item label-width="auto">
            <el-input v-model="form.pws" placeholder="请输入密码"></el-input>
            <span class="iconfont iconfont1">&#xe60c;</span>
          </el-form-item>
          <div class="forget-tips" @click="gotoForget">找回密码</div>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" class="ok">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        loginLogo: {
          backgroundImage: "url(" + require("../assets/img/login/logo.png") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%"
        },
        loginSign: {
          backgroundImage: "url(" + require("../assets/img/login/sign.png") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%"
        },
        form: {
          account: '',
          pws: ''
        }
      }
    },
    methods: {
      onSubmit(e) {
        console.log(e);
      },
      gotoForget(){
        this.$router.push("/Forgetpas");
      }
    }
  }
</script>

<style>
  body {
    padding: 0;
    margin: 0;
  }

  img {
    width: 100%;
    height: 100%;
  }
  .ok{
    background:linear-gradient(to right,#0770f6,#2a87fd);
  }
</style>
<style scoped>
  #Login {
    display: flex;
  }

  .login-left-img {
    width: 67%;
    height: 100vh;
  }

  .login-right {
    width: 32%;
    height: 100vh;
  }

  .login-logo {
    margin: 0 auto;
    margin-top: 20%;
    width: 80%;
    height: 0.4rem;
  }

  .login-sign {
    margin: 0 auto;
    margin-top: 3%;
    width: 25%;
    height: 0.32rem;
  }

  .sign-infor {
    margin: 0 auto;
    margin-top: 8%;
    width: 75%;
  }

  .el-form-item {
    margin: 0 !important;
    padding: 0 !important;
    padding-bottom: 0.3rem !important;
  }

  /deep/ .el-input__inner {
    position: relative;
    padding-left: 0.55rem;
    height: 0.7rem;
  }

  .iconfont {
    position: absolute;
    left: 0.15rem;
    line-height: 0.7rem !important;
  }

  .iconfont1 {
    position: absolute;
    left: 0.1rem;
    font-size: 0.38rem !important;
  }

  .forget-tips {
    cursor: pointer;
    padding-right: 0.1rem;
    margin-top: -0.2rem;
    margin-bottom: 0.4rem;
    text-align: right;
    font-size: 0.18rem;
    color: #ccc;
  }

  /deep/ .el-form-item__content{
    margin-left: 0!important;
  }
  .el-button {
    height: 0.7rem;
    width: 100%;
  }
</style>
