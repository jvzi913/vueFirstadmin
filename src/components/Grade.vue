<template>
  <div id="grade">
    <div class="teacher-search">
      <div class="teacher-search-left">
        <el-button size="medium" @click="dialogVisible=true">+新增</el-button>
        <el-input size="medium" v-model="gradeName" placeholder="年级名称"></el-input>
      </div>
      <div class="teacher-search-btn">
        <el-button size="medium">搜索</el-button>
        <el-button size="medium">重置</el-button>
      </div>
    </div>
    <div class="teacher-container">
      <el-table :data="tableData" style="width: 100%" stripe height="95%">
        <el-table-column prop="num" label="序号" align="center">
        </el-table-column>
        <el-table-column prop="name" label="年级名称" align="center">
        </el-table-column>
        <el-table-column prop="creatTime" label="创建时间" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row,2)" type="text"><span class="ope-btn"><span class="iconfont">&#xe65c;</span>修改</span></el-button>
            <el-button @click="handleClick(scope.row,3)" type="text"><span class="ope-btn-del"><span class="iconfont-del">&#xe69b;</span>删除</span></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background layout="total,prev, pager, next,jumper" :total="1000">
      </el-pagination>
      <el-dialog title="添加年级信息" :visible.sync="dialogVisible" width="55%" :before-close="handleClose" destroy-on-close>
        <el-form ref="form" :model="form" label-width="80px" class="teacher-dia-mid grade-dia-mid">
          <el-form-item label="年级名称:" class="teacher-dia-mid-item grade-dia-mid-item">
            <el-input v-model="form.name" placeholder="请输入年级名称"></el-input>
          </el-form-item>
        </el-form>

        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'grade',
  data () {
    return {
      gradeName: '',
      dialogVisible: false,
      tableData: [{
        num: '1',
        name: '王小虎',
        creatTime: '2020-02-03'
      }],
      form: {
        name: ''
      }
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
  .grade-dia-mid-item{
    width: 100%!important;
  }
  /deep/.teacher-dia-mid-item input{
    background-color: #f4f7ff!important;
    border: 1px solid #c0d2ff!important;
  }
</style>
