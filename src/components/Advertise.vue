<template>
  <div id="advert">
    <div class="teacher-search">
      <div class="teacher-search-left">
        <el-button size="medium" @click="dialogVisible=true">+新增</el-button>
        <el-input size="medium" v-model="advName" placeholder="广告名称"></el-input>
        <el-input size="medium" v-model="advContent" placeholder="广告内容"></el-input>
        <el-input size="medium" v-model="advFormat" placeholder="格式"></el-input>
        <el-input size="medium" v-model="advFilename" placeholder="文件名称"></el-input>
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
        <el-table-column prop="advName" label="广告名称" align="center">
        </el-table-column>
        <el-table-column prop="advContent" label="广告内容" align="center">
        </el-table-column>
        <el-table-column prop="advSize" label="大小" align="center">
        </el-table-column>
        <el-table-column prop="advFormat" label="格式" align="center">
        </el-table-column>
        <el-table-column prop="advFilename" label="文件名称" align="center">
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
      <el-dialog title="添加广告信息" :visible.sync="dialogVisible" width="55%" :before-close="handleClose" destroy-on-close>
        <el-form ref="form" :model="form" label-width="80px" class="teacher-dia-mid">
          <el-form-item label="广告名称:" class="teacher-dia-mid-item">
            <el-input v-model="form.advName" placeholder="请输入广告名称"></el-input>
          </el-form-item>
          <el-form-item label="上传文件:" class="teacher-dia-mid-item goods-dia-mid-item">
            <el-input v-model="form.advFile" placeholder="请选择广告文件"></el-input>
            <el-button>预览</el-button>
          </el-form-item>
          <el-form-item label="广告内容:" class="teacher-dia-mid-item adv-dia-mid-item">
            <el-input type="textarea" v-model="form.advContent" placeholder="请输入广告内容"></el-input>
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
  name: 'advert',
  data () {
    return {
      dialogVisible: false,
      advName: '',
      advContent: '',
      advFormat: '',
      advFilename: '',
      tableData: [{
        num: '1',
        advName: '广告',
        advContent: '这是广告内容',
        advSize: '4M',
        advFormat: 'mp4',
        advFilename: '1.mp4',
        creatTime: '2020-02-03'
      }],
      form: {
        advName: '',
        advFile: '',
        advContent: ''
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
  /deep/.teacher-dia-mid-item input{
    background-color: #f4f7ff!important;
    border: 1px solid #c0d2ff!important;
  }
  .adv-dia-mid-item{
    width: 100%!important;
  }
  /deep/.adv-dia-mid-item textarea{
    height: 0.7rem;
    resize: none;
    background-color: #f4f7ff!important;
    border: 1px solid #c0d2ff!important;
  }
  .goods-dia-mid-item .el-input{
    width: 73.6%;
  }
  .goods-dia-mid-item .el-button{
    background-color: #b6b7ba;
    border: 1px solid #b6b7ba;
    color: #fff;
  }

</style>
