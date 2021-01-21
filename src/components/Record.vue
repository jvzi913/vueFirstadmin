<template>
  <div id="record">
    <div class="teacher-search">
      <div class="teacher-search-left">
        <el-button size="medium">↑导出</el-button>
        <el-input size="medium" v-model="points" placeholder="消费积分"></el-input>
        <el-input size="medium" v-model="goods" placeholder="兑换商品"></el-input>
        <el-input size="medium" v-model="person" placeholder="兑换人"></el-input>
        <el-input size="medium" v-model="grade" placeholder="年级名称"></el-input>
        <el-input size="medium" v-model="classes" placeholder="班级名称"></el-input>
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
        <el-table-column prop="costPoints" label="消费积分" align="center" sortable>
        </el-table-column>
        <el-table-column prop="costGoods" label="兑换商品" align="center">
        </el-table-column>
        <el-table-column prop="costPerson" label="兑换人" align="center">
        </el-table-column>
        <el-table-column prop="gradeName" label="年级名称" align="center">
        </el-table-column>
        <el-table-column prop="classesName" label="班级名称" align="center">
        </el-table-column>
        <el-table-column prop="teacherName" label="教师名称" align="center">
        </el-table-column>
        <el-table-column prop="creatTime" label="创建时间" align="center">
        </el-table-column>
      </el-table>
      <el-pagination background layout="total,prev, pager, next,jumper" :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'record',
  data () {
    return {
      points: '',
      goods: '',
      person: '',
      grade: '',
      classes: '',
      tableData: [{
        num: '1',
        costPoints: '20',
        costGoods: '书包',
        costPerson: '张三',
        gradeName: '一年级',
        classesName: '二班',
        teacherName: '李四',
        creatTime: '2020-02-03'
      }]
    }
  },
  methods: {
    handleClose (done) {
      console.log('关闭了~')
    }
  }
}
</script>

<style>
</style>
