<template>
  <div id="person">
    <div class="teacher-search">
      <div style="font-size: 0.24rem!important;line-height: 0.9rem;margin-left:0.2rem;font-weight: bolder;">个人信息</div>
    </div>
    <div class="teacher-container">
      <el-form ref="form" :model="form" label-width="80px" class="teacher-dia-mid person-dia-mid">
        <el-form-item label="姓名:" class="teacher-dia-mid-item">
          <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="性别:" class="teacher-dia-mid-item">
          <el-radio v-model="radio" label="1">男</el-radio>
          <el-radio v-model="radio" label="2">女</el-radio>
        </el-form-item>
        <el-form-item label="年龄:" class="teacher-dia-mid-item">
          <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item label="民族:" class="teacher-dia-mid-item">
          <el-input v-model="form.nation" placeholder="请输入民族"></el-input>
        </el-form-item>
        <el-form-item label="身份证号:" class="teacher-dia-mid-item">
          <el-input v-model="form.idnum" placeholder="请输入身份证号"></el-input>
        </el-form-item>
        <el-form-item label="手机号:" class="teacher-dia-mid-item">
          <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="办公电话:" class="teacher-dia-mid-item">
          <el-input v-model="form.tel" placeholder="请输入办公电话"></el-input>
        </el-form-item>
        <el-form-item label="登录账号:" class="teacher-dia-mid-item">
          <el-input v-model="form.account" placeholder="请设置登录账号"></el-input>
        </el-form-item>
        <el-form-item label="登录密码:" class="teacher-dia-mid-item">
          <el-input v-model="form.paw" placeholder="请设置登录密码"></el-input>
        </el-form-item>
      </el-form>
      <div class="person-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">修 改</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'person',
  data () {
    return {
      form: {
        name: '',
        age: '',
        nation: '',
        idnum: '',
        phone: '',
        tel: '',
        account: '',
        paw: ''
      },
      radio: '1'
    }
  }
}
</script>

<style scoped>
  .person-dia-mid{
    padding-top: 0.2rem;
  }
  .person-footer{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 1rem;
  }
  .person-footer .el-button{
    height: 0.5rem;
  }
</style>
