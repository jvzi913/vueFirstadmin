<template>
  <div id="classes">
    <div class="teacher-search">
      <div class="teacher-search-left">
        <el-button size="medium" @click="dialogVisible=true">+新增</el-button>
        <el-input size="medium" v-model="gradeName" placeholder="年级名称"></el-input>
        <el-input size="medium" v-model="classesName" placeholder="班级名称"></el-input>
        <el-input size="medium" v-model="teacherName" placeholder="教师名称"></el-input>
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
        <el-table-column prop="gradeName" label="年级名称" align="center">
        </el-table-column>
        <el-table-column prop="className" label="班级名称" align="center">
        </el-table-column>
        <el-table-column prop="teaName" label="教师名称" align="center">
        </el-table-column>
        <el-table-column prop="totalPerson" label="班级人数" align="center">
        </el-table-column>
        <el-table-column prop="totalInte" label="总积分" align="center">
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
      <el-dialog title="添加班级信息" :visible.sync="dialogVisible" width="55%" :before-close="handleClose" destroy-on-close>
        <el-form ref="form" :model="form" label-width="80px" class="teacher-dia-mid">
          <el-form-item label="年级名称:" class="teacher-dia-mid-item">
            <el-select v-model="form.name" placeholder="请选择年级名称">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="班级名称:" class="teacher-dia-mid-item">
            <el-input v-model="form.classesUname" placeholder="请输入班级名称"></el-input>
          </el-form-item>
          <el-form-item label="教师名称:" class="teacher-dia-mid-item">
            <el-input v-model="form.teaUname" placeholder="请输入教师名称"></el-input>
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
  name: 'classes',
  data () {
    return {
      dialogVisible: false,
      gradeName: '',
      classesName: '',
      teacherName: '',
      tableData: [{
        num: '1',
        gradeName: '一年级',
        className: '1班',
        teaName: '张三',
        totalPerson: '35',
        totalInte: '225',
        creatTime: '2020-02-03'
      }],
      form: {
        name: '',
        classesUname: '',
        teaUname: ''
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
  /deep/.teacher-dia-mid-item input {
    background-color: #f4f7ff !important;
    border: 1px solid #c0d2ff !important;
  }

  .el-select {
    width: 100% !important;
  }
</style>
