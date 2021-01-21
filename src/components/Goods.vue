<template>
  <div id="goods">
    <div class="teacher-search">
      <div class="teacher-search-left">
        <el-button size="medium" @click="dialogVisible=true">+新增</el-button>
        <el-button size="medium" class="export">↑导出</el-button>
        <el-input size="medium" v-model="goodsName" placeholder="商品名称"></el-input>
        <el-select v-model="loadName" placeholder="货道名称">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
        <el-select v-model="loadStatus" placeholder="货道状态">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
        <el-input size="medium" v-model="needInte" placeholder="所需积分"></el-input>
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
        <el-table-column prop="name" label="名称" align="center">
        </el-table-column>
        <el-table-column prop="loadName" label="货道名称" align="center">
        </el-table-column>
        <el-table-column prop="loadNum" label="货道号" align="center">
        </el-table-column>
        <el-table-column prop="loadStatus" label="货道状态" align="center">
        </el-table-column>
        <el-table-column prop="stock" label="当前库存" align="center">
        </el-table-column>
        <el-table-column prop="goodsImg" label="商品图片" align="center">
        </el-table-column>
        <el-table-column prop="record" label="所需积分" align="center" sortable>
        </el-table-column>
        <el-table-column prop="creatTime" label="创建时间" align="center">
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
      <el-dialog title="添加商品信息" :visible.sync="dialogVisible" width="55%" :before-close="handleClose" destroy-on-close>
        <el-form ref="form" :model="form" label-width="80px" class="teacher-dia-mid">
          <el-form-item label="名称:" class="teacher-dia-mid-item">
            <el-input v-model="form.name" placeholder="请输入商品名称"></el-input>
          </el-form-item>
          <el-form-item label="图片:" class="teacher-dia-mid-item goods-dia-mid-item">
            <el-input v-model="form.goodsImg" placeholder="请选择商品图片"></el-input>
            <el-button>预览</el-button>
          </el-form-item>
          <el-form-item label="大小:" class="teacher-dia-mid-item">
            <el-input v-model="form.goodsSize" placeholder="请输入商品名称"></el-input>
          </el-form-item>
          <el-form-item label="颜色:" class="teacher-dia-mid-item">
            <el-input v-model="form.goodsColor" placeholder="请输入商品名称"></el-input>
          </el-form-item>
          <el-form-item label="所需积分:" class="teacher-dia-mid-item">
            <el-input v-model="form.needInte" placeholder="请输入商品名称"></el-input>
          </el-form-item>
          <el-form-item label="数量:" class="teacher-dia-mid-item">
            <el-input v-model="form.goodsNum" placeholder="请输入商品名称"></el-input>
          </el-form-item>
          <el-form-item label="货道名称:" class="teacher-dia-mid-item">
            <el-select v-model="form.name" placeholder="请选择货道名称">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="货道号:" class="teacher-dia-mid-item">
            <el-input v-model="form.loadNum" placeholder="请输入货道号"></el-input>
          </el-form-item>
          <el-form-item label="货道状态:" class="teacher-dia-mid-item">
            <el-input v-model="form.loadStatus" placeholder="请输入货道状态"></el-input>
          </el-form-item>
          <el-form-item label="当前库存:" class="teacher-dia-mid-item">
            <el-input v-model="form.goodsStock" placeholder="请输入当前库存"></el-input>
          </el-form-item>
          <el-form-item label="最大容量:" class="teacher-dia-mid-item">
            <el-input v-model="form.oversize" placeholder="请输入最大容量"></el-input>
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
  name: 'goods',
  data () {
    return {
      dialogVisible: false,
      goodsName: '',
      loadName: '',
      loadStatus: '',
      needInte: '',
      tableData: [{
        num: '1',
        name: '王小虎',
        loadName: '女',
        loadNum: '2011122',
        loadStatus: '停运',
        stock: '25',
        goodsImg: '',
        record: '23',
        creatTime: '2020-02-03'
      }],
      form: {
        name: '',
        goodsImg: '',
        goodsSize: '',
        goodsColor: '',
        needInte: '',
        goodsNum: '',
        loadNum: '',
        loadName: '',
        loadStatus: '',
        goodsStock: '',
        oversize: ''

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

  .teacher-search-left .el-input,.teacher-search-left .el-select{
    width: 20%!important;
    margin-right: 0.2rem!important;
  }

  /deep/.teacher-dia-mid-item input {
    background-color: #f4f7ff !important;
    border: 1px solid #c0d2ff !important;
  }
  .goods-dia-mid-item .el-input{
    width: 73.6%;
  }
  .goods-dia-mid-item .el-button{
    background-color: #b6b7ba;
    border: 1px solid #b6b7ba;
    color: #fff;
  }
  .teacher-dia-mid-item .el-select{
    width: 100%!important;
  }
</style>
