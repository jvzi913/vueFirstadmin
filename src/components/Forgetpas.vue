<template>
  <div id="forgetpas">
    <div class="login-left-img">
      <img src="../assets/img/login/loginBg.png" alt="">
    </div>
    <div class="login-right">
      <div class="login-logo" :style="loginLogo"></div>
      <div class="login-sign" :style="loginSign"></div>
      <div class="sign-infor">
        <el-form ref="form" :model="form">
          <el-form-item label-width="auto">
            <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
            <span class="iconfont">&#xe604;</span>
          </el-form-item>
          <el-form-item label-width="auto">
            <el-input v-model="form.code" placeholder="请输入验证码"></el-input>
            <span class="iconfont">&#xe60e;</span>
            <div id="forget-code">
              <div class="iconfont iconfont2">&#xe605;</div>
              <el-button type="default" class="getCode">获取验证码</el-button>
            </div>
          </el-form-item>
          <el-form-item label-width="auto">
            <el-input v-model="form.pws" placeholder="请输入新密码"></el-input>
            <span class="iconfont iconfont1">&#xe60c;</span>
          </el-form-item>
          <div class="forget-tips" @click="gotoLogin">去登录</div>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" class="ok">确定</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'forgetpas',
    data() {
      return {
        loginLogo: {
          backgroundImage: "url(" + require("../assets/img/login/logo.png") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%"
        },
        loginSign: {
          backgroundImage: "url(" + require("../assets/img/login/forget.png") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%"
        },
        form: {
          email: '',
          code:'',
          pws: ''
        }
      }
    },
    methods: {
      onSubmit(e) {
        console.log(e);
      },
      gotoLogin(){
        this.$router.push("/Login");
      },
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
</style>
<style scoped>
  #forgetpas {
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

  .iconfont2{
    line-height: 0.58rem!important;
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
  #forget-code{
    position: absolute;
    right: 0.05rem;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 42%;
    height: 80%;
  }

  /deep/ .el-form-item__content{
    margin-left: 0!important;
  }
  .el-button {
    height: 0.7rem;
    width: 100%;
  }
  .getCode{
    border: 0!important;
    height: 100%;
    color: #4584ee;
  }
  .getCode:focus,.getCode:hover{
    background-color: transparent;
  }
</style>
