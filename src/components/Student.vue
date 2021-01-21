<template>
  <div id="student">
    <div class="teacher-search">
      <div class="teacher-search-left">
        <el-button size="medium" @click="dialogVisible=true">+新增</el-button>
        <el-button size="medium" class="export">↑导出</el-button>
        <el-input size="medium" v-model="usName" placeholder="姓名"></el-input>
        <el-input size="medium" v-model="usSex" placeholder="性别"></el-input>
        <el-input size="medium" v-model="usNum" placeholder="学号"></el-input>
        <el-input size="medium" v-model="usInte" placeholder="积分数"></el-input>
      </div>
      <div class="teacher-search-btn">
        <el-button size="medium">搜索</el-button>
        <el-button size="medium">重置</el-button>
      </div>
    </div>
    <div class="teacher-container">
      <el-table :data="tableData" style="width: 100%" stripe height="95%">
        <el-table-column type="selection" align="center">
        </el-table-column>
        <el-table-column prop="num" label="序号" align="center">
        </el-table-column>
        <el-table-column prop="name" label="姓名" align="center">
        </el-table-column>
        <el-table-column prop="sex" label="性别" align="center">
        </el-table-column>
        <el-table-column prop="old" label="年龄" align="center">
        </el-table-column>
        <el-table-column prop="nation" label="民族" align="center" width="75">
        </el-table-column>
        <el-table-column prop="studentNum" label="学号" align="center">
        </el-table-column>
        <el-table-column prop="nowInte" label="当前积分" align="center" sortable width="100">
        </el-table-column>
        <el-table-column prop="record" label="兑换记录" align="center" sortable width="100">
        </el-table-column>
        <el-table-column prop="account" label="登录账号" align="center">
        </el-table-column>
        <el-table-column prop="creatTime" label="创建时间" align="center" width="120">
        </el-table-column>
        <el-table-column label="操作" align="center" width="200">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row,1)" type="text"><span class="ope-btn"><span class="iconfont">&#xe67f;</span>查看</span></el-button>
            <el-button @click="handleClick(scope.row,2)" type="text"><span class="ope-btn"><span class="iconfont">&#xe65c;</span>修改</span></el-button>
            <el-button @click="handleClick(scope.row,3)" type="text"><span class="ope-btn-del"><span class="iconfont-del">&#xe69b;</span>删除</span></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background layout="total,prev, pager, next,jumper" :total="1000">
      </el-pagination>
      <el-dialog title="添加学生信息" :visible.sync="dialogVisible" width="55%" :before-close="handleClose" destroy-on-close>
        <el-form ref="form" :model="form" label-width="80px" class="teacher-dia-mid">
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
          <el-form-item label="学号:" class="teacher-dia-mid-item">
            <el-input v-model="form.studentNum" placeholder="请输入学号"></el-input>
          </el-form-item>
          <el-form-item label="民族:" class="teacher-dia-mid-item">
            <el-input v-model="form.nation" placeholder="请输入民族"></el-input>
          </el-form-item>
          <el-form-item label="当前积分:" class="teacher-dia-mid-item">
            <el-input v-model="form.nowInte" placeholder="请输入积分数"></el-input>
          </el-form-item>
          <el-form-item label="联系人:" class="teacher-dia-mid-item">
            <el-input v-model="form.helpUsname" placeholder="请输入紧急联系人姓名"></el-input>
          </el-form-item>
          <el-form-item label="联系电话:" class="teacher-dia-mid-item">
            <el-input v-model="form.helpPhone" placeholder="请输入紧急联系人电话"></el-input>
          </el-form-item>
          <el-form-item label="登录账号:" class="teacher-dia-mid-item">
            <el-input v-model="form.account" placeholder="请设置登录账号"></el-input>
          </el-form-item>
          <el-form-item label="登录密码:" class="teacher-dia-mid-item">
            <el-input v-model="form.paw" placeholder="请设置登录密码"></el-input>
          </el-form-item>
        </el-form>

        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">添 加</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'student',
  data () {
    return {
      dialogVisible: false,
      usName: '',
      usSex: '',
      usNum: '',
      usInte: '',
      tableData: [{
        num: '1',
        name: '王小虎',
        sex: '女',
        old: '40',
        nation: '汉',
        studentNum: '201265231',
        nowInte: '25',
        record: '2',
        account: 'asir',
        creatTime: '2020-02-03'
      },
      {
        num: '1',
        name: '王小虎',
        sex: '女',
        old: '40',
        nation: '汉',
        studentNum: '201265231',
        nowInte: '23',
        record: '5',
        account: 'asir',
        creatTime: '2020-02-03'
      }],
      form: {
        name: '',
        age: '',
        studentNum: '',
        nation: '',
        nowInte: '',
        helpUsname: '',
        helpPhone: '',
        account: '',
        paw: ''
      },
      radio: '1'
    }
  },
  methods: {
    handleClick (row) {
      console.log(row)
    },
    handleClose (done) {
      console.log('关闭了~')
    }
  }
}
</script>

<style scoped>
  .export {
    margin-left: 0rem !important;
  }
  /deep/.teacher-dia-mid-item input{
    background-color: #f4f7ff!important;
    border: 1px solid #c0d2ff!important;
  }
</style>
