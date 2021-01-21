<template>
  <div class="leftslide">
    <el-container>
      <el-aside>
        <div class="index-logo">
          <img src="../assets/img/index/logo.png" alt="" class="index-logo-img">
        </div>
        <el-menu :collapse-transition="false" :default-active="$route.path" class="el-menu-vertical-demo" @select="handleOpen"
          router :unique-opened="true" text-color="#fff" active-text-color="#fff">
          <el-menu-item index="/Index">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/Teacher">
            <i class="el-icon-menu"></i>
            <span slot="title">教师管理</span>
          </el-menu-item>
          <el-menu-item index="/Grade">
            <i class="el-icon-menu"></i>
            <span slot="title">年级管理</span>
          </el-menu-item>
          <el-menu-item index="/Classes">
            <i class="el-icon-menu"></i>
            <span slot="title">班级管理</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>学生管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>一年级</span>
              </template>
              <el-menu-item index="/Student" class="student-item">
                <span style="padding-left: 0.4rem;">1班</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/Goods">
            <i class="el-icon-menu"></i>
            <span slot="title">商品管理</span>
          </el-menu-item>
          <el-menu-item index="/Advertise">
            <i class="el-icon-menu"></i>
            <span slot="title">广告管理</span>
          </el-menu-item>
          <el-menu-item index="/Record">
            <i class="el-icon-menu"></i>
            <span slot="title">兑换记录</span>
          </el-menu-item>
          <el-menu-item index="/Person">
            <i class="el-icon-menu"></i>
            <span slot="title">个人信息</span>
          </el-menu-item>

        </el-menu>
      </el-aside>
      <el-container class="index-container">
        <el-header>
          <img src="../assets/img/login/logo.png" alt="" class="index-header-img">
          <div class="index-header-right">
            <span class="index-header-right-name">欢迎您：<span class="header-usname">王小虎</span></span>
            <i class="iconfont" style="margin-right: 15px;font-size: 0.22rem;" @click="dialogVisible=true">&#xe606;</i>
          </div>
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <el-dialog title="登出系统" :visible.sync="dialogVisible" width="25%" :before-close="handleClose" destroy-on-close>
      <div class="tips-content">您确定要登出系统吗？</div>
      <span slot="footer" class="dialog-footer all-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'leftslide',
    data() {
      return {
        dialogVisible: false,
        menuList:[],
        pathArray: [],
        readyData: {
          path: '',
          title: ''
        }
      }
    },
    mounted() {
      this.getMenuList();
    },
    methods: {
      getMenuList() {
        var that = this;
        that.$axios({
          url: that.$globalAPI + 'menu/getMenuList',
          method: 'get',
          data: {},
        }).then(function(res) {
          if(res.data.code==0){
            that.menuList = res.data.data;
            console.log(that.menuList);
          }
        }).catch(function(error) {
          console.log(error);
        });
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
        var that = this
        that.readyData = {}
        setTimeout(function() {
          that.readyData.path = key
          that.readyData.title = that.$route.meta.title
          if (JSON.stringify(that.pathArray).indexOf(JSON.stringify(that.readyData)) == -1) {
            that.pathArray.push(that.readyData)
          }
        }, 500)
      },
      handleClose(done) {
        console.log('关闭了~')
      }
    }
  }
</script>

<style>
  body {
    padding: 0;
    margin: 0;
    background-color: #eaf1ff;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-aside {
    width: 15.8% !important;
    height: 100vh;
    background: linear-gradient(to bottom, #4a66e5, #6f63fb);
  }

  .index-logo {
    width: 100%;
    height: 22%;
  }

  .index-logo-img {
    width: 1.52rem;
    height: 1.52rem;
    margin: 0.3rem 0.75rem;
  }

  .el-menu {
    background-color: transparent !important;
    border-right: none !important;
  }

  .el-menu-item:hover,
  .el-menu-item.is-active,
  .el-submenu__title.is-active {
    background-color: #3a7efa !important;
  }

  /deep/.el-menu-item-group .el-menu-item-group__title {
    background-color: #676cff !important;
    height: 0.45rem;
    line-height: 0.45rem;
    font-size: 0.18rem;
    color: #fff !important;
  }

  /deep/.el-menu-item-group .el-menu-item-group__title:hover {
    background-color: #3a7efa !important;
  }

  /deep/.el-submenu .el-submenu__title:hover {
    background-color: #3a7efa !important;
  }

  .student-item {
    background-color: #7276fe;
  }

  .index-container {
    width: 84% !important;
    height: 100vh;
  }

  .el-header {
    margin: auto;
    margin-top: 0.05rem;
    padding: 0 0.2rem;
    width: 96%;
    color: #333;
    line-height: 0.65rem;
    background-color: #fff;
    border-radius: 0.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .index-header-img {
    height: 0.45rem;
  }

  .index-header-right {
    font-size: 0.16rem;
  }

  .index-header-right-name {
    font-weight: bolder;
    font-size: 0.20rem;
    margin-right: 0.1rem;
  }

  .header-usname {
    font-size: 0.16rem;
    color: #3a7efa !important;
  }

  .el-main {
    padding: 0 !important;
    margin: 0 auto;
    margin-top: 0.08rem;
    width: 96%;
    border-radius: 0.1rem;
    /* background-color: pink; */
  }

  .tips-content {
    margin-bottom: 0.2rem !important;
  }

  .all-footer .el-button {
    width: 0.95rem !important;
  }
</style>
